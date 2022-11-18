import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

    const [songs, setSongs] = useState([]);

    useEffect (() => {
        GetAllSongs();
    }, []);
      // [] allows for running only once

    async function GetAllSongs(){
        
            const response = await axios.get('http://127.0.0.1:8000/api/music_backend/');
            console.log(response.data)
            setSongs(response.data)
        } 

    useEffect (() => {
        DeleteSong();
    }, []);
        
    async function DeleteSong(){
        const response = await axios.delete('http://127.0.0.1:8000/api/music_backend/');
        console.log(response.data)
        setSongs(response.data)
        } 

    useEffect (() => {
        UpdateSong();
    }, []);
          
    async function UpdateSong(){
        const response = await axios.put('http://127.0.0.1:8000/api/music_backend/');
        console.log(response.data)
        setSongs(response.data)
    }
     

    

  return (

  )
}


export default App;