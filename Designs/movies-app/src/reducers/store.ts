import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxPromise from 'redux-promise';

import Movies from './movies';

const reducers = combineReducers({
  moviesReduce: Movies
});

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;