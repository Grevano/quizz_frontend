import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Ambil semua data
export async function GET() {
  const gears = await prisma.gear.findMany();
  return NextResponse.json(gears);
}

//  Tambah data baru
export async function POST(request: Request) {
  const body = await request.json();
  const newGear = await prisma.gear.create({
    data: {
      name: body.name,
      category: body.category,
      brand: body.brand,
      description: body.description,
    },
  });
  return NextResponse.json(newGear, { status: 201 });
}

// Hapus data gear berdasarkan ID
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  await prisma.gear.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json({ message: 'Gear deleted successfully' }, { status: 200 });
}
