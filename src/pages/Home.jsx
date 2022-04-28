import BookContainer from '../components/book-container/BookContainer';
import AddBook from '../components/add-book/AddBook';

const Home = () => (
  <div>
    <h1>Book List</h1>
    <BookContainer />
    <AddBook />
  </div>
);

export default Home;
