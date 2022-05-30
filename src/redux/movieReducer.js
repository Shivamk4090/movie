import { data } from "../data";

const initialState = {
  list: data,
  favourite: [],
  favTab: false,
};

// arguments are = prev_State & new_State
export default function movieReducer(state = initialState, action) {
  if (action.type === "ADD_MOVIE") {
    return {
      ...state,
      list: action.payload,
    };
  }
  if (action.type === "FAV_MOVIE") {
    return {
      ...state,
      favourite:
        state.favourite.indexOf(action.payload) === -1
          ? [action.payload].concat(state.favourite)
          : state.favourite,
    };
  }
  if (action.type === "UNFAV_MOVIE") {
    return {
      ...state,
      favourite:
        state.favourite.indexOf(action.payload) !== -1
          ? state.favourite.filter((item) => item !== action.payload)
          : state.favourite,
    };
  }
  if (action.type === "SHOW_FAV_TAB") {
    return {
      ...state,
      favTab: action.payload,
    };
  }
  if (action.type === "ADD_MOVIE_LIST") {
    return {
      ...state,
      list:
        state.list.indexOf(action.payload) === -1
          ? [action.payload].concat(state.list)
          : state.list,
    };
  }
  return state;
}
