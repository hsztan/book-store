import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  return (
    <li className="book">
      <p>
        {book.title}
        &nbsp; by &nbsp;
        {book.author}
      </p>
      <button onClick={() => dispatch(removeBook(book.item_id))} type="button">
        Remove
      </button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
