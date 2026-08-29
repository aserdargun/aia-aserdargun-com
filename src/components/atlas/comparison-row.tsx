import type { ComparisonRow as ComparisonRowModel } from "@/lib/comparison";
import { EvidencePanel } from "@/components/atlas/evidence-panel";
import { StatusBadge } from "@/components/atlas/status-badge";

function EntryCell({
  entry,
  vendorId,
  vendorName,
}: {
  entry: ComparisonRowModel["leftEntry"];
  vendorId: string;
  vendorName: string;
}) {
  return (
    <td className={`vendor-cell vendor-cell--${vendorId}`}>
      <span className="comparison-cell-label" aria-hidden="true">
        {vendorName}
      </span>
      <StatusBadge kind="availability" value={entry.availability} />
      <strong>{entry.title}</strong>
      <p>{entry.summary}</p>
    </td>
  );
}

export function ComparisonRow({
  row,
  leftVendorName,
  rightVendorName,
  expanded,
  onToggle,
}: {
  row: ComparisonRowModel;
  leftVendorName: string;
  rightVendorName: string;
  expanded: boolean;
  onToggle: (rowId: string) => void;
}) {
  const evidenceId = `evidence-${row.capability.id}`;
  const verifiedDates = [row.leftEntry.verifiedAt, row.rightEntry.verifiedAt].filter(
    (value): value is string => value !== null,
  );
  const mostRecentVerification = verifiedDates.reduce(
    (latest, value) => (value > latest ? value : latest),
    "",
  );

  return (
    <>
      <tr className="comparison-row">
        <th className="capability-cell" scope="row">
          <span>{row.category.shortName}</span>
          <strong>{row.capability.name}</strong>
          <p>{row.capability.description}</p>
        </th>
        <EntryCell
          entry={row.leftEntry}
          vendorId={row.leftVendorId}
          vendorName={leftVendorName}
        />
        <EntryCell
          entry={row.rightEntry}
          vendorId={row.rightVendorId}
          vendorName={rightVendorName}
        />
        <td className="assessment-cell">
          <span className="comparison-cell-label" aria-hidden="true">
            Assessment
          </span>
          <StatusBadge kind="assessment" value={row.assessment.status} />
          <p>{row.assessment.summary}</p>
        </td>
        <td className="verification-cell">
          <span className="comparison-cell-label" aria-hidden="true">
            Evidence
          </span>
          {mostRecentVerification ? (
            <span>
              Checked through{" "}
              <time dateTime={mostRecentVerification}>{mostRecentVerification}</time>
            </span>
          ) : (
            <span>No verified source</span>
          )}
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={evidenceId}
            onClick={() => onToggle(row.capability.id)}
          >
            {expanded ? "Hide" : "Show"} evidence for {row.capability.name}
          </button>
        </td>
      </tr>
      {expanded ? (
        <tr className="evidence-row" id={evidenceId}>
          <td colSpan={5}>
            <EvidencePanel row={row} />
          </td>
        </tr>
      ) : null}
    </>
  );
}
