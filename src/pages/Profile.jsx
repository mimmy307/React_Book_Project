import AddBooksForm from "../components/AddBooksForm"
import MyDetails from "../components/MyDetails"
import ProfileSidebar from "../components/ProfileSidebar"
import ReadingList from "../components/ReadingList"
import "../pages/Profile.css"
import { Routes, Route } from "react-router-dom"

function Profile ({readingList, addBookToMyBooks}){

    return(
        <div className="profile-container">
            <ProfileSidebar />
            <Routes>
            <Route path="/mydetails" element={<MyDetails />} />
            <Route path="/myreadinglist" element={<ReadingList  readingList={readingList}/> }/>
            <Route path="/addbooks" element={<AddBooksForm addBookToMyBooks={addBookToMyBooks} /> }/>
           
            </Routes>
       </div>
    )
}

export default Profile