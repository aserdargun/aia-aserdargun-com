import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header" id="top">
      <div className="site-header__inner">
        <Link className="site-brand" href="/" aria-label="AI Ecosystem Atlas home">
          <span className="site-brand__mark" aria-hidden="true">
            +
          </span>
          <span className="site-brand__copy">
            <strong>AI Ecosystem Atlas</strong>
            <small>Research Console</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link className="site-nav__atlas" href="/">
            Atlas
          </Link>
          <Link href="/learn">Learn</Link>
          <a
            className="site-nav__github"
            href="https://github.com/aserdargun/aia-aserdargun-com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="github-link__prefix">View on </span>GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
