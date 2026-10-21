import { TaxonomyPage } from "@/components/taxonomy/taxonomy-page";

export const metadata = {
  title: "AI task taxonomy | AI Ecosystem Atlas",
  description: "A source-linked mind map of 85 AI tasks across eight families, with input-output definitions and explicitly marked system-level tasks.",
  alternates: { canonical: "/taxonomy/tasks" },
};

export default function TaskTaxonomyPage() {
  return <TaxonomyPage id="tasks" />;
}
