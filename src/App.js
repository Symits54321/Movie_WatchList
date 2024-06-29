import logo from './logo.svg';
import './App.css';


import { useEffect,useState } from 'react';

import Homepage from './pages/homepage/homepage';
import AddEditPage from './pages/add_edit_page/AddEditPage';
import DetailPage from './pages/detailpage/detailpage';

import data from "./movieData.json";

import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Outlet,NavLink } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { movieReducer,movieActions,movieSelector } from './redux/reducers/movieReducer';

import Navbar from './components/navbar/navbar';




function App() {

  const dispatch = useDispatch();
    
  // const [Data,setData] = useState([""]);

  // const[]=useSelector(movieSelector);
   


//---------------------------------Fetching Movies :- in 1st load------------------------------------------------------


  useEffect(()=>{

 

        async function fetchApi(){

            try {

              // let fetchResponse = await fetch("./movieData.json");
              // let fetchedJson = await fetchResponse;
                let fetchedJson = data;
              // setData(fetchedJson);
              console.log("Got fetched data from movieData.json");

              dispatch(movieActions.setMovies(fetchedJson));
              console.log(fetchedJson);
              
            } catch (error) {
              
              console.log(error);
            }
      
          
        }


        fetchApi();


  },[]);



   
  // ------------------------------------------- ROUTER   -----------------------------------------------------

  const browserRouter = createBrowserRouter([{

    path:'/',
    element:<Navbar/>,
    children:[
      { index: true, element: <Homepage /> }, // Default route
      {path:"homepage", element:<Homepage/>,},
      {path:"add_edit_page", element:<AddEditPage/>,},
      {path:"detailpage/:id", element:<DetailPage/>,},
    ],
  },]);





  return (
 
      <div className="App">
        {/* Heading  */}
        <div className="headingLogo">
  
            <img src='images/heading.JPG' />
  
          </div>
        {/* it is the main page for all chat execution  */}
        <RouterProvider  router={browserRouter} />
      </div>
    
  );
}











export default App;
