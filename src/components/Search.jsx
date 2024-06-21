import { useState } from "react";
import "../components/search.css"

function Search ({searchHandler}){
    const [string, setString] = useState("")

    const handleSearch = (e) =>{
        setString(e.target.value);
        searchHandler(e.target.value)
    };

    return(
        <div className="search-container">
        <input
            type="text"
            value={string}
            onChange={handleSearch}
            placeholder="Search for a book"
            className="search-input"
        />
    </div>
    )
}

export default Search