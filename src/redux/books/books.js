import { v4 as uuidv4 } from 'uuid';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Wr1w5pRVh0VMaUEtfgxC/books';

export const displayBook = createAsyncThunk('books/displayBook', async () => {
  const response = await fetch(url);
  const books = await response.json();
  const arrayOfBooks = [Object.keys(books).map((key) => ({
    id: key,
    ...books[key][0],
  })),
  ];
  return arrayOfBooks;
});

export const addBook = createAsyncThunk('books/addBook', async ({ title, author, category }, thunkAPI) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: uuidv4(),
      title,
      author,
      category,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then(() => thunkAPI.dispatch(displayBook()));
  const { books } = thunkAPI.getState().books;
  return books;
});

const options = {
  name: 'books',
  initialState: [],
  reducers: {
  },
  extraReducers: {
    [displayBook.fulfilled]: (state, action) => action.payload[0],
    [addBook.fulfilled]: (state, action) => action.payload,
  },
};

const booksSlice = createSlice(options);

export default booksSlice.reducer;
