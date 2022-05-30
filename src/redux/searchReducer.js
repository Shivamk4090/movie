const initialState = {
  result: {},
  showResults: false,
};

// arguments are = prev_State & new_State
export default function searchReducer(state = initialState, action) {
  if (action.type === "SEARCH_MOVIE") {
    return { ...state, result: action.payload, showResults: true };
  }
  if (action.type === "HIDE_SEARCH") {
    return { ...state, showResults: false };
  }
  if (action.type === "UNHIDE_SEARCH") {
    return { ...state, showResults: true };
  }

  return state;
}
