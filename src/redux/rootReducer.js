const initialState = {
  counter: 0,
};

export default function rootReducer(
  state = initialState,
  { type, payload = 1 }
) {
  switch (type) {
    case 'ADD':
      return { counter: state.counter + 1 };
    case 'SUB':
      return { counter: state.counter - 1 };
    case 'ADD_NUMBER':
      return { counter: state.counter + payload };
    default:
      return state;
  }
}
