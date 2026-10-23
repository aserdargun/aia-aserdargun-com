"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { TaxonomyNavigation } from "@/components/taxonomy/taxonomy-navigation";
import { siteLabels, type ModelLocale } from "@/lib/labels";

function HeaderContent({ pathname, locale }: { pathname: string; locale: ModelLocale }) {
  const labels = siteLabels[locale];
  const href = (path: string) => `${path}${locale === "tr" ? "?lang=tr" : ""}`;
  const current = (path: string) => (path === "/" ? pathname === path : pathname.startsWith(path)) ? "page" as const : undefined;
  return (
    <header className="site-header" id="top" lang={locale}>
      <a className="skip-link" href="#main-content">{labels.skip}</a>
      <div className="site-header__inner">
        <Link className="site-brand" href={href("/")} aria-label={labels.home}>
          <span className="site-brand__mark" aria-hidden="true">
            +
          </span>
          <span className="site-brand__copy">
            <strong>
              <span className="site-brand__full">AI Ecosystem Atlas</span>
              <span className="site-brand__compact" aria-hidden="true">AIA</span>
            </strong>
            <small>{labels.console}</small>
          </span>
        </Link>
        <nav aria-label={labels.navigation}>
          <Link className="site-nav__atlas" href={href("/")} aria-current={current("/")}>
            Atlas
          </Link>
          <Link href={href("/models")} aria-label={labels.frontier} aria-current={current("/models")}>
            <span className="site-nav__full">{labels.frontier}</span>
            <span className="site-nav__compact" aria-hidden="true">{labels.frontierShort}</span>
          </Link>
          <Link href={href("/open-weights")} aria-label={labels.weights} aria-current={current("/open-weights")}>
            <span className="site-nav__full">{labels.weights}</span>
            <span className="site-nav__compact" aria-hidden="true">{labels.weightsShort}</span>
          </Link>
          <TaxonomyNavigation locale={locale} pathname={pathname} />
          <Link href={href("/learn")} aria-current={current("/learn")}>{labels.learn}</Link>
          <a
            className="site-nav__github"
            href="https://github.com/aserdargun/aia-aserdargun-com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="github-link__prefix">{labels.github} </span>GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

function LocalizedHeader() {
  const pathname = usePathname();
  const params = useSearchParams();
  const locale = params.get("lang") === "tr" ? "tr" : "en";
  // Atlas and Learn currently publish English content; translated catalogues
  // declare their actual document language for assistive technology.
  const contentLocale = pathname === "/models" || pathname === "/open-weights" || pathname.startsWith("/taxonomy/") ? locale : "en";
  useEffect(() => { document.documentElement.lang = contentLocale; }, [contentLocale]);
  return <HeaderContent pathname={pathname} locale={locale} />;
}

export function SiteHeader() {
  return <Suspense fallback={<HeaderContent pathname="" locale="en" />}><LocalizedHeader /></Suspense>;
}
