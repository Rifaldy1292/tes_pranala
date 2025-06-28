// app/api/triangle/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { angka } = body;

  if (!angka || !/^[0-9]+$/.test(angka)) {
    return NextResponse.json({ error: "inputan harus angka" }, { status: 400 });
  }

  const digit = angka.toString().split("");
  let output = "";
  for (let i = 0; i < digit.length; i++) {
    const baris = digit[i] + "0".repeat(i + 1);
    output += baris + "\n";
  }

  return NextResponse.json({ hasil: output });
}
