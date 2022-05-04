import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../redux/books/books';
import Book from '../book/Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  console.log(books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  useEffect(() => { console.log('books changed'); }, [books]);

  return (
    <div className="bookscontainer">
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
