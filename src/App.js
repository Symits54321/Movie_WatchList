import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store";

import Chatpage from './pages/chatpage/Chatpage';
import Loginpage from './pages/loginpage/Loginpage';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


function App() {
   

  const browserRouter = createBrowserRouter([{

    path:'/',
    element:<Root/>,
    children:[
      {path:"login", element:<Loginpage/>,},
      {path:"chatpage", element:<Chatpage/>,},
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
      <h1 style={{margin:"30px 10px"}}>Welcome to the Chat App</h1>
      <Outlet />
    </div>
  );
}

export default App;
