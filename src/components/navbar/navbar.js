
import { Outlet ,NavLink } from "react-router-dom";
import style from "./navbar.module.css";
import { useDispatch } from "react-redux";
import { movieActions } from "../../redux/reducers/movieReducer";




function Navbar() {


  let dispatch = useDispatch();

  return (

      <div className={style.Navbar}>
        {/* <h1>Movie WatchList</h1> */}

        {/* heading */}
          

        {/* Navbtns  */}
       <div className={style.navbtns}>
        <NavLink
          to="/homepage"
          className={({ isActive, isPending }) =>
            isPending ? "pendingLink" : isActive ? `${style.activated} ${style.nav}` : `${style.notActived} ${style.nav}`
          }
        >
          Homepage
        </NavLink>
        <NavLink
          to="/add_edit_page"
          className={({ isActive, isPending }) =>
            isPending ? "pendingLink" : isActive ? `${style.activated} ${style.nav}` : `${style.notActived} ${style.nav}`
          }

          onClick={()=>{
            dispatch(movieActions.setEditStatus(false))
            dispatch(movieActions.refreshForm())
          }}
            >
            Add
        </NavLink>
        </div>
        
        {/* <Link to={`/detailpage`} >Details</Link>}} */}

        {/* Outlet :- (of the roued page) */}
        <Outlet /> 
      </div>
    );
  }


  export default  Navbar ;