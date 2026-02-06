export const GRAMMAR_ACTIONS = {
  REQUEST: "REQUEST",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  RESET: "RESET",
};

const initialState = {
  isLoading: false,
  incorrectText: null,
  correctedText: null,
  error: null,
};

export function grammarFixReducer(state, action) {
  switch (action.type) {
    case GRAMMAR_ACTIONS.REQUEST:
      return {
        ...state,
        isLoading: true,
        incorrectText: action.payload,
        correctedText: null,
        error: null,
      };
    case GRAMMAR_ACTIONS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        correctedText: action.payload,
        error: null,
      };
    case GRAMMAR_ACTIONS.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GRAMMAR_ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
}

export const initialGrammarState = initialState;
