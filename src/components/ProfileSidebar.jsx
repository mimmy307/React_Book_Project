import { NavLink} from "react-router-dom"
import "../components/ProfileSidebar.css"

function ProfileSidebar({closeSidebar, isVisible}){

    return(
        <div className={`profile-sidebar-main ${isVisible ? 'visible' : ''}`}>
            <h3>My Profile</h3>
            <NavLink to="mydetails" className= {({isActive}) => isActive ? "profile-link profile-active" : "profile-link"} onClick={closeSidebar} ><p>My details</p></NavLink>
            <NavLink to="myreadinglist" className= {({isActive}) => isActive ? "profile-link profile-active" : "profile-link"} onClick={closeSidebar}><p>My reading list</p></NavLink>
            <NavLink to="addbooks" className= {({isActive}) => isActive ? "profile-link profile-active" : "profile-link"} onClick={closeSidebar}><p>Add books</p></NavLink>
        </div>
    )
}

export default ProfileSidebar