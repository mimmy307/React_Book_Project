import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className="Navbar">
        <img src="" alt="logo"/>
        <div>
            <Link to="/"><p>Home</p></Link>
            <p>Books</p>
            <p>About Us</p>
        </div>
        <Link to="/profile"><button> My profile</button></Link> 

        </div>
    )

}

export default Navbar