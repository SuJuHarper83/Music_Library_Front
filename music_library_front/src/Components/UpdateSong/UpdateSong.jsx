import React, { useState, useEffect } from 'react';
import axios from 'axios';

useEffect (() => {
    updateSong();
  }, []);

  async function updateSong(){
    const response = await axios.put('http://127.0.0.1:8000/api/music_backend/');
    console.log(response.data)
    setSongs(response.data)
  }

  export default updateSong