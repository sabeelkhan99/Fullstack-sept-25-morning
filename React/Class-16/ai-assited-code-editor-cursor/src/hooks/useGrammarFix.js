import { useCallback } from "react";
import { useReducer } from "react";
import {
  grammarFixReducer,
  initialGrammarState,
  GRAMMAR_ACTIONS,
} from "../reducers/grammarFixReducer";
import { fixGrammarWithAI } from "../services/grammarApi";

export function useGrammarFix() {
  const [state, dispatch] = useReducer(grammarFixReducer, initialGrammarState);

  const fixGrammar = useCallback(async (selectedText) => {
    const trimmed = selectedText?.trim();
    if (!trimmed?.length) return;

    dispatch({ type: GRAMMAR_ACTIONS.REQUEST, payload: trimmed });

    try {
      const corrected = await fixGrammarWithAI(trimmed);
      dispatch({ type: GRAMMAR_ACTIONS.SUCCESS, payload: corrected });
    } catch (err) {
      console.error(err);
      dispatch({ type: GRAMMAR_ACTIONS.ERROR, payload: err?.message ?? "Request failed" });
    }
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: GRAMMAR_ACTIONS.RESET });
  }, []);

  return [state, { fixGrammar, reset }];
}
