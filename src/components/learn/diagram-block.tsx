import type { Diagram } from "@/data/learn/schema";

/**
 * Renders an inline SVG diagram. The validation step already guarantees
 * the SVG contains no <script> tags or on*= event handlers, so this
 * component can render the markup with `dangerouslySetInnerHTML` safely.
 */
export function DiagramBlock({ diagram }: { diagram: Diagram }) {
  return (
    <figure className="learn-diagram">
      <div
        className="learn-diagram__svg"
        role="img"
        aria-label={diagram.title}
        dangerouslySetInnerHTML={{ __html: diagram.svg }}
      />
      <figcaption className="learn-diagram__caption">
        <strong>{diagram.title}.</strong> {diagram.caption}
      </figcaption>
    </figure>
  );
}
