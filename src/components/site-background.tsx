// Fixed decorative background shared by every page: two slow-drifting light
// fields and a perspective grid. CSS only, no JavaScript.
export function SiteBackground() {
  return (
    <div aria-hidden="true" className="site-bg" data-print-hide>
      <div className="site-bg-glow site-bg-glow-a" />
      <div className="site-bg-glow site-bg-glow-b" />
      <div className="site-bg-grid" />
    </div>
  );
}
