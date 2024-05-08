import categoria from "@/app/(models)/categoria";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { nombre } = await req.json();
    const nuevaCategoria = await categoria.create({ nombre });
    return NextResponse.json({ nuevaCategoria }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error al crear categoría", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const categorias = await categoria.find();
    return NextResponse.json({ categorias }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error al obtener categorías", error }, { status: 500 });
  }
}
