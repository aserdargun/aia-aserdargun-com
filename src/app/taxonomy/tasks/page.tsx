import { TaxonomyPage } from "@/components/taxonomy/taxonomy-page";

export const metadata = {
  title: "AI task taxonomy | AI Ecosystem Atlas",
  description: "Explore 87 AI tasks, task-specific open-weight candidates and separately labeled hosted references, with primary evidence, checkpoint downloads, license details and explicit coverage gaps.",
  alternates: { canonical: "/taxonomy/tasks" },
};

export default function TaskTaxonomyPage() {
  return <TaxonomyPage id="tasks" />;
}
