import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store";


import Homepage from './pages/homepage/homepage';
import AddEditPage from './pages/add_edit_page/AddEditPage';
import DetailPage from './pages/detailpage/detailpage';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Outlet,NavLink } from "react-router-dom";



function App() {
   

  const browserRouter = createBrowserRouter([{

    path:'/',
    element:<Navbar/>,
    children:[
      { index: true, element: <Homepage /> }, // Default route
      {path:"homepage", element:<Homepage/>,},
      {path:"add_edit_page", element:<AddEditPage/>,},
      {path:"detailpage", element:<DetailPage/>,},
    ],
  },]);





  return (
    <Provider store={store}>
      <div className="App">
        {/* it is the main page for all chat execution  */}
        <RouterProvider  router={browserRouter} />
      </div>
    </Provider>
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
