import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Debug endpoint to test Supabase connection
export async function GET() {
  const debug = {
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    supabaseUrlPrefix: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30),
    error: null as string | null,
    posts: null as unknown,
  };

  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      debug.error = 'Missing environment variables';
      return NextResponse.json(debug);
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, status')
      .limit(5);

    if (error) {
      debug.error = `Supabase error: ${error.message} (code: ${error.code})`;
    } else {
      debug.posts = data;
    }
  } catch (e) {
    debug.error = `Exception: ${String(e)}`;
  }

  return NextResponse.json(debug);
}
