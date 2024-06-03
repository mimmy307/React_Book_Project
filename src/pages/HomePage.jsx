import BestSeller from "../components/BestSeller"
import Genre from "../components/Genre"
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
            <Genre />
            <RecommendationGenerator />


        </div>
    )

}

export default HomePage