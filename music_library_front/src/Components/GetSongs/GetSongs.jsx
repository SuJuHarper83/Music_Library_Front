import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

export default getAllSongs