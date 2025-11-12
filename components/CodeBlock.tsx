"use client";
import { useState } from "react";

export function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="card" style={{padding:0}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",borderBottom:"1px solid #1a2336",fontSize:12,color:"var(--muted)"}}>
        <span>{language}</span>
        <button className="btn secondary" onClick={() => {navigator.clipboard.writeText(code);setCopied(true);setTimeout(()=>setCopied(false),1500);}}>{copied ? "Copied" : "Copy"}</button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  );
}
