import { useState } from "react";
import './SearchBar.css';
import Modal from "../Modal/Modal";

const SearchBar = (props) => {

    const[search, SetSearch] = useState()
    const[modalOpen, setModalOpen] = useState(false)

    return (
        <>
        <input type="text" value={search} onChange={(event) => SetSearch(event.target.value)}/>
        <div className="Search Results">
        <button onClick={() => setModalOpen(true)}>Submit</button>
        {modalOpen && <Modal setModalOpen = {setModalOpen}/>}
           <table>
                {/* <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </tbody> */}
                <tbody>
                    {props.entry.filter((song) => {
                     if (search === ""){
                        return song;
                        }
                    else if (song.title.includes(search) ||
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
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.genre}</td>
                                </tr>
                            </table>
                            </>
                        );
                    })};
                </tbody>
            </table>
            </div> 
        </>
    );
}

export default SearchBar;