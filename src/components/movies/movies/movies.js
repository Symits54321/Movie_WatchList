import style from './movies.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { movieReducer,movieActions,movieSelector } from '../../../redux/reducers/movieReducer';
import MovieCard from '../../movieCard/movieCard';




function Movies() {

     const dispatch = useDispatch();
     const {movies} = useSelector(movieSelector);

  return (
    <div className={style.movies}>

       {movies.map((movie)=>{

            return(
                
                <MovieCard key={movie.id} id={movie.id} movie={movie}name={movie.title} imageUrl={movie.imageUrl} watched={movie.watchedStatus}/>
                
            );
            
       })}

    </div>
  );
}

export default Movies;
