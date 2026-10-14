// Endless band of large outlined words. Decorative; the same words are said in
// plain text elsewhere on the page.
export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee-clip" aria-hidden="true">
      <div className="marquee">
        {[0, 1].map((n) => (
          <div key={n} className="marquee-run">
            {items.map((item) => (
              <span key={item} className="marquee-item">
                {item}
                <span className="marquee-star">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
