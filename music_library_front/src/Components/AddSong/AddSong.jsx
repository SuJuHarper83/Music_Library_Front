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


    handleSubmit = event => {
    event.preventDefault();
    let newSong = {
        title: title,
        artist: artist,
        album: album,
        release_date: release_date,
        genre: genre
        };
    }
    console.log(newSong)
    props.addNewSongProperty(newSong)

    async function addSong(){
    const response = await axios.post('http://127.0.0.1:8000/api/music_backend/');
    console.log(response.data)
    addSong(response.data)
    }

    return ( 
        <form onSubmit={handleSubmit} className="form-grid">
            <div className='form-group'>
                <label>Weight</label>                                          
                <input type="number" className="form-control" value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))} />
            </div>
            <div className='form-group'>
                <label>Date</label>
                <input type="date" className="form-control" value={date} onChange={(event) => setDate(event.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" style={{'margin-top': '1em'}}>Add</button>
        </form>
    );

}

export default AddSongForm;