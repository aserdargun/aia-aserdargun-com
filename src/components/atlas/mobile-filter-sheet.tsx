import type { ReactNode } from "react";

export function MobileFilterSheet({ children }: { children: ReactNode }) {
  return (
    <details className="mobile-filter-sheet">
      <summary>More filters</summary>
      <div
        className="mobile-filter-sheet__panel"
        aria-label="Availability, comparison, and freshness filters"
      >
        {children}
      </div>
    </details>
  );
}
