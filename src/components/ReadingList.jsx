import { useState } from "react";

function ReadingList ({readingList}){
    const [readingStatuses, setReadingStatuses] = useState({});

    const handleReadingStatus = (bookId, status) =>{
        setReadingStatuses(prevStatuses => ({
            ...prevStatuses,
            [bookId]: status
        }));
    }

    return(
        <div>
            <h2>Reading List</h2>
            {readingList.map((book) => (
                <div key={book.id}>
                    <img src={book.bookImage} alt={book.bookTitle}/>
                    <div>
                        <button
                            style={{ backgroundColor: readingStatuses[book.id] === 'to read' ? 'blue' : 'gray' }}
                            onClick={() => handleReadingStatus(book.id, 'to read')} >
                            To read
                        </button>
                        <button
                            style={{ backgroundColor: readingStatuses[book.id] === 'currently reading' ? 'blue' : 'gray' }}
                            onClick={() => handleReadingStatus(book.id, 'currently reading')} >
                            Currently reading
                        </button>
                        <button
                            style={{ backgroundColor: readingStatuses[book.id] === 'finished' ? 'blue' : 'gray' }}
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