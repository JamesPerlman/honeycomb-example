export const createThunkMiddleware = () => ({ dispatch, getState }) => (next) => (action) => {
  try {
    while (typeof action === 'function') {
      action = action(dispatch, getState);
    }
    if (!action) {
      return;
    }
    return next(action);
  } catch (err) {
    // TODO: error reporting here
    throw err;
  }
};
