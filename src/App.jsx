import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import {Routes, Route} from "react-router-dom"
import BookDetails from './pages/BookDetails'
import Genre from './pages/Genre'


function App() {
  

  return (
    <div className='app'>
    <Navbar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/book/:booksId" element={<BookDetails />} />
    <Route path="/books/:genre" element={<Genre />} />
    </Routes>
    </div>
  )
}

export default App
