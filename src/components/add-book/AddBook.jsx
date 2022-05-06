import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

import './AddBook.style.scss';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const title = target.title.value;
    const author = target.author.value;
    dispatch(addBook({ title, author, category: '' }));
    target.title.value = '';
    target.author.value = '';
  };

  return (
    <div className="addbook-container">
      <hr />
      <form onSubmit={handleSubmit}>
        <h2>add new book</h2>
        <div className="inputs-container">
          <input type="text" id="title" placeholder="Add Title" required />
          <input type="text" id="author" placeholder="Add Author" required />
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
