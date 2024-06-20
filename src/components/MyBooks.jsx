import { Link } from "react-router-dom"

function MyBooks({myBooks}){
    
    return(
        <div>
            <h2>My books</h2>
            <div>
                {myBooks.map((book)=>(
                    <div key={book.id}>
                        <img src={book.bookImage} alt={book.bookTitle}/>
                    </div>
                ))}

            </div>
            
            <Link to="/newbook"><button>Add Books</button></Link>

        </div>
    )

}

export default MyBooks