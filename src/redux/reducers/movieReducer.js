
import data from "../../movieData.json";

import { createSlice } from "@reduxjs/toolkit";



const initialState={

   

     movies : JSON.parse(localStorage.getItem('movies19')) || data,


    //for searchInput

    searchInput:"",

    // for filling form 

    id:'',
    title:'',
    description:'',
    releaseYear:'',
    genre:'',
    watchedStatus:false,
    rating:0,
    review:[],
    currReviewerName:'',
    currReview:'',
    imageUrl:'',
    videoUrl:'',

  
    //edit
    editStatus:false,
    // for detail page 
    currentId:"",
  
    isLoading: false,
    error: null,   
    fetchAgain:1,
    message:"",
    textmessage:"",
    popupState:false,

    email:"",

    password:"",

    // current values 
    currMovieData:{}
}






const movieSlice = createSlice({
    name:'movies',
    initialState:initialState,
    reducers:{


        fetchStart:(state, action)=>{
            state.isLoading=true;
        },  

        fetchSuccess:(state, action)=>{
            state.message=action.payload;
            state.isLoading=false;
            console.log("Success :___ "+action.payload);
        },

        fetchError:(state, action)=>{
           state.error = action.payload;
           state.isLoading = false ;

           console.log("ERROR :___ "+action.payload);
        },


        // sett movie data 

        setMovies: (state, action) => {
          state.movies = action.payload;
        },

        setCurrMovie: (state, action) => {
          state.currMovieData = action.payload;
        },




        // setting form data 


          setTitle: (state, action) => {
            state.title = action.payload;
          },
          setDescription: (state, action) => {
            state.description = action.payload;
          },
          setReleaseYear: (state, action) => {
            state.releaseYear = action.payload;
          },
          setGenre: (state, action) => {
            state.genre = action.payload;
          },
          setRating: (state, action) => {
            state.rating = action.payload;
          },
          setReview: (state, action) => {
            state.review = action.payload;
          },
          setReviewer:(state,action) => {
             state.currReviewerName=action.payload;
          },
          setReviewContent:(state,action) => {
             state.currReview=action.payload;
          },
          setImageUrl: (state, action) => {
            state.imageUrl = action.payload;
          },
          setVideoUrl: (state, action) => {
            state.videoUrl = action.payload;
          },
          setWatchedStatus: (state, action) => {
            state.watchedStatus = action.payload;
          },
          setEditStatus: (state, action) => {
            state.editStatus = action.payload;
          },
          


     

    // Feature functions 
        setEditStatus:(state,action) => {
              state.editStatus = action.payload;
        },

        addMovie:(state, action) => {

            state.movies.push(action.payload);
        },

        editMovie:(state, action) => {

              //id
              let id = action.payload.id;

             // find location moviedata
             let index = state.movies.findIndex((mov) => mov.id === id);

              // movie object

              let editedObj = {
                "id": state.id,
                "title": state.title,
                "description": state.description,
                "releaseYear": state.releaseYear,
                "genre": state.genre,
                "watchedStatus": state.watchedStatus,
                "rating": state.rating,
                "review": state.review,
                "imageUrl": state.imageUrl, 
                "videoUrl": state.videoUrl
              } 
                
              //edit that movie location

              state.movies[index] = editedObj;
              
            
        },


        deleteMovie:(state,action) => {
            let deleteId = action.payload
            let Updatedmovies = state.movies.filter(movie => movie.id !== deleteId);
            state.movies=Updatedmovies;
        },

       
    
        
        setSearchInput:(state,action)=>{
        
            state.searchInput=action.payload;
        },
        

        togglePopupState: (state, action) => {

            state.popupState = !state.popupState;
        },

        toggleWatchedState :(state,action) => {
          let id = action.payload;
          // togggle the watched status
          let movies = state.movies;

          movies.forEach(x => {
            if(x.id == id){
              x.watchedStatus = ! x.watchedStatus;
            }
            });


         },


         setWatchedStateTrue :(state,action) => {
          let id = action.payload;
          // set true the watched status
          let movies = state.movies;

          movies.forEach(x => {
            if(x.id == id){
              x.watchedStatus = true;
            }
            });


         },

        refreshForm:(state)=>{
            state.id='';
            state.title='';
            state.description='';
            state.releaseYear='';
            state.genre='';
            state.watchedStatus=false;
            state.rating=0;
            state.review=[];
            state.currReviewerName='';
            state.currReview='';
            state.imageUrl='';
            state.editStatus=false;
            state.videoUrl='';
        },

        setEditForm:(state,action)=>{
          state.id=action.payload.id;
          state.title=action.payload.title;
          state.description=action.payload.description;
          state.releaseYear=action.payload.releaseYear;
          state.rating=action.payload.rating;
          state.review=action.payload.review;
          state.genre=action.payload.genre;
          state.watchedStatus=false;       
          state.imageUrl=action.payload.imageUrl;
          state.videoUrl=action.payload.videoUrl;
      }
         

    }
})



// export the movies reducer function and action creators here
export const movieReducer = movieSlice.reducer;

export const movieActions = movieSlice.actions;



// export the movies selector function here

export const movieSelector = (state)=>state.movieReducer;



     