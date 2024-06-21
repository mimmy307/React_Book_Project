import { Link } from "react-router-dom"
import fiction from "../assets/images/fiction.png"
import mystery from "../assets/images/mystery.png";
import romance from "../assets/images/romance.png";
import scienceFiction from "../assets/images/science-fiction.png";
import fantasy from "../assets/images/fantasy.png";
import historicalFiction from "../assets/images/historical.png";
import nonFiction from "../assets/images/non-fiction.png";
import biography from "../assets/images/biography.png";
import selfHelp from "../assets/images/self-help.png";
import horror from "../assets/images/horror.png";
import crime from "../assets/images/crime.png";
import humor from "../assets/images/humor.png";
import "../components/GenreCard.css"

const genres = [
    {
        image: fiction,
        alt: "Fiction",
        title: "Fiction"
    },
    {
        image: mystery,
        alt: "Mystery",
        title: "Mystery"
    },
    {
        image: romance,
        alt: "Romance",
        title: "Romance"
    },
    {
        image: scienceFiction,
        alt: "Science-Fiction",
        title: "Science Fiction"
    },
    {
        image: fantasy,
        alt: "Fantasy",
        title: "Fantasy"
    },
    {
        image: historicalFiction,
        alt: "Historical-Fiction",
        title: "Historical Fiction"
    },
    {
        image: nonFiction,
        alt: "Non-Fiction",
        title: "Non-Fiction"
    },
    {
        image: biography,
        alt: "Biography",
        title: "Biography"
    },
    {
        image: selfHelp,
        alt: "Self-Help",
        title: "Self-Help"
    },
    {
        image: horror,
        alt: "Horror",
        title: "Horror"
    },
    {
        image: crime,
        alt: "Crime",
        title: "Crime"
    },
    {
        image: humor,
        alt: "Humor",
        title: "Humor"
    },

]

function GenreCard(){
    return(
        <div className="genre-grid">
            {genres.map((genre)=>{
                return(
                <div key= {genre.title} className="genre-card">
                    <Link to={`/books/${genre.alt}`}>
                        <img src={genre.image} alt={genre.title} className="genre-image"/>
                        <h2 className="genre-title">{genre.title}</h2>
                    </Link>
                </div>
                
            )})}
        </div>

    )
    

}

export default GenreCard



