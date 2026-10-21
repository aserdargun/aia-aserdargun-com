import { TaxonomyPage } from "@/components/taxonomy/taxonomy-page";

export const metadata = {
  title: "AI model taxonomy | AI Ecosystem Atlas",
  description: "Explore AI model families through open-weight examples, documented architecture and training, supported tasks, primary sources, checkpoint files and licenses.",
  alternates: { canonical: "/taxonomy/models" },
};

export default function ModelTaxonomyPage() {
  return <TaxonomyPage id="models" />;
}
