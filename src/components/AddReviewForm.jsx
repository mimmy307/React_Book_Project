import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddReviewForm({onReload}){
    const [fullname, setFullname] = useState("");
    const [reviewText, setReviewText] = useState("");

    const handleFullname = (e) => setFullname(e.target.value);
    const handeleReviewText = (e) => setReviewText(e.target.value);

    const [books, setBooks] = useState([]);
    const {booksId} = useParams();

    

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await axios.get(`http://localhost:5005/books/${booksId}`)
                setBooks(response.data)
    
            }catch(err){
                console.log(err)
            }
        };
        fetchData()
    }, [booksId])

    
    function handleReviewSubmit(e){
        e.preventDefault();


        const newReview = {
            fullname: fullname,
            text: reviewText
        };

       const updatedReview = [...books.reviews, newReview]

       axios
            .patch(`http://localhost:5005/books/${booksId}`, { reviews: updatedReview })
            .then((response) =>{
                console.log(response)
                onReload();
                
            })
            .catch((err) =>{
                console.log(err)
            })

    }

    return(
        <div>
            <form onSubmit={handleReviewSubmit}>
                <label>Full Name</label>
                <input type="text" name="Full name"  value={fullname} onChange={handleFullname} />

                <label>Your Review</label>
                <textarea name="review text" value={reviewText} onChange={handeleReviewText}/>

                <button>Add review</button>
               

            </form>
        </div>
    )

}

export default AddReviewForm