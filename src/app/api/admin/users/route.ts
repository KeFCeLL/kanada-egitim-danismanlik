import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import bcrypt from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Check if users table exists
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'users'
      );
    `;

    if (!tableExists[0].exists) {
      console.error('Users table does not exist');
      return NextResponse.json(
        { error: 'Kullanıcılar tablosu bulunamadı' },
        { status: 500 }
      );
    }

    const result = await sql`
      SELECT 
        id,
        username,
        email,
        role,
        is_active,
        created_at,
        updated_at
      FROM users
      ORDER BY created_at DESC
    `;
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Kullanıcılar alınırken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { username, email, password, role } = await request.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'Kullanıcı adı, e-posta ve şifre zorunludur' },
        { status: 400 }
      );
    }

    // Check if users table exists
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'users'
      );
    `;

    if (!tableExists[0].exists) {
      console.error('Users table does not exist');
      return NextResponse.json(
        { error: 'Kullanıcılar tablosu bulunamadı' },
        { status: 500 }
      );
    }

    // Check if username or email already exists
    const existingUser = await sql`
      SELECT id FROM users 
      WHERE username = ${username} OR email = ${email}
    `;

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: 'Bu kullanıcı adı veya e-posta adresi zaten kullanılıyor' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await sql`
      INSERT INTO users (username, email, password, role)
      VALUES (${username}, ${email}, ${hashedPassword}, ${role || 'admin'})
      RETURNING id, username, email, role, is_active, created_at, updated_at
    `;

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Kullanıcı oluşturulurken bir hata oluştu' },
      { status: 500 }
    );
  }
} 