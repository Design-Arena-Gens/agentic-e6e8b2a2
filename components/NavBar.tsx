"use client";
import Link from "next/link";

export function NavBar() {
  return (
    <nav>
      <div className="inner">
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <Link href="/" style={{display:"flex",alignItems:"center",gap:10}}>
            <span className="badge">?? Pai Keys</span>
          </Link>
          <div className="links">
            <Link href="/playground">Playground</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </div>
        <div className="links">
          <Link href="/dashboard" className="btn">Get API Key</Link>
        </div>
      </div>
    </nav>
  );
}
