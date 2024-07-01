

import style from './AddEditPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { movieReducer,movieActions,movieSelector } from '../../redux/reducers/movieReducer';

import Movies from '../../components/movies/movies/movies';




function AddEditPage() {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {id,title,description,releaseYear,genre,watchedStatus,rating,review,imageUrl,videoUrl,
    currReviewerName,currReview,editStatus
  } = useSelector(movieSelector);



  function generateRandomId() {
    return '_' + Math.random().toString(36).substr(2, 9); // Example: "_f7a1h2z5n"
  }
  

 

  const handleSubmit = () =>{
    
    if(!editStatus){

      dispatch(movieActions.refreshForm());

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
            imageUrl: imageUrl,
            videoUrl: videoUrl,

            
        }))

     }else{

          dispatch(movieActions.editMovie({id:id}));
          dispatch(movieActions.setEditStatus(false));
        
     }

    navigate(-1);

    dispatch(movieActions.refreshForm());

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

           

           <div>
              <label>Image URL</label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => dispatch(movieActions.setImageUrl(e.target.value))}
              />
         
           </div>

           <div>
              <label>Youtube video URL</label>
              <input
                type="text"
                value={videoUrl}
                onChange={(e) => dispatch(movieActions.setVideoUrl(e.target.value))}
              />
         
           </div>

         <div className={style.formbtns}>
            <button onClick={()=> handleCancel()}>Cancel</button>
            <button onClick={()=> handleSubmit()}>Submit</button>
           
         </div>
      </div>
    </div>
  );
}

export default AddEditPage;
