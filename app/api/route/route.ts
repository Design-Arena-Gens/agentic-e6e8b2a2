import { NextRequest, NextResponse } from "next/server";
import { selectProvider, type Mode } from "@/lib/providers/router";

export async function POST(req: NextRequest){
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (token !== "pk_demo_public"){
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { prompt, mode = "auto" } = await req.json().catch(()=>({}));
  if (!prompt || typeof prompt !== "string"){
    return NextResponse.json({ error: "Missing 'prompt'" }, { status: 400 });
  }
  const m: Mode = (mode === "mock-fast" || mode === "mock-accurate" ? mode : "auto");

  const selection = selectProvider(m, prompt);
  if (selection.kind === "image"){
    // Placeholder image for the demo
    const imageUrl = `https://placehold.co/768x512/0f1426/ffffff?text=${encodeURIComponent("Pai Keys Image")}`;
    return NextResponse.json({ model: "mock-image", imageUrl });
  }
  const provider = selection.provider!;
  const output = await provider.generate(prompt);
  return NextResponse.json({ model: provider.name, output });
}
