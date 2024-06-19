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



// import { Link } from "react-router-dom";
// import "./GenreCard.css";

// const genres = [
    // { gradient: "linear-gradient(135deg, #3d52a0, #7091e6)", alt: "Fiction", title: "Fiction" },
    // { gradient: "linear-gradient(135deg, #3d52a0, #7091e6)", alt: "Mystery", title: "Mystery" },
    // { gradient: "linear-gradient(135deg, #3d52a0, #7091e6)", alt: "Romance", title: "Romance" },
    // { gradient: "linear-gradient(135deg, #3d52a0, #7091e6)", alt: "Science-Fiction", title: "Science Fiction" },
    // { gradient: "linear-gradient(135deg, #3d52a0, #7091e6)", alt: "Fantasy", title: "Fantasy" },
    // { gradient: "linear-gradient(135deg, #3d52a0, #7091e6)", alt: "Historical-Fiction", title: "Historical Fiction" },
    // { gradient: "linear-gradient(135deg, #3d52a0, #7091e6)", alt: "Non-Fiction", title: "Non-Fiction" },
    // { gradient: "linear-gradient(135deg, #3d52a0, #7091e6)", alt: "Biography", title: "Biography" },
    // { gradient: "linear-gradient(135deg, #3d52a0, #7091e6)", alt: "Self-Help", title: "Self-Help" },
    // { gradient: "linear-gradient(135deg, #3d52a0, #7091e6)", alt: "Horror", title: "Horror" },
    // { gradient: "linear-gradient(135deg, #3d52a0, #7091e6)", alt: "Crime", title: "Crime" },
    // { gradient: "linear-gradient(135deg, #3d52a0, #7091e6)", alt: "Humor", title: "Humor" },
//     { alt: "Fiction", title: "Fiction" },
//     { alt: "Mystery", title: "Mystery" },
//     { alt: "Romance", title: "Romance" },
//     { alt: "Science-Fiction", title: "Science Fiction" },
//     { alt: "Fantasy", title: "Fantasy" },
//     { alt: "Historical-Fiction", title: "Historical Fiction" },
//     { alt: "Non-Fiction", title: "Non-Fiction" },
//     { alt: "Biography", title: "Biography" },
//     { alt: "Self-Help", title: "Self-Help" },
//     { alt: "Horror", title: "Horror" },
//     { alt: "Crime", title: "Crime" },
//     { alt: "Humor", title: "Humor" },
// ];

// function GenreCard() {
//     return (
//         <div className="genre-grid">
//             {genres.map((genre) => (
//                 <div key={genre.title} className="genre-card" style={{ background: genre.gradient }}>
//                     <Link to={`/books/${genre.alt}`} className="genre-link">
//                         <h2 className="genre-title">{genre.title}</h2>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default GenreCard;