import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const [songs, setSongs] = useState([]);

  useEffect (() => {
    getAllSongs();
  }, []);
  // [] allows for running only once
  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music_backend/');
    console.log(response.data)
    setSongs(response.data)
  }

  useEffect (() => {
    addSong();
  }, []);

  async function addSong(){
    const response = await axios.post('http://127.0.0.1:8000/api/music_backend/');
    console.log(response.data)
    setSongs(response.data)
  }

  useEffect (() => {
    updateSong();
  }, []);

  async function updateSong(){
    const response = await axios.put('http://127.0.0.1:8000/api/music_backend/');
    console.log(response.data)
    setSongs(response.data)
  }

  useEffect (() => {
    deleteSong();
  }, []);

  async function deleteSong(){
    const response = await axios.delete('http://127.0.0.1:8000/api/music_backend/');
    console.log()
  }
  return (
    <div>

      <button onClick={() => getAllSongs()}>Get All Songs</button>
      <button onClick={() => addSong()}>Add Song</button>
      <button onClick={() => updateSong()}>Update Song</button>
      <button onClick={() => }></button>
    </div>
  );
}

export default App;
