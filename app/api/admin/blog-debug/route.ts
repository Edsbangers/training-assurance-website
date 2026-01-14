import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthUser } from '@/lib/auth';

// Debug endpoint to test Supabase connection and auth
export async function GET(request: NextRequest) {
  const debug = {
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    hasJwtSecret: !!process.env.JWT_SECRET,
    supabaseUrlPrefix: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30),
    cookiePresent: !!request.cookies.get('tac_admin_token')?.value,
    authUser: null as unknown,
    authError: null as string | null,
    supabaseError: null as string | null,
    posts: null as unknown,
  };

  // Test auth
  try {
    const user = await getAuthUser();
    debug.authUser = user;
  } catch (e) {
    debug.authError = `Auth exception: ${String(e)}`;
  }

  // Test Supabase
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      debug.supabaseError = 'Missing environment variables';
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
      debug.supabaseError = `Supabase error: ${error.message} (code: ${error.code})`;
    } else {
      debug.posts = data;
    }
  } catch (e) {
    debug.supabaseError = `Supabase exception: ${String(e)}`;
  }

  return NextResponse.json(debug);
}
