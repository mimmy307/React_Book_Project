import { useState } from "react"
import AddBooksForm from "../components/AddBooksForm"
import MyDetails from "../components/MyDetails"
import ProfileSidebar from "../components/ProfileSidebar"
import ReadingList from "../components/ReadingList"
import "../pages/Profile.css"
import { Routes, Route } from "react-router-dom"

function Profile ({readingList, addBookToMyBooks}){
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
    };
  
    const closeSidebar = () => {
      setSidebarVisible(false); 
    };

    return(
        <div className="profile-container">
            <button className="profile-menu" onClick={toggleSidebar}>
                ☰
            </button>
            <ProfileSidebar  closeSidebar={closeSidebar} isVisible={sidebarVisible}/>
            <Routes>
            <Route path="/mydetails" element={<MyDetails />} />
            <Route path="/myreadinglist" element={<ReadingList  readingList={readingList}/> }/>
            <Route path="/addbooks" element={<AddBooksForm addBookToMyBooks={addBookToMyBooks} /> }/>
           
            </Routes>
       </div>
    )
}

export default Profile