// app/api/triangle/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { angka } = body;

  if (!angka || !/^[0-9]+$/.test(angka)) {
    return NextResponse.json({ error: "inputan harus angka" }, { status: 400 });
  }

  const batas = parseInt(angka, 10);
  let output = "";
  for (let i = 1; i <= batas; i++) {
    if (i % 2 !== 0) {
      output += i + "\n";
    }
  }
  return NextResponse.json({ hasil: output });
}
