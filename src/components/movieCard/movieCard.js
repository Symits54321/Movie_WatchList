

import style from './movieCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import WatchedBtn from '../watchbtn/watchbtn';
import { movieActions } from '../../redux/reducers/movieReducer';

// import { movieReducer,movieActions,movieSelector } from '../../redux/reducers/movieReducer';

function MovieCard({movie,name,imageUrl,id,watched}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const {movies} = useSelector(movieSelector);



    // ---------------------------- Click Event handler--------- // 

    const handlePosterClick=(e)=>{

        console.log(e.target.parentElement.classList);
        console.log("child:- " +e.target.className);
        console.log(e.target.parentElement.id);

        let id = e.target.parentElement.id;

        let targetClassname = e.target.parentElement.className;


        // first check of btn click event occurrence

        if(e.target.className.match(/movieCard_deletebtn__/)){
          return;
        }

       else if (targetClassname.match(/movieCard_btns__/) ) {
            console.log(e.target.className);
            // for watchlist olgorithm alreay given in watchlist component
            // for edit btn
            if(e.target.className.match(/movieCard_editbtn__/)){
                 
                dispatch(movieActions.setEditStatus(true));         // setting ststus 
                dispatch(movieActions.setEditForm(movie));         // filling form 
                    
                  navigate(`/add_edit_page`);       // redirecting

            }
             
              

          }

         // to open movie  :- (redirecting to detail page)
         else if(targetClassname.match(/movieCard_poster__/) ||  targetClassname.match(/movieCard_MovieCard__/) 
          || e.target.className.match(/movieCard_MovieCard__/) ){
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
              {/* delete button  */}
              <button 
                className={style.deletebtn} 
                onClick={() => dispatch(movieActions.deleteMovie(id))}>
                  x
              </button>
           </div>
         
        {/* //name */}
           <p className={style.title}>{name}</p>

           {/* watched status  */}
            <div className={style.btns}>
              <WatchedBtn id={id} watched={watched}/>
              <button  className={style.editbtn}>Edit</button>
             
            </div>
          

           {/* <div> */}
          
          {/* <label>watchedStatus</label>
         

          <button onClick={()=> dispatch(movieActions.setWatchedStatus(!watchedStatus))}>{watchedStatus ? 'Watched' : 'Not Watched'}</button>
       
        </div> */}


    </div>
  );
}

export default MovieCard;
