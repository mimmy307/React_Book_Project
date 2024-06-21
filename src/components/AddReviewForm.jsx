import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddReviewForm({onReload}){
    const [fullname, setFullname] = useState("");
    const [reviewText, setReviewText] = useState("");

    const handleFullname = (e) => setFullname(e.target.value);
    const handleReviewText = (e) => setReviewText(e.target.value);

    const [books, setBooks] = useState([]);
    const {booksId} = useParams();

    const [showForm, setShowForm] = useState(false); 

    

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await axios.get(`https://book-app-server-backend.adaptable.app/books/${booksId}`)
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
            .patch(`https://book-app-server-backend.adaptable.app/books/${booksId}`, { reviews: updatedReview })
            .then((response) =>{
                console.log(response)
                onReload();
                setShowForm(false);
                
            })
            .catch((err) =>{
                console.log(err)
            })

    }

//     return(
//         <div className="add-review-form-container">
//             <form className="add-review-form" onSubmit={handleReviewSubmit}>
//                 <label>Full Name</label>
//                 <input type="text" name="Full name"  value={fullname} onChange={handleFullname} />

//                 <label>Your Review</label>
//                 <textarea name="review text" value={reviewText} onChange={handeleReviewText}/>

//                 <button>Add review</button>
               

//             </form>
//         </div>
//     )

// }

// export default AddReviewForm


    return (
        <div className="add-review-form-container">
            {!showForm && (
                <button className="add-review-button" onClick={() => setShowForm(true)}>
                    Add Review
                </button>
            )}

            {showForm && (
                <form className="add-review-form" onSubmit={handleReviewSubmit}>
                    <label>Full Name</label>
                    <input type="text" name="Full name" value={fullname} onChange={handleFullname} />

                    <label>Your Review</label>
                    <textarea name="review text" value={reviewText} onChange={handleReviewText} />

                    <div className="form-buttons">
                        <button type="submit">Add review</button>
                        <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default AddReviewForm;