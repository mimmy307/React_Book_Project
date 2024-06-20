import { Link, NavLink } from "react-router-dom"
import "../components/NavBar.css"
import logo from "../assets/images/Logo1.png"
import profileIcon from "../assets/images/profile-icon.png"

function Navbar(){
    return(
        <div className="navbar">
        <Link to="/"><img src={logo} alt="logo"/></Link> 
        <div className="navbarInfo">
            <NavLink className={({isActive})  => isActive ? "navbarInfo nav-active" : "navbarInfo"} to="/"><p>Home</p></NavLink>
            <NavLink className={({isActive})  => isActive ? "navbarInfo nav-active" : "navbarInfo"} to="/allbooks"><p>Books</p></NavLink>
            <NavLink className={({isActive})  => isActive ? "navbarInfo nav-active" : "navbarInfo"} to="/aboutus"><p>About Us</p></NavLink>
        </div>
        <Link className="profile-icon"  to="/profile"><img src={profileIcon}/></Link> 

        </div>
    )

}

export default Navbar