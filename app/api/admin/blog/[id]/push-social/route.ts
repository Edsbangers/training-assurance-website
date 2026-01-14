import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { getAuthUser } from '@/lib/auth';

// POST - Push blog post to social media via Make.com webhook
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;

  try {
    // Get the blog post
    const { data: blogPost, error: postError } = await supabaseAdmin
      .from('blog_posts')
      .select('id, title, slug, excerpt, content, featured_image')
      .eq('id', id)
      .single();

    if (postError || !blogPost) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    // Get social captions for this post
    const { data: captions, error: captionsError } = await supabaseAdmin
      .from('blog_social_captions')
      .select('*')
      .eq('blog_post_id', id);

    if (captionsError) {
      console.error('Error fetching captions:', captionsError);
    }

    // Get the webhook config
    const { data: webhookConfig, error: webhookError } = await supabaseAdmin
      .from('social_webhook_config')
      .select('*')
      .eq('enabled', true)
      .single();

    if (webhookError || !webhookConfig?.webhook_url) {
      return NextResponse.json({
        error: 'No webhook configured. Please set up a webhook URL in the social_webhook_config table.'
      }, { status: 400 });
    }

    // Build the webhook payload
    const baseUrl = 'https://www.trainingassuranceconsultancy.com';
    const payload = {
      action: 'publish',
      post: {
        id: blogPost.id,
        title: blogPost.title,
        url: `${baseUrl}/blog/${blogPost.slug}`,
        excerpt: blogPost.excerpt,
        content: blogPost.content,
        ogImageUrl: blogPost.featured_image || `${baseUrl}/api/og?title=${encodeURIComponent(blogPost.title)}`,
      },
      captions: captions?.map((c: { platform: string; caption: string; hashtags: string[] }) => ({
        platform: c.platform,
        caption: c.caption,
        hashtags: c.hashtags,
      })) || [],
      scheduledTime: new Date().toISOString(),
    };

    // Send to Make.com webhook
    const webhookResponse = await fetch(webhookConfig.webhook_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error('Webhook delivery failed:', errorText);
      return NextResponse.json({
        error: 'Webhook delivery failed',
        details: errorText
      }, { status: 502 });
    }

    // Update caption status to sent
    if (captions && captions.length > 0) {
      await supabaseAdmin
        .from('blog_social_captions')
        .update({ status: 'sent', sent_at: new Date().toISOString() })
        .eq('blog_post_id', id);
    }

    // Update webhook trigger count
    await supabaseAdmin
      .from('social_webhook_config')
      .update({
        last_triggered: new Date().toISOString(),
        trigger_count: (webhookConfig.trigger_count || 0) + 1
      })
      .eq('id', webhookConfig.id);

    return NextResponse.json({
      success: true,
      message: 'Successfully pushed to socials',
      payload,
    });
  } catch (error) {
    console.error('Push social error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
