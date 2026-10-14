// First-visit intro: a pill counts to 100% over a ticker of role words, then
// slides away. Pure CSS, so it can never get stuck; skipped for the rest of the
// session and for people who prefer reduced motion.
const words = ["Full-stack developer", "Product builder", "Operations lead", "Android apps", "Hyderabad"];

export const introSkipScript = `(function(){try{if(sessionStorage.getItem("intro")){document.documentElement.classList.add("intro-seen")}else{sessionStorage.setItem("intro","1")}}catch(e){document.documentElement.classList.add("intro-seen")}})()`;

export function IntroLoader() {
  return (
    <div className="intro" aria-hidden="true" data-print-hide>
      <div className="intro-ticker">
        {[0, 1].map((n) => (
          <span key={n} className="intro-ticker-run">
            {words.map((w) => (
              <span key={w} className="intro-word">
                {w}
                <span className="intro-dot" />
              </span>
            ))}
          </span>
        ))}
      </div>
      <div className="intro-pill">
        <span>Loading</span>
        <span className="intro-count" />
      </div>
    </div>
  );
}
