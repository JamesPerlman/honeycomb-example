import { applyMiddleware, createStore } from 'redux';

import { createThunkMiddleware } from './middleware';
import { rootReducer } from './reducers/index';

const middleware = applyMiddleware(createThunkMiddleware());

export const store = createStore(rootReducer, middleware);

export * from './selectors';
export * from './actions';
