import { Link } from "react-router-dom"
import "../components/NavBar.css"

function Navbar(){
    return(
        <div className="navbar">
        <img src="" alt="logo"/>
        <div className="navbarInfo">
            <Link to="/"><p>Home</p></Link>
            <p>Books</p>
            <p>About Us</p>
        </div>
        <Link to="/profile"><button> My profile</button></Link> 

        </div>
    )

}

export default Navbar