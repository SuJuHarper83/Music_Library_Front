import React from "react";
import "./DisplayMusic.css";

const DisplayMusic = (props) => {
  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => SetSearch(event.target.value)}
        />
      </div>
      <div className="music-display">
        <table className="display-table">
          <tbody>
            <tr className="display-head">
              <th className="display-th">ID</th>
              <th className="display-th">Title</th>
              <th className="display-th">Artist</th>
              <th className="display-th">Album</th>
              <th className="display-th">Release Date</th>
              <th className="display-th">Genre</th>
              <th className="display-th"></th>
            </tr>
            {props.parentEntries
              .filter((song) => {
                if (
                  song.title.toLowerCase().includes(search.toLowerCase()) ||
                  song.artist.toLowerCase().includes(search.toLowerCase()) ||
                  song.album.toLowerCase().includes(search.toLowerCase()) ||
                  song.release_date
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  song.genre.toLowerCase().includes(search.toLowerCase())
                )
                  return song;
              })
              .map((song) => {
                return (
                  <tr key={song.id}>
                    <td className="display-td">{song.id}</td>
                    <td className="display-td">{song.artist}</td>
                    <td className="display-td">{song.title}</td>
                    <td className="display-td">{song.album}</td>
                    <td className="display-td">{song.release_date}</td>
                    <td className="display-td">{song.genre}</td>
                      <button
                        className="delete-btn"
                        onClick={() => props.DeleteSong(song.id)}
                      >
                        Delete Song
                      </button>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DisplayMusic;
