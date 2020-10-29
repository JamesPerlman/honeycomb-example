export const createThunkMiddleware = () => ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== 'function') {
    return next(action);
  }
  try {
    while (typeof action === 'function') {
      action = action(dispatch, getState);
    }
    if (!action) {
      return;
    }
  } catch (err) {
    // TODO: error reporting here
    throw err;
  }
};
