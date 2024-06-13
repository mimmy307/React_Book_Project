import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddBooksForm({addBookToMyBooks}){
const [bookTitle, setBookTitle] = useState("");
const [bookImage, setBookImage] = useState("");
const [bookDescription, setBookDescription] = useState("");
const [bookAuthor, setBookAuthor] = useState("");
const [bookPublisher, setBookPublisher] = useState("");
const [bookIsbn, setBookIsbn] = useState("");
const [mood, setMood] = useState("");
const [genre, setGenre] = useState("");
const [rating, setRating] = useState("");

const navigate = useNavigate()

const handleBookTitle = (e) => setBookTitle(e.target.value);
const handleBookImage = (e) => setBookImage(e.target.value);
const handleBookDescription= (e) => setBookDescription(e.target.value);
const handleBookAuthor = (e) => setBookAuthor(e.target.value);
const handleBookPublisher = (e) => setBookPublisher (e.target.value);
const handleBookIsbn= (e) => setBookIsbn(e.target.value);
const handleMood = (e) => setMood (e.target.value);
const handleGenre = (e) => setGenre(e.target.value);
const handleRating = (e) => setRating(e.target.value);

function handleFormSubmit (e){
    e.preventDefault();

    const newBook = {
        bookTitle: bookTitle,
        bookImage: bookImage,
        bookDescription: bookDescription,
        bookAuthor: bookAuthor,
        bookPublisher: bookPublisher,
        bookIsbn: bookIsbn,
        mood: mood,
        genre: genre,
        rating: rating,
    };

    axios
        .post("http://localhost:5005/books", newBook)
        .then((response) =>{
            console.log(response);
            addBookToMyBooks(newBook);
            navigate("/profile")
        })
        .catch((error) =>{
            console.log("error", error)
        })
}

return(
    <div>
        <form onSubmit={handleFormSubmit}>
            <label>Book Title</label>
            <input
                type="text" 
                name = "book title"
                value={bookTitle}
                onChange={handleBookTitle}
            />
            <label>Book Description</label>
            <textarea
                name = "book description"
                value={bookDescription}
                onChange={handleBookDescription}
            />
            <label>Book Image</label>
            <input
                type="text" 
                name = "book image"
                value={bookImage}
                onChange={handleBookImage}
            />
            <label>Author</label>
            <input
                type="text" 
                name = "author"
                value={bookAuthor}
                onChange={handleBookAuthor}
            />
            <label>Publisher</label>
            <input
                type="text" 
                name = "publisher"
                value={bookPublisher}
                onChange={handleBookPublisher}
            />
            <label>Book ISBN</label>
            <input
                type="number"
                name = "book isbn"
                value={bookIsbn}
                onChange={handleBookIsbn}
            />
            <label>Mood</label>
            <select name = "mood" value={mood} onChange={handleMood}>
            <option value="">Select Mood</option>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Excited">Excited</option>
                <option value="Adventurous">Adventurous</option>
                <option value="Mysterious">Mysterious</option>
                <option value="Romantic">Romantic</option>
                <option value="Inspirational">Inspirational</option>
                <option value="Thrilled">Thrilled</option>
                <option value="Reflective">Reflective</option>
                <option value="Nostalgic">Nostalgic</option>
                <option value="Humorous">Humorous</option>
                <option value="Motivated">Motivated</option>
            </select>
            <label>Genre</label>
            <select name = "genre" value={genre} onChange={handleGenre}>
                <option value="">Select Genre</option>
                <option value="Fiction">Fiction</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="Science-Fiction">Science-Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Historical-Fiction">Historical-Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Biography">Biography</option>
                <option value="Self-Help">Self-Help</option>
                <option value="Horror">Horror</option>
                <option value="Crime">Crime</option>
                <option value="Humor">Humor</option>
            </select>
            <label>Rating</label>
            <input
                type="number" 
                name = "rating"
                value={rating}
                onChange={handleRating}
            />

            <button type="submit">Add Book</button>
        </form>
    </div>
)

}

export default AddBooksForm