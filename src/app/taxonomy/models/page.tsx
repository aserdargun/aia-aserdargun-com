import { TaxonomyPage } from "@/components/taxonomy/taxonomy-page";

export const metadata = {
  title: "AI model taxonomy | AI Ecosystem Atlas",
  description: "A source-linked mind map of AI model families, neural architectures, learning paradigms, generative formulations, modalities, training and tasks.",
  alternates: { canonical: "/taxonomy/models" },
};

export default function ModelTaxonomyPage() {
  return <TaxonomyPage id="models" />;
}
