import { CodeBlock } from "@/components/CodeBlock";

const js = `// Node/Edge fetch
const res = await fetch("/api/route", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer pk_demo_public",
  },
  body: JSON.stringify({ prompt: "Summarize this week in AI", mode: "auto" })
});
const data = await res.json();
console.log(data.output);
`;

const curl = `curl -s https://agentic-e6e8b2a2.vercel.app/api/route \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer pk_demo_public' \
  -d '{"prompt":"Write a haiku about routing","mode":"auto"}'`;

export default function DocsPage(){
  return (
    <div className="grid" style={{gap:20}}>
      <h1>API Reference</h1>
      <p style={{color:"var(--muted)"}}>Use one endpoint for all text models. Image prompts return a placeholder in this demo.</p>

      <div className="card">
        <div className="section-title">POST /api/route</div>
        <pre>{`Body: { prompt: string; mode?: 'auto' | 'mock-fast' | 'mock-accurate' }`}</pre>
        <pre>{`Headers: { Authorization: 'Bearer <your_api_key>' }`}</pre>
      </div>

      <div>
        <div className="section-title">JavaScript</div>
        <CodeBlock code={js} language="javascript" />
      </div>

      <div>
        <div className="section-title">cURL</div>
        <CodeBlock code={curl} language="bash" />
      </div>

      <div className="card">
        <div className="section-title">Keys</div>
        <p>Call <span className="kbd">GET /api/keys</span> or visit the Dashboard to view your demo key.</p>
      </div>
    </div>
  );
}
