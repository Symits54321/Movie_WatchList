


import { createSlice } from "@reduxjs/toolkit";



const initialState={

   

     movies : [
        {
            id:'1234',
            title:'Robert',
            description:'',
            releaseYear:'',
            genre:'',
            watchedStatus:false,
            rating:4,
            review:'',
            imageUrl:'images/movies/Robert.jpg'
        },
       

    ],



    // for filling form 

    id:'',
    title:'',
    description:'',
    releaseYear:'',
    genre:'',
    watchedStatus:false,
    rating:0,
    review:'',
    imageUrl:'',

    searchInput:"",

  
    isLoading: false,
    error: null,   
    fetchAgain:1,
    message:"",
    textmessage:"",
    popupState:false,

    email:"",

    password:""
}






const movieSlice = createSlice({
    title:'movies',
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

        setFormData:(state, action)=>{
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.releaseYear = action.payload.releaseYear;
            state.genre = action.payload.genre;
            state.rating = action.payload.rating;
            state.review = action.payload.review;
            state.imageUrl = action.payload.imageUrl;
            console.log("set_form_data : - "+action.payload);
        },

        addMovie:(state, action) => {

            state.movies.push(action.payload)
        },

        deleteMovie:(state,action) => {
            let deleteId = action.payload
            let movies = state.movies
            movies = movies.filter(x=>x.id!= deleteId)
            state.movies= movies;
        },
    
        
        setSearchInput:(state,action)=>{
        
            state.searchInput=action.payload;
        },
        

        togglePopupState: (state, action) => {

            state.popupState = !state.popupState;
        },

      
         

    }
})



// export the movies reducer function and action creators here
export const movieReducer = movieSlice.reducer;

export const movieActions = movieSlice.actions;



// export the movies selector function here

export const movieSelector = (state)=>state.movieReducer;



     