import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ key: "pk_demo_public" });
}

export async function POST() {
  // In a real app, mint a user-specific key
  return NextResponse.json({ key: "pk_demo_public" });
}
