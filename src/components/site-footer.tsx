import { learningPath } from "@/data/learning-path";
import { learningPathLabels } from "@/lib/labels";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav className="learning-path" aria-label="Continue learning / Öğrenmeye devam et">
        <h2>{learningPathLabels.en.title} <span lang="tr">/ {learningPathLabels.tr.title}</span></h2>
        <p>{learningPathLabels.en.description}</p>
        <p lang="tr">{learningPathLabels.tr.description}</p>
        <ul>
          {learningPath.map((app) => (
            <li key={app.code}><a href={app.url}><strong>{app.code}</strong> {app.en}<small lang="tr">{app.tr}</small></a></li>
          ))}
        </ul>
        <a href="https://aserdargun.com/">aserdargun.com · {learningPathLabels.en.home}</a>
        {" · "}<a href="https://aserdargun.com/tr/" lang="tr">{learningPathLabels.tr.home}</a>
      </nav>
      <div className="site-footer__inner">
        <p>
          Evidence dates belong to individual records. Unknown and not-documented
          states do not establish that a capability is unavailable. Learning
          explanations are editorial material; follow their linked primary sources.
        </p>
        <a
          href="https://github.com/aserdargun/aia-aserdargun-com#updating-the-atlas"
          target="_blank"
          rel="noreferrer"
        >
          Review the public update workflow
        </a>
      </div>
    </footer>
  );
}
