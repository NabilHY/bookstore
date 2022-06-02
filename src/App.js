import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book from './components/routes/Books';
import Categories from './components/routes/Categories';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Book />} />
      </Routes>
      <Routes>
        <Route path="categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
