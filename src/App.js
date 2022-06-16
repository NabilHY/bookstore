import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Books from './components/routes/Books';
import Categories from './components/routes/Categories';
import Navbar from './components/Navbar';
import { displayAllBooks } from './redux/books/books';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(displayAllBooks()); }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
      </Routes>
      <Routes>
        <Route path="categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
