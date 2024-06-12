import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddReviewForm from "../components/AddReviewForm";

function BookDetails({addToReadingList}){
    const {booksId} = useParams();
    const [oneBook, setOneBook] = useState({})
    

    const fetchBookDetail = async () =>{
        try{
            const response = await axios.get(`http://localhost:5005/books/${booksId}`)
            setOneBook(response.data)
        } catch(err){
            console.log("book details error", err)
        }
    }

    useEffect(() =>{
        fetchBookDetail();
    }, [booksId])

    const HandleAddToReadingList = () =>{
       addToReadingList(oneBook)
    }

    
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
                        <button onClick={HandleAddToReadingList}>Add to reading list</button>
                    {/* buy book */}
                    </div>
                </div>
            </div>

            <div>
                <h2>Book Reviews</h2>
                {oneBook.reviews && (oneBook.reviews.map((review, index) => (
                    <div key={index}>
                        <p>{review.fullname}</p>
                        <p>{review.text}</p>
                    </div>
                )))}

                <AddReviewForm  onReload={fetchBookDetail}/>
            
            </div>
        </div>
    )
}

export default BookDetails