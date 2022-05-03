import { useSelector } from 'react-redux';
import Book from '../book/Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="bookscontainer">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
