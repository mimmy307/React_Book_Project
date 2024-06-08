import { useState, useEffect} from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import GenreSidebar from "../components/GenreSidebar"

function Genre(){
    const [books, setBooks] = useState([])
    const {genre} = useParams()


    useEffect(() => {
        const fetchData = async() =>{
            try{
                const response = await axios.get(`http://localhost:5005/books?genre=${genre}`);
                setBooks(response.data);
            }catch(err){
                console.log("genre", err)
            }
        }

        fetchData();
    },[genre])
 
    return(
        <div>
        <GenreSidebar />
        <h2 style={{color:"red"}}>{genre}</h2>
            {books.map((book) =>{
                    return (
                    <div key= {book.id}>
                        <Link to={`/book/${book.id}`}>
                        <img src={book.bookImage} alt={book.bookTitle}/>
                        <p>{book.bookTitle}</p>
                        </Link>
                    </div>
                    )
                 })}

        </div>
    )

}

export default Genre