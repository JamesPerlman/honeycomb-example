const INITIAL_STATE = [];

export default function reduceItems(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    default:
      return state;
  }
}
