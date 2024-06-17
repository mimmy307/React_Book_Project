import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BestSeller(){
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchData = async ()=>{
            try{
                const response = await axios.get("https://book-app-server-backend.adaptable.app/books");
                setBooks(response.data)
            }catch (error){
                console.log("bestseller", error);
            }
        };

        fetchData();
    }, [])

    return(
        <div>
        <h2>Bestsellers</h2>
            {books.map((book) =>{
                if (book.bestSeller){
                    return (
                    <div key= {book.id}>
                        <Link to={`/book/${book.id}`}>
                            <img src={book.bookImage} alt={book.bookTitle}/>
                        </Link>
                    </div>
                    )}

                 })}

        </div>
    )

}

export default BestSeller