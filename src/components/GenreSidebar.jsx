import { NavLink } from "react-router-dom"
import "../components/GenreSidebar.css"


const genres = [
    {
        alt: "Fiction",
        title: "Fiction"
    },
    {
        alt: "Mystery",
        title: "Mystery"
    },
    {
        alt: "Romance",
        title: "Romance"
    },
    {
        alt: "Science-Fiction",
        title: "Science Fiction"
    },
    {
        alt: "Fantasy",
        title: "Fantasy"
    },
    {
        alt: "Historical-Fiction",
        title: "Historical Fiction"
    },
    {
        alt: "Non-Fiction",
        title: "Non-Fiction"
    },
    {
        alt: "Biography",
        title: "Biography"
    },
    {
        alt: "Self-Help",
        title: "Self-Help"
    },
    {
        alt: "Horror",
        title: "Horror"
    },
    {
        alt: "Crime",
        title: "Crime"
    },
    {
        alt: "Humor",
        title: "Humor"
    },

]
function GenreSidebar(){

    return(


        <div className="sidebar-main">
            {genres.map((genre)=>{
                return(
                <div key= {genre.title} className="genre-link">
                    <NavLink to={`/books/${genre.alt}`} activeClassName="active">
                        <p>{genre.title}</p>
                    </NavLink>
                </div>
                
            )})}
        </div>

    )

}

export default GenreSidebar