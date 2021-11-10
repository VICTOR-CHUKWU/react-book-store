import { combineReducers } from 'redux';
import { BooksReducer } from './BookReducer';

const reducers = combineReducers({
  BooksReducer,
});

export default reducers;
