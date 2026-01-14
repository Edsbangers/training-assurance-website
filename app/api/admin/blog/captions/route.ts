import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { getAuthUser } from '@/lib/auth';

// POST - Create a social caption for a blog post
export async function POST(request: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { blogPostId, platform, caption, hashtags } = await request.json();

    if (!blogPostId || !platform || !caption) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from('blog_social_captions')
      .insert({
        blog_post_id: blogPostId,
        platform,
        caption,
        hashtags: hashtags || [],
        status: 'pending',
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating caption:', error);
      return NextResponse.json({ error: 'Failed to create caption' }, { status: 500 });
    }

    return NextResponse.json({ caption: data });
  } catch (error) {
    console.error('Caption create error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
