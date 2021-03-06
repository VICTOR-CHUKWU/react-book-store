import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducer';
import { fetchBooks } from './actions/BookAction';

const store = createStore(reducers,
  applyMiddleware(thunk, logger));
store.dispatch(fetchBooks());

export default store;
