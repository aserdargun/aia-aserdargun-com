import { StrictMode } from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { learnDataset } from "@/data/learn";
import { ProgressProvider, useProgress } from "@/components/learn/progress-provider";
import { QuizRunner } from "@/components/learn/quiz-runner";
import { StatsPanel } from "@/components/learn/stats-panel";
import { PROGRESS_STORAGE_KEY, createEmptyProgress } from "@/lib/learn/progress";

function Counter() {
  const { summary } = useProgress();
  return <output aria-label="Quiz attempts">{summary.totalQuizAnswered}</output>;
}

beforeEach(() => window.localStorage.clear());
afterEach(() => vi.restoreAllMocks());

function mount() {
  return render(<StrictMode><ProgressProvider dataset={learnDataset}>
    <QuizRunner conceptId="llm" items={[{
      id: "question", correctCount: 1, prompt: "Choose the correct option", options: [
        { id: "yes", text: "Correct option", correct: true, explanation: "Correct explanation" },
        { id: "no", text: "Wrong option", correct: false, explanation: "Wrong explanation" },
      ],
    }]} />
    <Counter /><StatsPanel />
  </ProgressProvider></StrictMode>);
}

it("records exactly one attempt per check in Strict Mode and persists it", async () => {
  const user = userEvent.setup();
  mount();
  await user.click(screen.getByRole("checkbox", { name: "Correct option" }));
  await user.click(screen.getByRole("button", { name: "Check answer" }));
  expect(screen.getByLabelText("Quiz attempts")).toHaveTextContent("1");
  expect(JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY)!).llm.quizTotal).toBe(1);
  await user.click(screen.getByRole("button", { name: "Try again" }));
  await user.click(screen.getByRole("checkbox", { name: "Wrong option" }));
  await user.click(screen.getByRole("button", { name: "Check answer" }));
  expect(screen.getByLabelText("Quiz attempts")).toHaveTextContent("2");
  await user.click(screen.getByRole("button", { name: "Reset all progress" }));
  await user.click(screen.getByRole("button", { name: "Keep my progress" }));
  expect(screen.getByLabelText("Quiz attempts")).toHaveTextContent("2");
  await user.click(screen.getByRole("button", { name: "Reset all progress" }));
  await user.click(screen.getByRole("button", { name: "Confirm reset" }));
  expect(screen.getByLabelText("Quiz attempts")).toHaveTextContent("0");
});

it("repairs corrupt records and does not write incoming storage events back", async () => {
  localStorage.setItem(PROGRESS_STORAGE_KEY, '{"llm":{"card":null}}');
  const write = vi.spyOn(Storage.prototype, "setItem");
  mount();
  expect(screen.getByLabelText("Quiz attempts")).toHaveTextContent("0");
  expect(write).not.toHaveBeenCalled();
  const incoming = createEmptyProgress(learnDataset.concepts.map((c) => c.id), new Date());
  incoming.llm.quizTotal = 3;
  localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(incoming));
  write.mockClear();
  act(() => window.dispatchEvent(new StorageEvent("storage", { key: PROGRESS_STORAGE_KEY })));
  await waitFor(() => expect(screen.getByLabelText("Quiz attempts")).toHaveTextContent("3"));
  expect(write).not.toHaveBeenCalled();
});

it("keeps session progress and reports a storage failure", async () => {
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("Quota exceeded"); });
  const user = userEvent.setup();
  mount();
  await user.click(screen.getByRole("checkbox", { name: "Correct option" }));
  await user.click(screen.getByRole("button", { name: "Check answer" }));
  expect(screen.getByLabelText("Quiz attempts")).toHaveTextContent("1");
  expect(screen.getByText(/Your browser could not save progress/)).toBeVisible();
});
