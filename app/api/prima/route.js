// app/api/triangle/route.js
import { NextResponse } from "next/server";
function isPrima(angka) {
  if (angka < 2) return false;
  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) return false;
  }
  return true;
}
export async function POST(req) {
  const body = await req.json();
  const { angka } = body;

  if (!angka || !/^[0-9]+$/.test(angka)) {
    return NextResponse.json({ error: "inputan harus angka" }, { status: 400 });
  }

  const batas = parseInt(angka, 10);
  let output = "";
  for (let i = 1; i <= batas; i++) {
    if (isPrima(i)) {
      output += i + "\n";
    }
  }
  return NextResponse.json({ hasil: output });
}
