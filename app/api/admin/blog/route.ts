import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { getAuthUser } from '@/lib/auth';

// GET - List all blog posts with their social captions
export async function GET() {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { data: posts, error } = await supabaseAdmin
      .from('blog_posts')
      .select(`
        *,
        blog_social_captions (*)
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      // Check if it's a table not found error
      if (error.code === '42P01' || error.message?.includes('does not exist')) {
        return NextResponse.json({
          error: 'Blog tables not set up. Please run the database migrations.',
          details: 'Run the SQL migrations in Supabase SQL Editor: supabase/migrations/001_add_blog_tables.sql'
        }, { status: 500 });
      }
      return NextResponse.json({ error: 'Failed to fetch posts', details: error.message }, { status: 500 });
    }

    return NextResponse.json({ posts: posts || [] });
  } catch (error) {
    console.error('Blog API error:', error);
    return NextResponse.json({ error: 'Internal server error', details: String(error) }, { status: 500 });
  }
}

// POST - Create a new blog post
export async function POST(request: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, content, excerpt, category, keywords, status } = body;

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const { data: post, error } = await supabaseAdmin
      .from('blog_posts')
      .insert({
        title,
        slug,
        content,
        excerpt,
        category,
        keywords,
        status: status || 'draft',
        published_at: status === 'published' ? new Date().toISOString() : null,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating post:', error);
      return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error('Blog create error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
