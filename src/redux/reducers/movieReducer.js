


import { createSlice } from "@reduxjs/toolkit";



const initialState={

   

     movies : [
        {
            id:'1',
            title:'Robert the great',
            description:'A funny old age film to show fake greatness',
            releaseYear:'1987',
            genre:'Comedy',
            watchedStatus:false,
            rating:4,
            review:[{name:"Sumit",comment:"What a film it is!!"},{name:"Steve",comment:"Very Old age film"}],
            imageUrl:'https://th.bing.com/th/id/OIP.u8o6FGGEhBuo8LF-fkVGaQAAAA?w=115&h=180&c=7&r=0&o=5&pid=1.7'
        },

        {
            id:'2',
            title:'Alice in Borderland ',
            description:'Obsessed gamer Arisu suddenly finds himself in a strange, emptied-out version of Tokyo in which he and his friends must compete in dangerous games in order to survive.',
            releaseYear:'2020',
            genre:'Action',
            watchedStatus:false,
            rating:4,
            review:[{name:"Sumit",comment:"very nice film"},{name:"Steve",comment:"nice action film"}],
            imageUrl:'https://th.bing.com/th?id=ODL.4142827bbe4267ca437a41fafc711bec&w=135&h=201&c=10&rs=1&qlt=90&o=6&pid=13.1'
        },

        {
            id: '3',
            title: 'Inception',
            description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            releaseYear: '2010',
            genre: 'Sci-Fi',
            watchedStatus: true,
            rating: 5,
            review: [
              { name: "John", comment: "Mind-blowing!" },
              { name: "Jane", comment: "A cinematic masterpiece" }
            ],
            imageUrl: 'https://www.bing.com/images/search?view=detailV2&ccid=JsYPBTLA&id=BFAC45AF8C823E6B91AD5C96FEB65134CAA503F5&thid=OIP.JsYPBTLAel-gKfhICwrKsgHaK-&mediaurl=https%3a%2f%2fcdn.traileraddict.com%2fcontent%2fwarner-bros-pictures%2finception-11.jpg&exph=811&expw=547&q=inception+2010&simid=608040668354139153&FORM=IRPRST&ck=4C1C030E6EE5B484B14F3CF05B413B2D&selectedIndex=3&itb=0'
          },
          {
            id: '4',
            title: 'The Matrix',
            description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
            releaseYear: '1999',
            genre: 'Sci-Fi',
            watchedStatus: true,
            rating: 5,
            review: [
              { name: "Alice", comment: "A true classic" },
              { name: "Bob", comment: "Revolutionary effects" }
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.BthwaDFzOiwwut5b3y84eQHaK9?w=185&h=274&c=7&r=0&o=5&pid=1.7'
          },
          {
            id: '5',
            title: 'Parasite',
            description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
            releaseYear: '2019',
            genre: 'Thriller',
            watchedStatus: false,
            rating: 5,
            review: [
              { name: "Charlie", comment: "Intense and gripping" },
              { name: "Dave", comment: "A modern masterpiece" }
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP._KPkixi_Y_B9GG6vRGtSBQHaKt?w=115&h=180&c=7&r=0&o=5&pid=1.7'
          },
          {
            id: '6',
            title: 'Interstellar',
            description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
            releaseYear: '2014',
            genre: 'Sci-Fi',
            watchedStatus: true,
            rating: 5,
            review: [
              { name: "Eve", comment: "Visually stunning" },
              { name: "Frank", comment: "Emotionally profound" }
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.n-lW5hhF0w9CCmLzfl6aRAHaK-?w=122&h=181&c=7&r=0&o=5&pid=1.7'
          },
          {
            id: '7',
            title: 'The Dark Knight',
            description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
            releaseYear: '2008',
            genre: 'Action',
            watchedStatus: true,
            rating: 5,
            review: [
              { name: "Grace", comment: "Heath Ledger was phenomenal" },
              { name: "Hank", comment: "Best superhero movie ever" }
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.eW6u_0Qdr84kZ3BKFZBF0QHaLH?w=185&h=278&c=7&r=0&o=5&pid=1.7'
          },
          {
            id: '8',
            title: 'Fight Club',
            description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.',
            releaseYear: '1999',
            genre: 'Drama',
            watchedStatus: false,
            rating: 4,
            review: [
              { name: "Ivy", comment: "A cult classic" },
              { name: "Jack", comment: "Thought-provoking" }
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.Wfes5TTYqEdjyiiAUmu4pwHaKd?w=185&h=262&c=7&r=0&o=5&pid=1.7'
          },
          {
            id: '9',
            title: 'Pulp Fiction',
            description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
            releaseYear: '1994',
            genre: 'Crime',
            watchedStatus: true,
            rating: 5,
            review: [
              { name: "Ken", comment: "Quentin Tarantino at his best" },
              { name: "Linda", comment: "A masterpiece of storytelling" }
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.llynRvM7jvRi8GeTx-WO3AHaHa?pid=ImgDet&w=192&h=192&c=7'
          },
          {
            id: '10',
            title: 'The Shawshank Redemption',
            description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            releaseYear: '1994',
            genre: 'Drama',
            watchedStatus: true,
            rating: 5,
            review: [
              { name: "Mike", comment: "An all-time great" },
              { name: "Nina", comment: "Incredibly moving" }
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.w0SK_ZRdaWbnC2goV4kbYAHaLH?w=185&h=277&c=7&r=0&o=5&pid=1.7'
          },
          {
            id: '11',
            title: 'The Godfather',
            description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
            releaseYear: '1972',
            genre: 'Crime',
            watchedStatus: true,
            rating: 5,
            review: [
              { name: "Oscar", comment: "A timeless classic" },
              { name: "Pat", comment: "Unparalleled storytelling" }
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.x7zY6MthkN7o9Kezvws-uQHaLH?w=185&h=277&c=7&r=0&o=5&pid=1.7'
          },
          {
            id: '12',
            title: 'The Lord of the Rings: The Return of the King',
            description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
            releaseYear: '2003',
            genre: 'Fantasy',
            watchedStatus: true,
            rating: 5,
            review: [
              { name: "Quincy", comment: "Epic conclusion to the trilogy" },
              { name: "Rachel", comment: "Visually and emotionally stunning" }
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.lhCf99U87SYNNkS-2Y1jjwAAAA?w=185&h=280&c=7&r=0&o=5&pid=1.7'
          
        }

    ],


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

    password:""
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
          setWatchedStatus: (state, action) => {
            state.watchedStatus = action.payload;
          },
          setEditStatus: (state, action) => {
            state.editStatus = action.payload;
          },
          




        addMovie:(state, action) => {

            state.movies.push(action.payload);
        },

        deleteMovie:(state,action) => {
            let deleteId = action.payload
            state.movies = state.movies.filter(movie => movie.id !== deleteId);
        },
    
        
        setSearchInput:(state,action)=>{
        
            state.searchInput=action.payload;
        },
        

        togglePopupState: (state, action) => {

            state.popupState = !state.popupState;
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
        }
         

    }
})



// export the movies reducer function and action creators here
export const movieReducer = movieSlice.reducer;

export const movieActions = movieSlice.actions;



// export the movies selector function here

export const movieSelector = (state)=>state.movieReducer;



     