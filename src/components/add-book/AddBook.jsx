import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ target }) => {
    const title = target.title.value;
    const author = target.author.value;
    dispatch(addBook({ title, author }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add a Book</h2>
        <p>Title:</p>
        <input type="text" id="title" placeholder="Add Title" />
        <p>Author:</p>
        <input type="text" id="Author" placeholder="Add Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
