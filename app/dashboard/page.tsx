"use client";
import { useEffect, useState } from "react";

export default function Dashboard(){
  const [key, setKey] = useState<string>("");
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    (async ()=>{
      const res = await fetch("/api/keys");
      const data = await res.json();
      setKey(data.key);
      setLoading(false);
    })();
  },[]);
  return (
    <div className="grid" style={{gap:16}}>
      <h1>Dashboard</h1>
      <div className="card">
        <div className="section-title">Your API Key</div>
        {loading? <div>Loading?</div> : (
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div className="kbd" style={{fontSize:16}}>{key}</div>
            <button className="btn secondary" onClick={()=>navigator.clipboard.writeText(key)}>Copy</button>
          </div>
        )}
        <p style={{color:"var(--muted)",marginTop:10,fontSize:14}}>Use this key with the unified <span className="kbd">POST /api/route</span> endpoint. This demo routes to mock providers for a zero?config preview.</p>
      </div>
    </div>
  );
}
