import { useState, useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function Genre(){
    const [books, setBooks] = useState([])
    const {genre} = useParams()
    console.log(genre)

    useEffect(() => {
        const fetchData = async() =>{
            try{
                const response = await axios.get(`http://localhost:5005/books?genre=${genre}`);
                console.log(response)
                setBooks(response.data);
            }catch(err){
                console.log("genre", err)
            }
        }

        fetchData();
    },[genre])

    return(
        <div>
        <h2 style={{color:"red"}}>{genre}</h2>
            {books.map((book) =>{
                    return (
                    <div key= {book.bookId}>
                        <img src={book.bookImage} alt={book.bookTitle}/>
                        <p>{book.bookTitle}</p>
                    </div>
                    )
                 })}

        </div>
    )

}

export default Genre