import { useState } from "react";

function ReadingList ({readingList}){
    const [readingStatus, setReadingStatus] = useState("");

    const handleReadingStatus = (status) =>{
        setReadingStatus(status)

    }

return(
    <div>
            <h2>Reading List</h2>
           
                {readingList.map((book) => (
                    <div key={book.id}>
                        <img src={book.bookImage}/>
                        <div>
                            <button
                                style={{ backgroundColor: readingStatus === 'to read' ? 'blue' : 'gray' }}
                                onClick={() => handleReadingStatus('to read')} >
                                To read
                            </button>
                            <button
                                style={{ backgroundColor: readingStatus === 'currently reading' ? 'blue' : 'gray' }}
                                onClick={() => handleReadingStatus('currently reading')} >
                                currently reading
                            </button>
                            <button
                                style={{ backgroundColor: readingStatus === 'finished' ? 'blue' : 'gray' }}
                                onClick={() => handleReadingStatus('finished')} >
                                finished
                            </button>
                            </div>

                    </div>
                ))}
           
    </div>
    );

}

export default ReadingList