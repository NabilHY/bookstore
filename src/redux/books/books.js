const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialeState = [];

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
