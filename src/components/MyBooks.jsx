import { Link } from "react-router-dom"

function MyBooks({myBooks}){
    const filteredBooks = myBooks.filter((book)=>{
        return book.id > 114;
    })

    return(
        <div>
            <h2>My books</h2>
            <div>
                {filteredBooks.map((book)=>(
                    <div key={book.id}>
                        <img src={book.bookImage} alt={book.bookTitle}/>
                    </div>
                ))}

                {console.log(filteredBooks)}
            </div>
            
            <Link to="/newbook"><button>Add Books</button></Link>

        </div>
    )

}

export default MyBooks