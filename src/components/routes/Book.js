import { useSelector } from 'react-redux';

function Book() {
  const books = useSelector((state) => state.books);
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <button type="button">Comment</button>
          <button type="button">Edit</button>
          <button type="button">Remove</button>
        </li>

      ))}

    </ul>
  );
}

export default Book;
