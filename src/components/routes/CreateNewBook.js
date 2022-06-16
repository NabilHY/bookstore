import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

function CreateNewBook() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '' });
  const { title, author } = book;

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setBook({
      title: '',
      author: '',
    });
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input onChange={handleChange} type="text" placeholder="Enter book title" name="title" value={title} />
      <input onChange={handleChange} type="text" placeholder="Enter book author" name="author" value={author} />
      <input type="submit" value="Add book" />
    </form>
  );
}

export default CreateNewBook;
