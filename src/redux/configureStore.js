import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const reducers = {
  books: bookReducer,
  categories: categoriesReducer,
};

const store = createStore(combineReducers(reducers));

export default store;
