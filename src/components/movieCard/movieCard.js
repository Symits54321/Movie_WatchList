

import style from './movieCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { movieReducer,movieActions,movieSelector } from '../../redux/reducers/movieReducer';

function MovieCard({name,imageUrl,id}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const {movies} = useSelector(movieSelector);

    const handlePosterClick=(e)=>{

      

        console.log(e.target.parentElement.className);
        console.log(e.target.parentElement.id);

        let id = e.target.parentElement.id;
        
         if(e.target.parentElement.className === 'MovieCard' || 'poster' ){
          console.log("navigated");
          // navigate to /detailpage
           navigate(`/detailpage/${id}`);
         }

    }



  return (
    <div className={style.MovieCard} id={id} onClick={(e)=>handlePosterClick(e)}>

        {/* //poster */}
           <div className={style.poster} id={id}>
             <img  src={imageUrl} alt={name}/>
           </div>
         
        {/* //name */}
           <p className={style.title}>{name}</p>

           {/* watched status  */}

           {/* <div> */}
          
          {/* <label>watchedStatus</label>
         

          <button onClick={()=> dispatch(movieActions.setWatchedStatus(!watchedStatus))}>{watchedStatus ? 'Watched' : 'Not Watched'}</button>
       
        </div> */}


    </div>
  );
}

export default MovieCard;
