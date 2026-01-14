import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// Webhook endpoint for Make.com/Buffer/Zapier integration
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const apiKey = authHeader?.replace('Bearer ', '');

    // Verify API key from webhook config
    if (!apiKey) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Verify the API key against stored webhook configs
    const { data: webhookConfig } = await supabaseAdmin
      .from('social_webhook_config')
      .select('*')
      .eq('api_key', apiKey)
      .eq('enabled', true)
      .single();

    if (!webhookConfig) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 401 });
    }

    const { blogPostId, platform, action } = await request.json();

    if (!blogPostId) {
      return NextResponse.json({ error: 'Blog post ID required' }, { status: 400 });
    }

    // Get the blog post and its social captions
    const { data: blogPost } = await supabaseAdmin
      .from('blog_posts')
      .select('id, title, slug, excerpt, featured_image')
      .eq('id', blogPostId)
      .single();

    if (!blogPost) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    const { data: captions } = await supabaseAdmin
      .from('blog_social_captions')
      .select('*')
      .eq('blog_post_id', blogPostId)
      .eq('platform', platform || webhookConfig.platform);

    if (!captions || captions.length === 0) {
      return NextResponse.json({ error: 'No captions found for this post' }, { status: 404 });
    }

    // Build the webhook payload
    const baseUrl = 'https://www.trainingassuranceconsultancy.com';
    const payload = {
      action: action || 'publish',
      post: {
        id: blogPost.id,
        title: blogPost.title,
        url: `${baseUrl}/blog/${blogPost.slug}`,
        excerpt: blogPost.excerpt,
        ogImageUrl: blogPost.featured_image || `${baseUrl}/api/og?title=${encodeURIComponent(blogPost.title)}`,
      },
      captions: captions.map((c: { platform: string; caption: string; hashtags: string[] }) => ({
        platform: c.platform,
        caption: c.caption,
        hashtags: c.hashtags,
      })),
      scheduledTime: new Date().toISOString(),
    };

    // Send to the configured webhook URL
    if (webhookConfig.webhook_url) {
      const webhookResponse = await fetch(webhookConfig.webhook_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!webhookResponse.ok) {
        console.error('Webhook delivery failed:', await webhookResponse.text());
        return NextResponse.json({ error: 'Webhook delivery failed' }, { status: 502 });
      }

      // Update caption status
      await supabaseAdmin
        .from('blog_social_captions')
        .update({ status: 'sent', sent_at: new Date().toISOString() })
        .eq('blog_post_id', blogPostId)
        .eq('platform', platform || webhookConfig.platform);
    }

    return NextResponse.json({
      success: true,
      message: 'Webhook sent successfully',
      payload,
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET endpoint to check webhook status
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const blogPostId = searchParams.get('blogPostId');

  if (!blogPostId) {
    return NextResponse.json({ error: 'Blog post ID required' }, { status: 400 });
  }

  try {
    const { data: captions } = await supabaseAdmin
      .from('blog_social_captions')
      .select('platform, status, sent_at')
      .eq('blog_post_id', blogPostId);

    return NextResponse.json({ captions });
  } catch (error) {
    console.error('Webhook status error:', error);
    return NextResponse.json({ error: 'Failed to get webhook status' }, { status: 500 });
  }
}
