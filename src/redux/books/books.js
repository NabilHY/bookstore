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

const options = {
  name: 'books',
  initialState: [],
  reducers: {
  },
  extraReducers: {
    [displayBook.fulfilled]: (state, action) => action.payload[0],
  },
};

const booksSlice = createSlice(options);

export default booksSlice.reducer;
