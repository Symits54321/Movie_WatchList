

import style from './detailpage.module.css';
import { useEffect , useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieActions,movieSelector } from '../../redux/reducers/movieReducer';

import { useParams } from 'react-router-dom';

function DetailPage() {
   
   let {id} = useParams();

   const [movieData,setmovieData] = useState([""]);

   //get the movie data from id

   

   let {movies} = useSelector(movieSelector);

    useEffect(()=>{
          let movie = movies.filter(x=>x.id==id);
          setmovieData(movie[0]);
          console.log(movie[0]);
    },[]);


    let {title,description,imageUrl,genre,rating,releaseYear} = movieData;


  return (
    <div className={style.detailPage}>
      {/* <h1>Welcome to DetailPage {id}</h1> */}
       {/* imagesection  */}
         <div className={style.imageDetail}>
            <img src={imageUrl} alt={title}/>
         </div>
       {/* moviedetails  */}
       <div className={style.movieDetail}>
            {/* Title */}
            <h2 className={style.title}>{title}</h2>
            {/* Description */}
            <p className={style.description}>{description}</p>
            {/* Genre */}
            <p className={style.genre}>Genre: {genre}</p>
            {/* Rating */}
            <p className={style.rating}>Rating: {rating} / 10</p>
            {/* Release Year */}
            <p className={style.releaseYear}>Release Year: {releaseYear}</p>
         </div>
    </div>
  );
}

export default DetailPage;
