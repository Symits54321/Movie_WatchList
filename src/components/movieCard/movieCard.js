

import style from './movieCard.module.css';
import { useDispatch, useSelector } from 'react-redux';

// import { movieReducer,movieActions,movieSelector } from '../../redux/reducers/movieReducer';

function MovieCard({name,imageUrl}) {

    const dispatch = useDispatch();

    // const {movies} = useSelector(movieSelector);

  return (
    <div className={style.MovieCard}>

        {/* //poster */}
           <div className={style.poster}>
             <img src={imageUrl} alt={name}/>
           </div>
         
        {/* //name */}
           <p className={style.title}>{name}</p>

    </div>
  );
}

export default MovieCard;
