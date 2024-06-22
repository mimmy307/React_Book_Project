import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddReviewForm from "../components/AddReviewForm";
import "../pages/BookDetails.css"
import { useNavigate } from "react-router-dom";

function BookDetails({addToReadingList}){
    const {booksId} = useParams();
    const [oneBook, setOneBook] = useState({})
    const [isAdded, setIsAdded] = useState(false)
    const navigate = useNavigate()
    

    const fetchBookDetail = async () =>{
        try{
            const response = await axios.get(`https://book-app-server-backend.adaptable.app/books/${booksId}`)
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
       setIsAdded(true)
    }
    
    const ratingStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars.push(<span key={i} className="star">&#9733;</span>);
          } else {
            stars.push(<span key={i} className="star">&#9734;</span>);
          }
        }
        return stars;
      };

    const deleteBook = () =>{
      axios
        .delete(`https://book-app-server-backend.adaptable.app/books/${booksId}`)
        .then (() =>{
          navigate ('/')
        })
        .catch((err) => console.log("delete book error", err))

    };

    return (
      <div className="book-details-container">
        <div className="back-btn-container">
          <button className="back-button" 
             onClick={() => {
                navigate(-1);
              }}
              >
              back
          </button>
          <button className="delete-book-btn" onClick={deleteBook}>Delete book</button>
        </div>
        <div className="book-details">
          <div className="book-image-container">
            <img
              src={oneBook.bookImage}
              alt={oneBook.bookTitle}
              className="book-details-image"
            />
          </div>
          <div className="book-details-content">
            <h2 className="book-details-title">{oneBook.bookTitle}</h2>
            <p className="book-details-author">{oneBook.bookAuthor}</p>
            <div className="book-details-rating">
              <p>Rating:</p>
              <div className="rating-stars">
                {ratingStars(oneBook.rating)}
              </div>
            </div>
            <p className="book-details-description">{oneBook.bookDescription}</p>
            <div className="book-details-tags">
                <button>{oneBook.genre}</button>
                <button>{oneBook.mood}</button>
            </div>
            <div className="book-details-action">
              <button onClick={HandleAddToReadingList}>{isAdded ? "Added to Reading List" : "Add to Reading List"}</button>
              <a href={oneBook.amazonBookUrl} target= "_blank"><button>Buy</button></a>
            </div>
            
            
          </div>
        </div>
    
        <div className="book-reviews-container">
          <h2 className="book-reviews-title">Book Reviews</h2>
            {oneBook.reviews &&
            oneBook.reviews.map((review, index) => (
              <div key={index} className="book-review">
                 <p className="book-review-fullname">{review.fullname}</p>
                <p className="book-review-text">{review.text}</p>
              </div>
              ))}
          <AddReviewForm onReload={fetchBookDetail} />
        </div>
      </div>
      );
    
}

export default BookDetails