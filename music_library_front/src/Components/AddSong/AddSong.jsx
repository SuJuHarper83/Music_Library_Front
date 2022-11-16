// (10 points) As a music enthusiast, I want to be able to add a song to my database by using Axios to make a 
// POST request to the Django REST API

import React, { useState } from 'react';
import axios from 'axios';

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

    async function addSong(){
    const response = await axios.post('http://127.0.0.1:8000/api/music_backend/');
    console.log(response.data)
    addSong(response.data)
    }

    return ( 
        <form onSubmit={handleSubmit} className="form-grid">
            <div className='form-group'>
                <label>Title</label>                                          
                <input type="text" className="form-control" value={title} onChange={(event) => setTitle(event.target.value)} />
                <label>Artist</label>
                <input type="text" className="form-control" value={artist} onChange={(event) => setArtist(event.target.value)}/>
                <label>Album</label>
                <input type="text" className="form-control" value={album} onChange={(event) => setAlbum(event.target.value)}/>
                <label>Release Date</label>
                <input type="date" className="form-control" value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
                <label>Genre</label>
                <input type="text" className="form-control" value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" style={{'margin-top': '1em'}}>Add</button>
        </form>
    );

}

export default AddSongForm;