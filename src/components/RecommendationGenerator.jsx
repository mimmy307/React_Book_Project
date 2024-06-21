import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom";
import "../components/RecommendationsGenerator.css"

function RecommendationGenerator(){
const [selectedMood, setSelectedMood] = useState("");
const [book, setBook] = useState(null);

const fetchBooksByMood = async () => {
    try{ 
        const response = await axios.get (`https://book-app-server-backend.adaptable.app/books?mood=${selectedMood}`);
        const books = response.data;
        const randomIndex = Math.floor(Math.random() * books.length);
        const randomBook = books[randomIndex];
        setBook(randomBook)
    }catch(err){
        console.log('error mood books', err)

    }
}

const handleMoodChange = (e) => {
    setSelectedMood(e.target.value)
}
 return(
    <div className="recommendation-generator">
            <h2>Recommendation Generator</h2>
            <div className="generator-controls">
            <select value={selectedMood} onChange={handleMoodChange}>
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
            <button onClick={fetchBooksByMood}>Generate Random Book</button>
            </div>
            {book && (
                <div className="recommendation-book-container">
                    <Link to={`/book/${book.id}`}>
                        <img src={book.bookImage} alt={book.bookTitle} />
                    </Link>
                </div>
            )}
        </div>
    );



}

export default RecommendationGenerator