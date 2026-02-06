import React, { useRef, useCallback } from "react";
import { useGrammarFix } from "../hooks/useGrammarFix";
import { getSelectedText } from "../utils/selection";

const AIEditor = () => {
  const textAreaRef = useRef(null);
  const lastSelectedRef = useRef(null);
  const [state, { fixGrammar }] = useGrammarFix();
  const { isLoading, incorrectText, correctedText, error } = state;

  const handleSelect = useCallback(() => {
    const selected = getSelectedText(textAreaRef.current);
    if (selected) lastSelectedRef.current = selected;
  }, []);

  const handleFixGrammar = useCallback(() => {
    const selected =
      lastSelectedRef.current ?? getSelectedText(textAreaRef.current);
    fixGrammar(selected);
  }, [fixGrammar]);

  const handleApply = useCallback(() => {
    const el = textAreaRef.current;
    if (!el?.value || !incorrectText || !correctedText) return;
    el.value = el.value.replace(incorrectText, correctedText);
  }, [incorrectText, correctedText]);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl shadow-black/20 ring-1 ring-zinc-800/50 backdrop-blur-sm sm:p-8">
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
        Your text
      </label>
      <textarea
        ref={textAreaRef}
        onSelect={handleSelect}
        rows={10}
        cols={50}
        placeholder="Write your text here. Select a phrase and click Fix Grammar..."
        className="mb-5 w-full max-w-2xl resize-y rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3.5 text-zinc-100 placeholder-zinc-500 transition-colors focus:border-amber-500/60 focus:outline-none focus:ring-2 focus:ring-amber-500/25"
      />
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleFixGrammar}
          disabled={isLoading}
          className="rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          {isLoading ? (
            <span className="inline-flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-zinc-900" />
              Fixing grammar...
            </span>
          ) : (
            "Fix Grammar"
          )}
        </button>
        <button
          type="button"
          onClick={handleApply}
          disabled={!correctedText}
          className="rounded-xl border border-zinc-600 bg-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Apply correction
        </button>
      </div>
      {error && (
        <div
          className="mt-4 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400"
          role="alert"
        >
          {error}
        </div>
      )}
      {incorrectText && !isLoading && (
        <div className="mt-4 rounded-lg border border-zinc-700/80 bg-zinc-800/40 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Original
          </p>
          <p className="mt-1 text-sm text-zinc-300">{incorrectText}</p>
        </div>
      )}
      {correctedText && (
        <div className="mt-3 rounded-lg border border-amber-900/30 bg-amber-950/20 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wider text-amber-600/90">
            Corrected
          </p>
          <p className="mt-1 text-sm text-amber-100/90">{correctedText}</p>
        </div>
      )}
    </div>
  );
};

export default AIEditor;
