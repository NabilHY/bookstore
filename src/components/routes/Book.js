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
        <li className="book" key={book.id}>
          <div className="book-container">
            <div>
              <p className="category">{book.category}</p>
              <p className="title">{book.title}</p>
              <p className="author">{book.author}</p>
            </div>
            <div className="btn-container">
              <button className="btn" type="button">Comment</button>
              <button className="btn" type="button">Edit</button>
              <button className="btn" type="button" onClick={() => handleClick(book.id)}>Remove</button>
            </div>
          </div>
          <div className="compl-prog">
            <div className="Oval-2" />
            <div className="progress">
              <p className="perc">64%</p>
              <p className="compl">Completed</p>
            </div>
          </div>
          <div>
            <p className="current">CURRENT CHAPTER</p>
            <p className="chapter">Chapter 17</p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Book;
