import { useState, useEffect} from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import GenreSidebar from "../components/GenreSidebar"
import "../pages/Genre.css"

function Genre(){
    const [books, setBooks] = useState([])
    const {genre} = useParams()


    useEffect(() => {
        const fetchData = async() =>{
            try{
                const response = await axios.get(`https://book-app-server-backend.adaptable.app/books?genre=${genre}`);
                setBooks(response.data);
            }catch(err){
                console.log("genre", err)
            }
        }

        fetchData();
    },[genre])
 
    return(
        <div className="genre-container" > 
            <GenreSidebar />
            <div className="genre-content">
            <h2>{genre}</h2>
                {books.map((book) =>{
                        return (
                        <div key= {book.id}>
                            <Link to={`/book/${book.id}`}>
                            <img src={book.bookImage} alt={book.bookTitle}/>
                            </Link>
                        </div>
                        )
                    })}
            </div>
        </div>
    )

}

export default Genre