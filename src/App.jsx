import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import {Routes, Route} from "react-router-dom"
import BookDetails from './pages/BookDetails'
import Genre from './pages/Genre'
import { useState } from 'react'
import Profile from './pages/Profile'
import AllBooks from './pages/AllBooks'
import AboutUs from './pages/AboutUs'



function App() {
const [readingList, setReadingList] = useState([]);
const [myBooks, setMyBooks] = useState([])

const addToReadingList = (book) =>{
  const bookIds = readingList.map(item => item.id);
  if (!bookIds.includes(book.id)) {
    setReadingList([...readingList, book]);
  } else {
    console.log("Book already exists in the reading list.");
  }
};

const addBookToMyBooks = (book) =>{
  setMyBooks([...myBooks, book])
}

  

  return (
    <div className='app'>
    <Navbar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/book/:booksId" element={<BookDetails  readingList={readingList} addToReadingList={addToReadingList}/>} />
    <Route path="/books/:genre" element={<Genre />} />
    <Route path="/profile/*" element={<Profile readingList={readingList} addBookToMyBooks={addBookToMyBooks} />} />
    <Route path="/allbooks" element= {<AllBooks />} />
    <Route path="/aboutus" element= {<AboutUs />} />
    </Routes>
    </div>
  )
}

export default App
