import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../redux/books/books';
import Book from '../book/Book';
import './BookList.style.scss';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="bookscontainer">
      <ul className="booklist">
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
