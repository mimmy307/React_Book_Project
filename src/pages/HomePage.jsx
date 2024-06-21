import BestSeller from "../components/BestSeller"
import GenreCard from "../components/GenreCard"
import RecommendationGenerator from "../components/RecommendationGenerator"
import "../pages/HomePage.css"
import logo from "../assets/images/Logo1-removebg.png"


function HomePage(){

    return(
        <div>
            <div className="header-container">
                <img src={logo} alt="logo"/>
                <h1 className="header-title">BookScape</h1>
                <p className="header-description">Welcome to BookScape, where every book is a new adventure waiting to be discovered. Start your reading journey with us!</p>
            </div>
            <BestSeller />
            <GenreCard />
            <RecommendationGenerator />
            


        </div>
    )

}

export default HomePage