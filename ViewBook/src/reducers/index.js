import { combineReducers } from 'redux';
/* Local */
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
