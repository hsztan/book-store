import { useSelector } from 'react-redux';
import Book from '../book/Book';

const BookList = () => {
  const books = useSelector((state) => state);
  console.log(books);
  return (
    <div className="bookscontainer">
      <Book title="The Davinci Code" author="Dan Brown" />
    </div>
  );
};

export default BookList;
