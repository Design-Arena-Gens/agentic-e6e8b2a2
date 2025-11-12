import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";

const example = `curl -s https://agentic-e6e8b2a2.vercel.app/api/route \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer pk_demo_public' \
  -d '{
    "prompt": "Explain transformers in one paragraph",
    "mode": "auto"
  }'`;

export default function Page() {
  return (
    <div className="grid" style={{gap:28}}>
      <section className="hero card">
        <div>
          <span className="badge">Unified AI API</span>
          <h1>
            Pai Keys ? one key for every model
          </h1>
          <p>
            Access GPT, Claude, Gemini, Mistral, Whisper, Stable Diffusion and open-source models through a single drop-in API. Smart model routing for the best mix of accuracy, speed, and cost. No lock?in. No limits.
          </p>
          <div style={{display:"flex",gap:12,marginTop:12}}>
            <Link href="/playground" className="btn">Open Playground</Link>
            <Link href="/docs" className="btn secondary">Read the Docs</Link>
          </div>
          <div style={{marginTop:16}}>
            <CodeBlock code={example} language="bash" />
          </div>
          <div style={{marginTop:12,color:"var(--muted)",fontSize:12}}>Use demo key <span className="kbd">pk_demo_public</span>
          </div>
        </div>
        <div>
          <div className="card" style={{height:280,display:"grid",placeItems:"center",textAlign:"center"}}>
            <div>
              <div style={{fontSize:48}}>??</div>
              <div style={{color:"var(--muted)"}}>Intelligent model routing</div>
            </div>
          </div>
          <div className="grid" style={{gridTemplateColumns:"1fr 1fr",marginTop:16}}>
            <div className="card">
              <div className="section-title">Speed</div>
              <p style={{color:"var(--muted)"}}>Route to fast free models for short prompts and tool calls.</p>
            </div>
            <div className="card">
              <div className="section-title">Accuracy</div>
              <p style={{color:"var(--muted)"}}>Use more capable models for long or complex tasks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid" style={{gridTemplateColumns:"1fr 1fr 1fr"}}>
        <div className="card">
          <div className="section-title">One key</div>
          <p style={{color:"var(--muted)"}}>Stop juggling API vendors. Ship faster with one integration.</p>
        </div>
        <div className="card">
          <div className="section-title">Open models first</div>
          <p style={{color:"var(--muted)"}}>Prioritize open-source and free options, upgrade only when needed.</p>
        </div>
        <div className="card">
          <div className="section-title">No lock?in</div>
          <p style={{color:"var(--muted)"}}>Keep your prompts, data, and freedom. Export anytime.</p>
        </div>
      </section>
    </div>
  );
}
