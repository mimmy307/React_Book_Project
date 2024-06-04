import BestSeller from "../components/BestSeller"
import GenreCard from "../components/GenreCard"
import RecommendationGenerator from "../components/RecommendationGenerator"

function HomePage(){

    return(
        <div>
            <div>
                <img src="" alt="header image"/>
                <h1>Website Name</h1>
                <p>Slogan</p>
                <p>short description</p>
            </div>
            <BestSeller />
            <GenreCard />
            <RecommendationGenerator />


        </div>
    )

}

export default HomePage