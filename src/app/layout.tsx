import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aia.aserdargun.com"),
  title: "AIA - AI Ecosystem Atlas",
  description:
    "Evidence-backed comparisons across models, products, agents, APIs, and plans.",
  openGraph: {
    type: "website",
    siteName: "AI Ecosystem Atlas",
    title: "AI Ecosystem Atlas",
    description:
      "An evidence-backed research console for comparing AI products and developer ecosystems.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "AI Ecosystem Atlas",
    description:
      "An evidence-backed research console for comparing AI products and developer ecosystems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <noscript>
          <div
            style={{
              maxWidth: "52rem",
              margin: "3rem auto",
              padding: "0 1rem",
              fontFamily: "sans-serif",
              lineHeight: 1.6,
            }}
          >
            <h1>AI Ecosystem Atlas</h1>
            <p>
              An evidence-backed research console for comparing AI products and
              developer ecosystems. The interactive comparison tables and
              filters need JavaScript; the summary below does not.
            </p>
            <p>
              What this atlas covers:
            </p>
            <ul>
              <li>Vendor and product capability comparisons with evidence dates.</li>
              <li>Official source links for every recorded claim.</li>
              <li>An AI/ML concept learner with diagrams, quizzes, and local review scheduling.</li>
            </ul>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
