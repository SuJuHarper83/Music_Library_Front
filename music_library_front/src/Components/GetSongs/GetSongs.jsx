import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function GetAllSongs(){

const [songs, getAllSongs] = useState([]);

useEffect (() => {
    GetAllSongs();
  }, []);
  // [] allows for running only once

    const response = await axios.get('http://127.0.0.1:8000/api/music_backend/');
    console.log(response.data)
    getAllSongs(response.data)
}   

export default GetAllSongs