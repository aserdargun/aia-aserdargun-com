import {
  learnDatasetSchema,
  requiredConceptCategoryIds,
  type Concept,
  type ConceptCategory,
  type LearnDataset,
  type QuizItem,
  type Reference,
} from "@/data/learn/schema";

type IdentifiedRecord = { id: string };

function assertUniqueIds(
  records: IdentifiedRecord[],
  recordType: string,
): Set<string> {
  const ids = new Set<string>();
  for (const record of records) {
    if (ids.has(record.id)) {
      throw new Error(`${recordType} "${record.id}" has duplicate ID.`);
    }
    ids.add(record.id);
  }
  return ids;
}

function assertRequiredCategoryTaxonomy(categories: ConceptCategory[]): void {
  if (categories.length !== requiredConceptCategoryIds.length) {
    throw new Error(
      `Learn category taxonomy has ${categories.length} records; expected ${requiredConceptCategoryIds.length}.`,
    );
  }
  for (const [index, expectedId] of requiredConceptCategoryIds.entries()) {
    const category = categories[index];
    const expectedOrder = index + 1;
    if (category.id !== expectedId || category.order !== expectedOrder) {
      throw new Error(
        `Learn category "${category.id}" has order ${category.order}; expected "${expectedId}" at order ${expectedOrder}.`,
      );
    }
  }
}

function assertUniqueCategoryOrders(
  concepts: Concept[],
): void {
  const ordersByCategory = new Map<string, Set<number>>();
  for (const concept of concepts) {
    const orders =
      ordersByCategory.get(concept.categoryId) ?? new Set<number>();
    if (orders.has(concept.order)) {
      throw new Error(
        `Concept "${concept.id}" has duplicate order ${concept.order} in category "${concept.categoryId}".`,
      );
    }
    orders.add(concept.order);
    ordersByCategory.set(concept.categoryId, orders);
  }
}

function assertDiagramIdsUnique(concepts: Concept[]): void {
  const seen = new Set<string>();
  for (const concept of concepts) {
    for (const diagram of concept.diagrams) {
      if (seen.has(diagram.id)) {
        throw new Error(
          `Concept "${concept.id}" declares duplicate diagram ID "${diagram.id}".`,
        );
      }
      seen.add(diagram.id);
    }
  }
}

function assertQuizStructure(quiz: QuizItem[], conceptId: string): void {
  if (quiz.length === 0) {
    throw new Error(`Concept "${conceptId}" must declare at least one quiz item.`);
  }
  for (const item of quiz) {
    const optionIds = new Set<string>();
    let correctCount = 0;
    for (const option of item.options) {
      if (optionIds.has(option.id)) {
        throw new Error(
          `Concept "${conceptId}" quiz item "${item.id}" has duplicate option ID "${option.id}".`,
        );
      }
      optionIds.add(option.id);
      if (option.correct) correctCount += 1;
    }
    if (correctCount !== item.correctCount) {
      throw new Error(
        `Concept "${conceptId}" quiz item "${item.id}" declares correctCount ${item.correctCount} but ${correctCount} options are marked correct.`,
      );
    }
    if (correctCount === 0) {
      throw new Error(
        `Concept "${conceptId}" quiz item "${item.id}" has no correct option.`,
      );
    }
  }
}

function assertSvgIsSafe(concepts: Concept[]): void {
  for (const concept of concepts) {
    for (const diagram of concept.diagrams) {
      const svg = diagram.svg.trim();
      if (!svg.startsWith("<svg")) {
        throw new Error(
          `Concept "${concept.id}" diagram "${diagram.id}" must start with an <svg> element.`,
        );
      }
      if (/<\s*script|on\w+\s*=/i.test(svg)) {
        throw new Error(
          `Concept "${concept.id}" diagram "${diagram.id}" contains a script or event handler.`,
        );
      }
    }
  }
}

function assertRelationTargetsExist(
  concepts: Concept[],
  conceptIds: Set<string>,
): void {
  for (const concept of concepts) {
    for (const relation of concept.relations) {
      if (!conceptIds.has(relation.targetId)) {
        throw new Error(
          `Concept "${concept.id}" relation targets missing concept "${relation.targetId}".`,
        );
      }
    }
  }
}

function assertNoFutureReferences(
  references: Reference[],
  concepts: Concept[],
  today: Date,
): void {
  const todayIso = today.toISOString().slice(0, 10);
  for (const reference of references) {
    if (reference.id.length === 0) {
      throw new Error("Reference record has empty ID.");
    }
  }
  for (const concept of concepts) {
    if (concept.verifiedAt > todayIso) {
      throw new Error(
        `Concept "${concept.id}" has future verification date "${concept.verifiedAt}".`,
      );
    }
  }
}

export function parseLearnDataset(input: unknown, today: Date): LearnDataset {
  const dataset = learnDatasetSchema.parse(input);
  const categoryIds = assertUniqueIds(dataset.categories, "ConceptCategory");
  const conceptIds = assertUniqueIds(dataset.concepts, "Concept");
  const referenceIds = assertUniqueIds(dataset.references, "Reference");

  assertRequiredCategoryTaxonomy(dataset.categories);
  assertUniqueCategoryOrders(dataset.concepts);
  assertDiagramIdsUnique(dataset.concepts);
  assertSvgIsSafe(dataset.concepts);
  assertRelationTargetsExist(dataset.concepts, conceptIds);

  for (const concept of dataset.concepts) {
    if (!categoryIds.has(concept.categoryId)) {
      throw new Error(
        `Concept "${concept.id}" references missing category "${concept.categoryId}".`,
      );
    }
    for (const refId of concept.referenceIds) {
      if (!referenceIds.has(refId)) {
        throw new Error(
          `Concept "${concept.id}" references missing reference "${refId}".`,
        );
      }
    }
    assertQuizStructure(concept.quiz, concept.id);
  }

  assertNoFutureReferences(dataset.references, dataset.concepts, today);

  return dataset;
}
