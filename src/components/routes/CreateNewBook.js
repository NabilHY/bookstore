import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

function CreateNewBook() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '' });
  const { title, author, category } = book;

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setBook({
      title: '',
      author: '',
      category: '',
    });
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="prnt">
      <h3 className="heading">Add A NEW BOOK</h3>
      <form className="book-form" onSubmit={submitHandler}>
        <input className="book-input" onChange={handleChange} type="text" placeholder="Enter book title" name="title" value={title} />
        <input className="book-input" onChange={handleChange} type="text" placeholder="Enter book author" name="author" value={author} />
        <input className="book-input" onChange={handleChange} type="text" placeholder="Enter book category" name="category" value={category} />
        <input className="book-submit" type="submit" value="Add book" />
      </form>
    </div>
  );
}

export default CreateNewBook;
