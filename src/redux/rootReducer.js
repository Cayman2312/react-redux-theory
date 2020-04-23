const initialState = {
  counter: 0,
};

export default function rootReducer(state = initialState, { type, value = 1 }) {
  switch (type) {
    case 'ADD':
      return { counter: state.counter + value };
    case 'SUB':
      return { counter: state.counter - value };
    default:
      return state;
  }
}
