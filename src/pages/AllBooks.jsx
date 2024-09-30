import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../pages/AllBooks.css"
import Search from "../components/Search";

function AllBooks(){
    const [books, setBooks] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        const fetchData = async ()=>{
            try{
                const response = await axios.get("https://bookscapes-back-end.onrender.com/books");
                setBooks(response.data)
            }catch (error){
                console.log(error);
            }
        };

        fetchData();
    }, [])

    useEffect(() => {
        const searchedBook = async() =>{
            try{
                const response = await axios.get(`https://bookscapes-back-end.onrender.com/books?q=${query}`)
                setBooks(response.data)
            } catch (err) {
                console.log(err)
            }
        };
            searchedBook();
    }, [query]);


    const searchHandler = (string) =>{
        setQuery(string)
    }



    return(
        <div className="all-books-page">
            <Search searchHandler={searchHandler} />
            <div className="all-book-container">
                {books.map((book) => {
                    return (
                        <div key={book.id} className="book-cards">
                            <Link to={`/book/${book.id}`}>
                                <img src={book.bookImage} alt={book.bookTitle} className="all-books-image" />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default AllBooks