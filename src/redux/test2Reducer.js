const initialState = {
  a: 10,
  b: 100,
};

// arguments are = prev_State & new_State
export default function testReducer2(state = initialState, action) {
  if (action.type === "INCREASEA") {
    return { ...state, a: 0, b: 0 };
  }
  return state;
}
