import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function UpdateSong(){

const [songs, updateSong] = useState([]);

useEffect (() => {
  UpdateSong();
}, []);

    const response = await axios.put('http://127.0.0.1:8000/api/music_backend/');
    console.log(response.data)
    updateSong(response.data)
  }

  export default UpdateSong