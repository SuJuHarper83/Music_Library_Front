import { useState } from "react";
import './SearchBar.css';
// import Modal from "../Modal/Modal";

const SearchBar = (props) => {

    const[search, SetSearch] = useState()
    // const[modalOpen, setModalOpen] = useState(false)

    return (
        <div className="search-bar">
        <div>
           <input type="text" value={search} onChange={(event) => SetSearch(event.target.value)}/>
           <button className="search-btn" onClick={() => SetSearch()}>Filter</button>
           </div>
                {/* <tbody>
                        <tr className="search-head">
                            <th className="search-th">Title</th>
                            <th className="search-th">Artist</th>
                            <th className="search-th">Album</th>
                            <th className="search-th">Release Date</th>
                            <th className="search-th">Genre</th>
                            <th className="search-th"></th>
                        </tr>
                </tbody> */}
            <table>
                <tbody className="search-table">
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
                            <table>
                                <tr key={index}>
                                <td className="search-td">{song.title}</td>
                                <td className="search-td">{song.artist}</td>
                                <td className="search-td">{song.album}</td>
                                <td className="search-td">{song.release_date}</td>
                                <td className="search-td">{song.genre}</td>
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