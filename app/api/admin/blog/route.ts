import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { cookies } from 'next/headers';

// Verify admin session
async function verifyAdmin() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('admin_session')?.value;

  if (!sessionId) {
    return null;
  }

  const { data: session } = await supabaseAdmin
    .from('admin_sessions')
    .select('*, admin_users(*)')
    .eq('session_id', sessionId)
    .gt('expires_at', new Date().toISOString())
    .single();

  return session?.admin_users || null;
}

// GET - List all blog posts with their social captions
export async function GET() {
  const admin = await verifyAdmin();
  if (!admin) {
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
      return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Blog API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create a new blog post
export async function POST(request: NextRequest) {
  const admin = await verifyAdmin();
  if (!admin) {
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
