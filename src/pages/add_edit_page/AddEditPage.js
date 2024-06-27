

import style from './AddEditPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { movieReducer,movieActions,movieSelector } from '../../redux/reducers/movieReducer';

import Movies from '../../components/movies/movies/movies';




function AddEditPage() {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {id,title,description,releaseYear,genre,watchedStatus,rating,review,imageUrl,
    currReviewerName,currReview,editStatus
  } = useSelector(movieSelector);



  function generateRandomId() {
    return '_' + Math.random().toString(36).substr(2, 9); // Example: "_f7a1h2z5n"
  }
  

 

  const handleSubmit = () =>{
      
       const randomId = generateRandomId();

      dispatch(movieActions.addMovie({
        id: randomId,
        title: title,
        description: description,
        releaseYear: releaseYear,
        genre: genre,
        watchedStatus: watchedStatus,
        rating: rating,
        review:review,
        imageUrl: imageUrl
    }))

    navigate(-1);

  }

  const handleCancel = () =>{

       navigate(-1);

       dispatch(movieActions.refreshForm())

  }


  return (
    <div className={style.AddEditPage}>

    <h1>Welcome to {editStatus ? 'Edit' : 'Add'} Page</h1>


       {/* Form  */}
    
         <div className={style.form}>
             <div>
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => dispatch(movieActions.setTitle(e.target.value))}
              />
           
             </div>
             <div>
              <label>Description</label>
              <textarea
                value={description}
                onChange={(e) => dispatch(movieActions.setDescription(e.target.value))}
              />
            </div>
            
            <div>
              <label>Release Year</label>
              <input
                type="text"
                value={releaseYear}
                onChange={(e) => dispatch(movieActions.setReleaseYear(e.target.value))}
              />
           
          </div>
          <div>
              <label>Genre</label>
              <input
                type="text"
                value={genre}
                onChange={(e) => dispatch(movieActions.setGenre(e.target.value))}
              />
          
          </div>
          <div>
              <label>Rating</label>
              <input
                type="number"
                value={rating}
                onChange={(e) => dispatch(movieActions.setRating(e.target.value))}
              />
           
           </div>

           <div className={style.review}>
           
              <label>Review</label>
               {/* show list of reviews  */}
               <br/>
               <div>
               <label>Your Name</label>      
               <input
                type="text"
                value={currReviewerName}
                onChange={(e) => dispatch(movieActions.setReviewer(e.target.value))}
               /> 
               </div>
               <div>
                <label>Type your review</label>
                <textarea
                value={currReview}
                onChange={(e) => dispatch(movieActions.setReviewContent(e.target.value))}
               />
              </div>
              <button onClick={()=> dispatch(movieActions.setReview({reviewer:currReviewerName,content:currReview,}))}
                className={style.addreviewbtn}>Add review</button>

              <br/>

           </div>

           <div>
              <label>Image URL</label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => dispatch(movieActions.setImageUrl(e.target.value))}
              />
         
           </div>

           <div>
          
              <label>watchedStatus</label>
              {/* <input
                type="text"
                value={imageUrl}
                onChange={(e) => dispatch(movieActions.setWatchedStatus(e.target.value))}
              /> */}

              <button onClick={()=> dispatch(movieActions.setWatchedStatus(!watchedStatus))}>{watchedStatus ? 'Watched' : 'Not Watched'}</button>
           
            </div>

            <button onClick={()=> handleSubmit()}>Submit</button>
            <button onClick={()=> handleCancel()}>Cancel</button>
      </div>
    </div>
  );
}

export default AddEditPage;
