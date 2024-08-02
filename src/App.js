import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import Homepage from './pages/homepage/homepage';
import AddEditPage from './pages/add_edit_page/AddEditPage';
import DetailPage from './pages/detailpage/detailpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Outlet,NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { movieReducer,movieActions,movieSelector } from './redux/reducers/movieReducer';
import Navbar from './components/navbar/navbar';




function App() {

         const {movies} = useSelector(movieSelector);
   
 //---Fetching Movies :- in 1st load--------------------
  useEffect(()=>{
      localStorage.setItem('movies19',JSON.stringify(movies));
      console.log('Edited movie local storage');
  },[movies]);


  // -------- ROUTER   -------------------------------------
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
          <div className="headingLogo">
            <img src='images/heading.JPG' />
          </div>
          <RouterProvider  router={browserRouter} />
       </div>   
  );
}


export default App;
