import type { OpenWeightModel, TaskModelSource } from "@/data/schema";
import { taskModelLabels, type ModelLocale } from "@/lib/labels";

export function ModelArtifactDetails({ model, weights, sources, locale }: {
  model: OpenWeightModel; weights: TaskModelSource; sources: TaskModelSource[]; locale: ModelLocale;
}) {
  const labels = taskModelLabels[locale];
  const artifact = weights.artifact;
  const releaseEvidence = artifact && artifact.type !== "git"
    ? sources.find((source) => source.id === artifact.evidenceSourceId) : null;
  return <>
    {model.parameterKind && model.parameterKind !== "weights" ? <p className="task-model-note" data-parameter-kind={model.parameterKind}>{labels.parameterKinds[model.parameterKind]}</p> : null}
    {model.licenseScope === "repository" ? <p className="task-model-note">{labels.repositoryLicense}</p> : null}
    <details className="task-model-evidence model-artifact-details">
      <summary>{labels.artifactIdentity}</summary>
      {weights.revision ? <p>{labels.pinnedRevision}: <code>{weights.revision}</code></p> : <p>{labels.publisherArtifact}</p>}
      {artifact?.type === "git" ? <p><code>{artifact.path}</code></p> : null}
      {artifact?.type === "publisher-file" || artifact?.type === "google-drive" ? <dl>
        <div><dt>{labels.file}</dt><dd><code>{artifact.fileName}</code></dd></div>
        <div><dt>{labels.bytes}</dt><dd>{artifact.sizeBytes.toLocaleString(locale)}</dd></div>
        {artifact.type === "google-drive" ? <div><dt>{labels.fileId}</dt><dd><code>{artifact.fileId}</code></dd></div> : <>
          {artifact.etag ? <div><dt>ETag</dt><dd><code>{artifact.etag}</code></dd></div> : null}
          {artifact.publisherChecksum ? <div><dt>{labels.publisherChecksum} ({artifact.publisherChecksum.algorithm})</dt><dd><code>{artifact.publisherChecksum.value}</code></dd></div> : null}
        </>}
      </dl> : null}
      {artifact?.type === "publisher-file" && artifact.publisherChecksum ? <p>{labels.checksumNotVerified}</p> : null}
      {artifact?.type === "release" ? <ul>{artifact.files.map((file) => <li key={file.name}><code>{file.name}</code> · {file.sizeBytes.toLocaleString(locale)} {labels.bytes}</li>)}</ul> : null}
      {releaseEvidence ? <a href={releaseEvidence.url} target="_blank" rel="noreferrer">{labels.releaseEvidence} ↗</a> : null}
    </details>
  </>;
}
