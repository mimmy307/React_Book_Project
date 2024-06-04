import { Link } from "react-router-dom"

const genres = [
    {
        image: "",
        alt: "Fiction",
        title: "Fiction"
    },
    {
        image: "",
        alt: "Mystery",
        title: "Mystery"
    },
    {
        image: "",
        alt: "Romance",
        title: "Romance"
    },
    {
        image: "",
        alt: "Science-Fiction",
        title: "Science Fiction"
    },
    {
        image: "",
        alt: "Fantasy",
        title: "Fantasy"
    },
    {
        image: "",
        alt: "Historical-Fiction",
        title: "Historical Fiction"
    },
    {
        image: "",
        alt: "Non-Fiction",
        title: "Non-Fiction"
    },
    {
        image: "",
        alt: "Biography",
        title: "Biography"
    },
    {
        image: "",
        alt: "Self-Help",
        title: "Self-Help"
    },
    {
        image: "",
        alt: "Horror",
        title: "Horror"
    },
    {
        image: "",
        alt: "Crime",
        title: "Crime"
    },
    {
        image: "",
        alt: "Humor",
        title: "Humor"
    },

]

function GenreCard(){
    return(
        <div>
            {genres.map((genre)=>{
                return(
                <div key= {genre.title}>
                    <Link to={`/books/${genre.alt}`}>
                        <img src={genre.image} alt={genre.title} />
                        <h2>{genre.title}</h2>
                    </Link>
                </div>
                
            )})}
        </div>

    )
    

}

export default GenreCard