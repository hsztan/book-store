import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './NavBar.style.scss';

const Header = () => (
  <div className="navbar">
    <ul>
      <li id="logo">
        <Link to="/">Bookstore CMS</Link>
      </li>
      <li>
        <Link to="/" className="link-active">
          BOOKS
        </Link>
      </li>
      <li>
        <Link to="/categories" className="link-inactive">
          CATEGORIES
        </Link>
      </li>
      <li id="user">
        <div className="user">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </li>
    </ul>
  </div>
);

export default Header;
