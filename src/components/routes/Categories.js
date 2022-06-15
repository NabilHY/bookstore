import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <button onClick={clickHandler} type="button">Check status</button>
      <h1>
        {status}
      </h1>
    </div>
  );
};

export default Categories;
