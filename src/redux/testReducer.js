const initialState = {
  x: 20,
  y: 30,
};

// arguments are = prev_State & new_State
export default function testReducer(state = initialState, action) {
  if (action.type === "INCREASEX") {
    return { ...state, x: parseInt(action.payload) + state.x, y: 0 };
  }
  return state;
}
