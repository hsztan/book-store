import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <h1>This is the Categories Page</h1>
      <h2>{categories}</h2>
      <button onClick={() => dispatch(checkStatus())} type="button">
        Check status
      </button>
    </div>
  );
};

export default Categories;
