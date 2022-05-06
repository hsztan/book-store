import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';
import ProgressBar from '../progress-bar/ProgressBar';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  return (
    <li className="book-card">
      <div className="info">
        <p className="category">General</p>
        <h3 className="title">{book.title}</h3>
        <p className="author">{book.author}</p>

        <div className="actions">
          <button type="button" className="btn btn-primary">
            Comments
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => dispatch(removeBook(book.item_id))}
          >
            Remove
          </button>
          <button type="button" className="btn btn-secondary">
            Edit
          </button>
        </div>
      </div>

      <ProgressBar />

      <div className="chapter">
        <p>CURRENT CHAPTER</p>
        <span className="chapter-name">Chapter 1</span>
        <button type="button" className="update">
          Update Progress
        </button>
      </div>
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
