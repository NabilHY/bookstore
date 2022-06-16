import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const reducers = {
  books: bookReducer,
  categories: categoriesReducer,
};

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default store;
