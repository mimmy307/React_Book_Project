import BestSeller from "../components/BestSeller"
import GenreCard from "../components/GenreCard"
import RecommendationGenerator from "../components/RecommendationGenerator"
import "../pages/HomePage.css"


function HomePage(){

    return(
        <div>
            <div className="header-container">
                <h1>BookScape</h1>
                <p>Slogan</p>
                <p>short description</p>
            </div>
            <GenreCard />
            <BestSeller />
            <RecommendationGenerator />
            


        </div>
    )

}

export default HomePage