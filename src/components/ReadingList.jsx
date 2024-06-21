import { useState } from "react";
import "../components/ReadingList.css"

function ReadingList ({readingList}){
    const [readingStatuses, setReadingStatuses] = useState({});

    const handleReadingStatus = (bookId, status) =>{
        setReadingStatuses(prevStatuses => ({
            ...prevStatuses,
            [bookId]: status
        }));
    }

    return(
        <div className="reading-list-container">
            <h2>Reading List</h2>
            {readingList.map((book) => (
                <div className="book-container" key={book.id}>
                    <img className="to-read-book-image" src={book.bookImage} alt={book.bookTitle}/>
                    <div className="book-actions">
                        <button
                            style={{ backgroundColor: readingStatuses[book.id] === 'to read' ? '#3d52a0' : '#8697c4' }}
                            onClick={() => handleReadingStatus(book.id, 'to read')} >
                            To read
                        </button>
                        <button
                            style={{ backgroundColor: readingStatuses[book.id] === 'currently reading' ? '#3d52a0' : '#8697c4' }}
                            onClick={() => handleReadingStatus(book.id, 'currently reading')} >
                            Currently reading
                        </button>
                        <button
                            style={{ backgroundColor: readingStatuses[book.id] === 'finished' ? '#3d52a0' : '#8697c4' }}
                            onClick={() => handleReadingStatus(book.id, 'finished')} >
                            Finished
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ReadingList;