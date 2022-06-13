import { createStore, combineReducers } from 'redux';
import categoriesReducer from './redux/categories/categories';
import bookReducer from './redux/books/books';

const reducers = {
  books: bookReducer,
  categories: categoriesReducer,
};

const store = createStore(combineReducers(reducers));

export default store;
