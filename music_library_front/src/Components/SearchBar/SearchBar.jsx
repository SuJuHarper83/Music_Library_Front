import { useState } from "react";
import './SearchBar.css';
// import Modal from "../Modal/Modal";

const SearchBar = (props) => {

    const[search, SetSearch] = useState()
    // const[modalOpen, setModalOpen] = useState(false)

    return (
        <div className="search-bar"><input type="text" value={search} onChange={(event) => SetSearch(event.target.value)}/>
        <button className="search-btn" onClick={() => SetSearch()}>Filter</button>
           <table>
                <tbody>
                    {props.entry.filter((song) => {
                     if (search === ""){
                        return song;
                        }
                    if (song.title.includes(search) ||
                    song.artist.includes(search) ||
                    song.album.includes(search) ||
                    song.release_date.includes (search) ||
                    song.genre.includes(search)){
                        return song;
                    }
                })
                    .map((song, index) => {
                        return (
                            <>
                            <table className="search-table">
                                <tr key={index}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.genre}</td>
                                </tr>
                            </table>
                            </>
                        )
                    })};
                </tbody>
            </table>
            </div> 
    );
}

export default SearchBar;