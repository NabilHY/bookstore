import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Wr1w5pRVh0VMaUEtfgxC/books/';
const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';
const DISPLAY_BOOKS = 'books/DISPLAY_BOOKS';

const initialeState = [];

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook,
});

export const removeBook = (removedBook) => ({
  type: REMOVE_BOOK,
  payload: removedBook,
});

export const displayBooks = (books) => ({
  type: DISPLAY_BOOKS,
  payload: books,
});

export const displayAllBooks = () => (dispatch) => {
  axios.get(URL)
    .then((res) => res.data)
    .then((data) => {
      const allBooks = Object.keys(data).map((key) => {
        const book = data[key][0];
        return {
          id: key,
          ...book,
        };
      });
      dispatch(displayBooks(allBooks));
    });
};

const bookReducer = (state = initialeState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case DISPLAY_BOOKS:
      return [...action.payload];
    default:
      return state;
  }
};

export default bookReducer;
