// Fixed decorative background shared by every page: slow-drifting teal and
// saffron light fields, film grain and a perspective grid. CSS only.
export function SiteBackground() {
  return (
    <div aria-hidden="true" className="site-bg" data-print-hide>
      <div className="site-bg-glow site-bg-glow-a" />
      <div className="site-bg-glow site-bg-glow-b" />
      <div className="site-bg-glow site-bg-glow-c" />
      <div className="site-bg-grain" />
      <div className="site-bg-grid" />
    </div>
  );
}
