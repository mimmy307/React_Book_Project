import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import {Routes, Route} from "react-router-dom"
import BookDetails from './pages/BookDetails'
import Genre from './pages/Genre'
import { useState } from 'react'
import Profile from './pages/Profile'


function App() {
const [readingList, setReadingList] = useState([]);
const addToReadingList = (book) =>{
  const bookIds = readingList.map(item => item.id);
  if (!bookIds.includes(book.id)) {
    setReadingList([...readingList, book]);
  } else {
    console.log("Book already exists in the reading list.");
  }
};
  

  return (
    <div className='app'>
    <Navbar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/book/:booksId" element={<BookDetails  readingList={readingList} addToReadingList={addToReadingList}/>} />
    <Route path="/books/:genre" element={<Genre />} />
    <Route path="/profile" element={<Profile readingList={readingList} />} />
    </Routes>
    </div>
  )
}

export default App
