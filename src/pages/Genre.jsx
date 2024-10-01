import { useState, useEffect} from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import GenreSidebar from "../components/GenreSidebar"
import "../pages/Genre.css"

function Genre(){
    const [books, setBooks] = useState([])
    const {genre} = useParams()
    const [sidebarVisible, setSidebarVisible] = useState(true)

    const isMobile = () => window.innerWidth <= 768;

    useEffect(() => {
        const fetchData = async() =>{
            try{
                const response = await axios.get(`https://bookscapes-back-end.onrender.com/books?genre=${genre}`);
                setBooks(response.data);
                if (isMobile()) {
                    setSidebarVisible(false); 
                } else {
                    setSidebarVisible(true); 
                }
            }catch(err){
                console.log("genre", err)
            }
        }

        fetchData();
    },[genre])

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
 
    return(
        <div className="genre-container" > 
            { sidebarVisible && <GenreSidebar />}
            <div className="genre-content">
                <button className="toggle-sidebar" onClick={toggleSidebar}>
                    {sidebarVisible ? "Hide Genres" : "Show Genres"}
                </button>
                <h2 >{genre}</h2>
                <hr className="genre-divider" />
                <div className="genre-content-grid">
                    {books.map((book) =>{
                            return (
                            <div key= {book.id} className="genre-content-card">
                                <Link to={`/book/${book.id}`}>
                                <img src={book.bookImage} alt={book.bookTitle} className="genre-book-image"/>
                                </Link>
                            </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )

}

export default Genre