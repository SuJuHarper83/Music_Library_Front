import { useState } from "react";
import './SearchBar.css';

const SearchBar = (props) => {
    const[search, SetSearch] = useState()

    // Rework this with a map function
    // function handleSearch(event) { 
    //     let value = event.target.value.toLowerCase();
    //     let result = [];
    //     console.log(value);
    //     result = allSongs.filter((data) => {
    //     return data.title.search(value) !== -1;
    //     });
    //     setResults(result);
    //     props.songSearchProperty(result)
    //     }

    return (
        <>
        <input type="text" value={search} onChange={(event) => SetSearch(event.target.value)}/>
        <span>🔍</span>
        <div className="App"></div>
        <div className="Search Results">
           <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </tbody>
                <tbody>
                    {entry.filter((entry) => {
                     if (search === ""){
                        return entry;
                     } 
                    else if (entry.title.includes(search) ||
                    entry.artist.includes(search) ||
                    entry.album.includes(search) ||
                    entry.release_date.includes (search) ||
                    entry.genre.includes(search))
                    })};
                    {props.parentEntries.map((entry, index) => {
                        return (
                            <tr>
                                <td>{entry.title}</td>
                                <td>{entry.artist}</td>
                                <td>{entry.album}</td>
                                <td>{entry.release_date}</td>
                                <td>{entry.genre}</td>
                            </tr>
                        );
                    })};
                </tbody>
            </table> 
        </div>
        </>
    );
}

export default SearchBar;