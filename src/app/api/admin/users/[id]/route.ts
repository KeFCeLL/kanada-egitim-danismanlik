import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import bcrypt from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
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
      WHERE id = ${params.id}
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Kullanıcı bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Kullanıcı alınırken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { username, email, password, role, is_active } = await request.json();

    let updateQuery = sql`
      UPDATE users
      SET 
        username = ${username},
        email = ${email},
        role = ${role},
        is_active = ${is_active},
        updated_at = NOW()
    `;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateQuery = sql`
        ${updateQuery}
        , password = ${hashedPassword}
      `;
    }

    updateQuery = sql`
      ${updateQuery}
      WHERE id = ${params.id}
      RETURNING id, username, email, role, is_active, created_at, updated_at
    `;

    const result = await updateQuery;

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Kullanıcı bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: 'Kullanıcı güncellenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const result = await sql`
      DELETE FROM users
      WHERE id = ${params.id}
      RETURNING id
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Kullanıcı bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Kullanıcı başarıyla silindi' });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { error: 'Kullanıcı silinirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 