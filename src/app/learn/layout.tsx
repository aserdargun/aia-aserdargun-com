import { learnDataset } from "@/data/learn";
import { ProgressProvider } from "@/components/learn/progress-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <ProgressProvider dataset={learnDataset}>{children}</ProgressProvider>
      </main>
      <SiteFooter />
    </>
  );
}
