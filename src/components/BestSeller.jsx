import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../components/BestSeller.css"



function BestSeller(){
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchData = async ()=>{
            try{
                const response = await axios.get("https://bookscapes-back-end.onrender.com/books");
                setBooks(response.data)
            }catch (error){
                console.log("bestseller", error);
            }
        };

        fetchData();
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <div className="slick-prev" />,
        nextArrow: <div className="slick-next" />,
      };

    return(
        <div className="slider-container">
        <h2>Bestsellers</h2>
            <Slider {...settings}>
            {books.map((book) =>{
                if (book.bestSeller){
                    return (
                    <div key= {book.id}>
                        <Link to={`/book/${book.id}`}>
                            <img src={book.bookImage} alt={book.bookTitle} className="book-image"/>
                        </Link>
                    </div>
                    )}

                 })}
            </Slider>

        </div>
    )

}

export default BestSeller


