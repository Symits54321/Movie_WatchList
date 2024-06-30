

import style from './movieCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import WatchedBtn from '../watchbtn/watchbtn';
import { movieActions } from '../../redux/reducers/movieReducer';

// import { movieReducer,movieActions,movieSelector } from '../../redux/reducers/movieReducer';

function MovieCard({name,imageUrl,id,watched}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const {movies} = useSelector(movieSelector);





    const handlePosterClick=(e)=>{

        console.log("parent:- " +e.target.parentElement.className);
        console.log("child:- " +e.target.className);
        console.log(e.target.parentElement.id);

        let id = e.target.parentElement.id;

          if((e.target.parentElement.className === 'movieCard_btns__aaVHl')  ){
            console.log(e.target.className);
          }

         // to open movie  :- (redirecting to detail page)
         else if((e.target.parentElement.className ===  'movieCard_poster__JwnuU')  ){
          console.log("navigated");
          // navigate to /detailpage
           navigate(`/detailpage/${id}`);
          // set watched true
          dispatch(movieActions.setWatchedStateTrue(id));

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
            <div className={style.btns}>
              <WatchedBtn id={id} watched={watched}/>
            </div>
          

           {/* <div> */}
          
          {/* <label>watchedStatus</label>
         

          <button onClick={()=> dispatch(movieActions.setWatchedStatus(!watchedStatus))}>{watchedStatus ? 'Watched' : 'Not Watched'}</button>
       
        </div> */}


    </div>
  );
}

export default MovieCard;
