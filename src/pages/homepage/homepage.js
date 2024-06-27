

import style from './homepage.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { movieReducer,movieActions,movieSelector } from '../../redux/reducers/movieReducer';

import Movies from '../../components/movies/movies/movies';

function Homepage() {

    const dispatch = useDispatch();

    // const {movies} = useSelector(movieSelector);

  return (
    <div className={style.homepage}>
       {/* <h1>Welcome to HomePage</h1> */}
        <Movies/>
    </div>
  );
}

export default Homepage;
