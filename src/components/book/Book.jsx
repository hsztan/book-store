import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <li className="book">
      <p>
        {title}
        by
        {author}
      </p>
      <button type="button">Remove</button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
