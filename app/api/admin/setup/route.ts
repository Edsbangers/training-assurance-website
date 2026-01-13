import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import bcrypt from "bcryptjs";

// One-time admin user creation
export async function POST(request: NextRequest) {
  try {
    const { email, password, name, setupKey } = await request.json();

    // Verify setup key
    const validSetupKey = process.env.ADMIN_SETUP_KEY;
    if (!validSetupKey || setupKey !== validSetupKey) {
      return NextResponse.json({ error: "Invalid setup key" }, { status: 403 });
    }

    if (!email || !password || !name) {
      return NextResponse.json({ error: "Email, password, and name are required" }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
    }

    // Check if admin already exists
    const { data: existing } = await supabaseAdmin
      .from("admin_users")
      .select("id")
      .eq("email", email.toLowerCase())
      .single();

    if (existing) {
      return NextResponse.json({ error: "Admin user already exists" }, { status: 409 });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create admin user
    const { data: user, error } = await supabaseAdmin
      .from("admin_users")
      .insert({
        email: email.toLowerCase(),
        password_hash: passwordHash,
        name,
        role: "super_admin",
      })
      .select("id, email, name, role")
      .single();

    if (error) {
      console.error("Error creating admin:", error);
      return NextResponse.json({ error: "Failed to create admin user" }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Admin user created successfully",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Setup error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
