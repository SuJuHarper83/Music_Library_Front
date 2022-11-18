import { useState } from "react";
import './SearchBar.css';

const SearchBar = (props) => {

    const [song, allSongs] = useState("");
    const [result, setResults] = useState("")

    // Rework this with a map function
    function handleSearch(event) { 
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = allSongs.filter((data) => {
        return data.title.search(value) !== -1;
        });
        setResults(result);
        props.songSearchProperty(result)
        }

    return (
        <>
        <div className="App">
            <label>Search:</label>
            <input type="text" onChange={(event) => handleSearch(event)} />
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        <div className="Search Results">
           <table>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
            </table> 
        </div>
        </>
    );

}

export default SearchBar