import { useEffect, useState } from "react";
import axios from "axios";

function BestSeller(){
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchData = async ()=>{
            try{
                const response = await axios.get("http://localhost:5005/books");
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
                        <img src={book.bookImage} alt={book.bookTitle}/>
                    </div>
                    )}

                 })}

        </div>
    )

}

export default BestSeller