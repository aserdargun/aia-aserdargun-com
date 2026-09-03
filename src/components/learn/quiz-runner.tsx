"use client";

import { useState } from "react";
import type { QuizItem } from "@/data/learn/schema";
import { useProgress } from "@/components/learn/progress-provider";

interface QuizRunnerProps {
  conceptId: string;
  items: QuizItem[];
}

type AnswerState = {
  selected: Set<string>;
  checked: boolean;
};

function pickAllCorrect(item: QuizItem): Set<string> {
  return new Set(
    item.options.filter((o) => o.correct).map((o) => o.id),
  );
}

export function QuizRunner({ conceptId, items }: QuizRunnerProps) {
  const { answer } = useProgress();
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});

  function toggle(item: QuizItem, optionId: string) {
    setAnswers((current) => {
      const existing = current[item.id] ?? { selected: new Set<string>(), checked: false };
      const next = new Set(existing.selected);
      if (next.has(optionId)) {
        next.delete(optionId);
      } else {
        next.add(optionId);
      }
      return { ...current, [item.id]: { ...existing, selected: next } };
    });
  }

  function check(item: QuizItem) {
    setAnswers((current) => {
      const existing = current[item.id] ?? { selected: new Set<string>(), checked: false };
      const correctIds = pickAllCorrect(item);
      const correct =
        existing.selected.size === correctIds.size &&
        [...existing.selected].every((id) => correctIds.has(id));
      answer(conceptId, correct);
      return {
        ...current,
        [item.id]: { ...existing, checked: true },
      };
    });
  }

  function reset(item: QuizItem) {
    setAnswers((current) => ({
      ...current,
      [item.id]: { selected: new Set<string>(), checked: false },
    }));
  }

  return (
    <div className="learn-quiz">
      <h3 className="learn-quiz__heading">Self-check</h3>
      <ol className="learn-quiz__list">
        {items.map((item) => {
          const state = answers[item.id] ?? { selected: new Set<string>(), checked: false };
          const correctIds = pickAllCorrect(item);
          return (
            <li key={item.id} className="learn-quiz__item">
              <p className="learn-quiz__prompt">{item.prompt}</p>
              <ul className="learn-quiz__options" role="group" aria-label={item.prompt}>
                {item.options.map((option) => {
                  const isSelected = state.selected.has(option.id);
                  const isCorrect = correctIds.has(option.id);
                  let modifier = "";
                  if (state.checked) {
                    if (isSelected && isCorrect) modifier = " learn-quiz__option--correct";
                    else if (isSelected && !isCorrect) modifier = " learn-quiz__option--wrong";
                    else if (!isSelected && isCorrect) modifier = " learn-quiz__option--missed";
                  } else if (isSelected) {
                    modifier = " learn-quiz__option--selected";
                  }
                  return (
                    <li key={option.id}>
                      <label className={`learn-quiz__option${modifier}`}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          disabled={state.checked}
                          onChange={() => toggle(item, option.id)}
                        />
                        <span>{option.text}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
              {state.checked && (
                <div className="learn-quiz__feedback">
                  <p className="learn-quiz__explanations">
                    {item.options
                      .filter((o) => (state.selected.has(o.id) || correctIds.has(o.id)))
                      .map((o) => (
                        <span key={o.id} className={correctIds.has(o.id) ? "learn-quiz__feedback--good" : "learn-quiz__feedback--bad"}>
                          <strong>{o.correct ? "Correct." : "Not quite."}</strong> {o.explanation}
                        </span>
                      ))}
                  </p>
                  <button
                    type="button"
                    className="learn-quiz__retry"
                    onClick={() => reset(item)}
                  >
                    Try again
                  </button>
                </div>
              )}
              {!state.checked && (
                <button
                  type="button"
                  className="learn-quiz__check"
                  onClick={() => check(item)}
                  disabled={state.selected.size === 0}
                >
                  Check answer
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
