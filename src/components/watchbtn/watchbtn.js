

import { movieActions,movieSelector } from "../../redux/reducers/movieReducer";
import { useSelector, useDispatch } from "react-redux";
import style from './watchbtn.module.css';


function WatchedBtn ({id,watched}){

    const dispatch = useDispatch() ;

   const {toggleWatchedState} = useSelector(movieSelector);

    return(

         <button 
            className={watched ?`${style.watchbtn} ${style.watched}`: `${style.watchbtn} ${style.unwatched}`} 
            onClick={()=> dispatch(movieActions.toggleWatchedState(id))}>

            {watched ? 'watched' : 'unwatched'}

        </button>
    );
}

export default WatchedBtn;