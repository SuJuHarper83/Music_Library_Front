import { useState } from "react";
import "./SearchBar.css";
// import Modal from "../Modal/Modal";

const SearchBar = (props) => {
  const [search, SetSearch] = useState();
  // const[modalOpen, setModalOpen] = useState(false)

  return (
    <div className="search-bar">
      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => SetSearch(event.target.value)}
        />
        <button className="search-btn" onClick={() => SetSearch()}>
          Filter
        </button>
      </div>
      <table>
        <tbody className="search-table">
          {props.entry
            .filter((song) => {
              if (
                song.title.toLowerCase().includes(search.toLowerCase()) ||
                song.artist.toLowerCase().includes(search.toLowerCase()) ||
                song.album.toLowerCase().includes(search.toLowerCase()) ||
                song.release_date.toLowerCase().includes(search.toLowerCase()) ||
                song.genre.toLowerCase().includes(search.toLowerCase())
              ) 
                return song;
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
              );
            })}
          ;
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;
