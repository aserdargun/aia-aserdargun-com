"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { taxonomyLabels } from "@/lib/labels";

export function TaxonomyNavigation() {
  const menu = useRef<HTMLDetailsElement>(null);
  const labels = taxonomyLabels.en;
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (menu.current && !menu.current.contains(event.target as Node)) menu.current.open = false;
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);
  function close() { if (menu.current) menu.current.open = false; }
  return (
    <details ref={menu} className="site-nav__maps" onKeyDown={(event) => {
      if (event.key === "Escape") { close(); menu.current?.querySelector("summary")?.focus(); }
    }}>
      <summary>{labels.navigation}</summary>
      <div className="site-nav__maps-menu">
        <Link href="/taxonomy/models" onClick={close}>{labels.modelNav}</Link>
        <Link href="/taxonomy/tasks" onClick={close}>{labels.taskNav}</Link>
      </div>
    </details>
  );
}
