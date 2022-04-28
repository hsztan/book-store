import { Link } from 'react-router-dom';

const Header = (props) => (
  <div className="bookscontainer">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/authors">Authors</Link>
      </li>
    </ul>
  </div>
);

export default Header;
