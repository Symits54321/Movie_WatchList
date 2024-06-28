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



function App() {

  const dispatch = useDispatch();
    
  // const [Data,setData] = useState([""]);

  // const[]=useSelector(movieSelector);
   



  useEffect(()=>{

    fetchApi();

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


  },[]);

   

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
        {/* it is the main page for all chat execution  */}
        <RouterProvider  router={browserRouter} />
      </div>
    
  );
}


function Navbar() {
  return (
    <div className='Navbar'>
      {/* <h1>Movie WatchList</h1> */}
      {/* heading */}
        <div className='headingLogo'>

          <img src='images/heading.JPG' />

        </div>
      {/* Navbtns  */}
     <div className='navbtns'>
      <NavLink
        to="/homepage"
        className={({ isActive, isPending }) =>
          isPending ? "pendingLink" : isActive ? "activated nav" : "notActived nav"
        }
      >
        Homepage
      </NavLink>
      <NavLink
        to="/add_edit_page"
        className={({ isActive, isPending }) =>
          isPending ? "pendingLink" : isActive ? "activated nav" : "notActived nav"
        }
      >
       Add
     </NavLink>
     </div>
    
      {/* <Link to={`/detailpage`} >Details</Link>}} */}
      <Outlet /> 
    </div>
  );
}








export default App;
