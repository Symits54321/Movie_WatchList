import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store";


import Homepage from './pages/homepage/homepage';
import AddEditPage from './pages/add_edit_page/AddEditPage';
import DetailPage from './pages/detailpage/detailpage';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


function App() {
   

  const browserRouter = createBrowserRouter([{

    path:'/',
    element:<Root/>,
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


function Root() {
  return (
    <div>
      <h1 style={{margin:"30px 10px"}}>MoviesApp</h1>
      <Outlet />
    </div>
  );
}

export default App;
