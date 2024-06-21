import { NavLink} from "react-router-dom"
import "../components/ProfileSidebar.css"

function ProfileSidebar(){

    return(
        <div className="profile-sidebar-main">
            <h3>My Profile</h3>
            <NavLink to="mydetails" className= {({isActive}) => isActive ? "profile-link profile-active" : "profile-link"} ><p>My details</p></NavLink>
            <NavLink to="myreadinglist" className= {({isActive}) => isActive ? "profile-link profile-active" : "profile-link"}><p>My reading list</p></NavLink>
            <NavLink to="addbooks" className= {({isActive}) => isActive ? "profile-link profile-active" : "profile-link"}><p>Add books</p></NavLink>
        </div>
    )
}

export default ProfileSidebar