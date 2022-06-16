import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

const initialeState = [
  {
    title: 'Awaken the giant within',
    author: 'Anthony robbins',
    id: uuidv4(),
  },
  {
    title: 'The power of now',
    author: 'Echart Tolle',
    id: uuidv4(),
  },
  {
    title: 'Fault in our stars',
    author: 'John Green',
    id: uuidv4(),
  },
];

export function addBook(newBook) {
  return {
    type: ADD_BOOK,
    payload: newBook,
  };
}

export function removeBook(removedBook) {
  return {
    type: REMOVE_BOOK,
    payload: removedBook,
  };
}

const bookReducer = (state = initialeState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
