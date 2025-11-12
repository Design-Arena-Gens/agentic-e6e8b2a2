"use client";
import { useState } from "react";

export default function PlaygroundPage(){
  const [prompt, setPrompt] = useState("Explain transformers in simple terms.");
  const [mode, setMode] = useState<"auto"|"mock-fast"|"mock-accurate">("auto");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");
  const [meta, setMeta] = useState<{model?: string; latencyMs?: number}>({});

  async function run(){
    setLoading(true);
    setResult("");
    const started = performance.now();
    const res = await fetch("/api/route",{
      method:"POST",
      headers:{"Content-Type":"application/json","Authorization":"Bearer pk_demo_public"},
      body: JSON.stringify({ prompt, mode })
    });
    const data = await res.json();
    setMeta({ model: data.model, latencyMs: Math.round(performance.now()-started) });
    setResult(data.output || data.imageUrl || JSON.stringify(data));
    setLoading(false);
  }

  return (
    <div className="grid" style={{gap:16}}>
      <h1>Playground</h1>
      <div className="grid" style={{gridTemplateColumns:"1fr 320px", gap:16}}>
        <div className="card">
          <textarea className="input" rows={10} value={prompt} onChange={e=>setPrompt(e.target.value)} />
          <div style={{display:"flex",gap:12,marginTop:12,alignItems:"center"}}>
            <select className="input" style={{width:220}} value={mode} onChange={e=>setMode(e.target.value as any)}>
              <option value="auto">Auto (route intelligently)</option>
              <option value="mock-fast">Mock Fast</option>
              <option value="mock-accurate">Mock Accurate</option>
            </select>
            <button className="btn" onClick={run} disabled={loading}>{loading?"Running...":"Run"}</button>
          </div>
        </div>
        <div className="card">
          <div className="section-title">Result</div>
          {meta.model && (
            <div style={{color:"var(--muted)",fontSize:12,marginBottom:8}}>model: {meta.model} ? latency: {meta.latencyMs}ms</div>
          )}
          {result.startsWith("http") ? (
            <img src={result} alt="generated" style={{maxWidth:"100%",borderRadius:12}}/>
          ) : (
            <pre style={{whiteSpace:"pre-wrap"}}>{result}</pre>
          )}
        </div>
      </div>
    </div>
  );
}
