import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthUser } from '@/lib/auth';

// Test endpoint that exactly mimics blog API but with debug output
export async function GET() {
  const debug = {
    step: 'starting',
    authUser: null as unknown,
    authError: null as string | null,
    envCheck: false,
    supabaseError: null as string | null,
    posts: null as unknown,
    postCount: 0,
  };

  try {
    debug.step = 'checking auth';
    const user = await getAuthUser();
    debug.authUser = user ? { email: user.email, role: user.role } : null;

    if (!user) {
      debug.authError = 'No user returned from getAuthUser';
      return NextResponse.json(debug, { status: 401 });
    }

    debug.step = 'checking env vars';
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      debug.authError = 'Missing env vars';
      return NextResponse.json(debug, { status: 500 });
    }
    debug.envCheck = true;

    debug.step = 'creating supabase client';
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    debug.step = 'querying blog_posts with join';
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        blog_social_captions (*)
      `)
      .order('created_at', { ascending: false });

    if (error) {
      debug.supabaseError = `${error.message} (code: ${error.code})`;
      return NextResponse.json(debug, { status: 500 });
    }

    debug.step = 'success';
    debug.posts = posts?.map(p => ({ id: p.id, title: p.title, status: p.status }));
    debug.postCount = posts?.length || 0;

    return NextResponse.json(debug);
  } catch (e) {
    debug.supabaseError = `Exception at ${debug.step}: ${String(e)}`;
    return NextResponse.json(debug, { status: 500 });
  }
}
