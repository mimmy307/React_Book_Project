import MyBooks from "../components/MyBooks"
import ReadingList from "../components/ReadingList"


function Profile ({readingList, myBooks}){

    return(
        <div>
            <ReadingList  readingList={readingList}/> 
            <MyBooks myBooks ={myBooks} />
       </div>
    )
}

export default Profile