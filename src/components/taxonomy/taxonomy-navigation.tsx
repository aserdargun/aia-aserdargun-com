"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { taxonomyLabels, type ModelLocale } from "@/lib/labels";

export function TaxonomyNavigation({ locale = "en", pathname = "" }: { locale?: ModelLocale; pathname?: string }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const labels = taxonomyLabels[locale];
  const href = (path: string) => `${path}${locale === "tr" ? "?lang=tr" : ""}`;
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (menu.current && !menu.current.contains(event.target as Node)) menu.current.open = false;
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);
  function close() { if (menu.current) menu.current.open = false; }
  return (
    <details ref={menu} className="site-nav__maps" data-active={pathname.startsWith("/taxonomy/") || undefined} onBlur={(event) => {
      // Safari taps blur the summary without focusing the link. Keep it open
      // until its click fires; outside pointers and Escape still close the menu.
      if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) close();
    }} onKeyDown={(event) => {
      if (event.key === "Escape") { close(); menu.current?.querySelector("summary")?.focus(); }
    }}>
      <summary>{labels.navigation}</summary>
      <div className="site-nav__maps-menu">
        <Link href={href("/taxonomy/models")} aria-current={pathname === "/taxonomy/models" ? "page" : undefined} onClick={close}>{labels.modelNav}</Link>
        <Link href={href("/taxonomy/tasks")} aria-current={pathname === "/taxonomy/tasks" ? "page" : undefined} onClick={close}>{labels.taskNav}</Link>
      </div>
    </details>
  );
}
