import { Link, NavLink } from "react-router-dom"
import "../components/NavBar.css"
import logo from "../assets/images/Logo1.png"
import profileIcon from "../assets/images/profile-icon.png"
import { useState } from "react"
// import menuIcon from "../assets/images/burgerMenu.png"
import menuIcon from "../assets/images/menuIcon.png"

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () =>{
        setMenuOpen(false)
    }

    return(
        <div className="navbar">
            <Link to="/"><img src={logo} alt="logo" className="logo"/></Link> 

            <button className="menu-icon" onClick={toggleMenu}>
                    <img src={menuIcon}/>
            </button>

            <div className={`navbarInfo ${menuOpen ? 'active' : '' }`}>
                <NavLink className={({isActive})  => isActive ? "nav-active" : ""} to="/" onClick={closeMenu}><p>Home</p></NavLink>
                <NavLink className={({isActive})  => isActive ? "nav-active" : ""} to="/allbooks" onClick={closeMenu}><p>Books</p></NavLink>
                <NavLink className={({isActive})  => isActive ? "nav-active" : ""} to="/aboutus" onClick={closeMenu}><p>About Us</p></NavLink>
                
                <Link className="profile-icon-mobile"  to="/profile/mydetails" onClick={closeMenu}><img src={profileIcon}/></Link> 
            </div>

            <Link className="profile-icon-desktop"  to="/profile/mydetails"><img src={profileIcon}/></Link> 

        </div>
    )

}

export default Navbar