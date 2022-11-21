import React, { useState } from 'react';
import './AddSong.css';

const AddSongForm = (props) => {

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [release_date, setReleaseDate] = useState("");
    const [genre, setGenre] = useState("");
    
    
    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
            };
            console.log(newSong)
            props.addNewSongProperty(newSong)
            }

    return ( 
        <form onSubmit={handleSubmit} className="add-songs-table">
            <div className ="form-group">
                <td className='songs-td'>
                <label>Title  </label>                                          
                <input type="text" className="form-control" value={title} onChange={(event) => setTitle(event.target.value)} /></td>
                <td className='songs-td'>
                <label>Artist  </label>
                <input type="text" className="form-control" value={artist} onChange={(event) => setArtist(event.target.value)}/></td>
                <td className='songs-td'>
                <label>Album  </label>
                <input type="text" className="form-control" value={album} onChange={(event) => setAlbum(event.target.value)}/></td>
                <td className='songs-td'>
                <label>Release Date  </label>
                <input type="date" className="form-control" value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/></td>
                <td className='songs-td'>
                <label>Genre  </label>
                <input type="text" className="form-control" value={genre} onChange={(event) => setGenre(event.target.value)}/></td>
                <td className='songs-td'>
                <span><button type="submit" className="add-song-btn">Add</button></span>
                </td>
            </div>
        </form>
    );
    
}

export default AddSongForm;