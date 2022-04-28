const Book = (props) => {
  const { title, author } = props;
  return (
    <p>
      {title} by {author}
    </p>
  );
};

export default Book;
