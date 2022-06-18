import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

function Book() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <button type="button">Comment</button>
          <button type="button">Edit</button>
          <button type="button" onClick={() => handleClick(book.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default Book;
