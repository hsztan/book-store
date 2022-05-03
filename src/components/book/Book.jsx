import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <li className="book">
      <p>
        {book.title}
        by
        {book.author}
      </p>
      <button type="button">Remove</button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
