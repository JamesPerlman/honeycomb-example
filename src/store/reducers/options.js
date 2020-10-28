const INITIAL_STATE = [];

export default function reduceOptions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_OPTIONS':
      return action.payload;
    default:
      return state;
  }
}