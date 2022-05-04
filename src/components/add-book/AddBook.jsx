import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

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
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add a Book</h2>
        <p>Title:</p>
        <input type="text" id="title" placeholder="Add Title" required />
        <p>Author:</p>
        <input type="text" id="author" placeholder="Add Author" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
