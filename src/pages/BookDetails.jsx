import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetails(){
    const {booksId} = useParams();
    const [oneBook, setOneBook] = useState({})

    useEffect(() =>{
        const fetchBookDetail = async () =>{
            try{
                const response = await axios.get(`http://localhost:5005/books/${booksId}`)
                setOneBook(response.data)
            } catch(err){
                console.log("book details error", err)
            }
        }
        fetchBookDetail();
    }, [booksId])

    
    return(
        <div>
            <div>
                <img src={oneBook.bookImage} alt={oneBook.bookTitle} />
                <div>
                    <h2>{oneBook.bookTitle}</h2>
                    <p>{oneBook.bookAuthor}</p>
                    <p>Rating:{oneBook.rating}</p>
                    <p>{oneBook.bookDescription}</p>
                    <span>
                        <button>{oneBook.genre}</button>
                        <button>{oneBook.mood}</button>
                    </span>
                    <div>
                    {/* Add to readding list */}
                    {/* buy book */}
                    </div>
                </div>
            </div>
            <div>
                <h2>Book Reviews</h2>
                {/* {oneBook.reviews && (oneBook.reviews.map((review, index) => (
                    <div key={index}>
                        <p>{review.fullname}</p>
                        <p>{review.text}</p>

                        add review button here with form
                    </div> */}
      
            
            </div>
        </div>
    )
}

export default BookDetails