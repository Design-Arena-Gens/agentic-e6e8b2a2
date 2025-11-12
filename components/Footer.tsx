export function Footer() {
  return (
    <footer>
      <div className="container" style={{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",padding:"20px 24px"}}>
        <div>? {new Date().getFullYear()} Pai Keys. All rights reserved.</div>
        <div style={{color:"var(--muted)"}}>Unified AI API ? Open routing ? No lock-in</div>
      </div>
    </footer>
  );
}
