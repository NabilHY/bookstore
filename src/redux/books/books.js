import { v4 as uuidv4 } from 'uuid';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const options = {
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: {},
}

const booksSlice = createSlice(options);
