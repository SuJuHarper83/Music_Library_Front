import React, { useState, useEffect } from 'react';
import axios from 'axios';

const [songs, deleteSong] = useState([]);

useEffect (() => {
    deleteSong();
  }, []);

    const response = await axios.delete('http://127.0.0.1:8000/api/music_backend/');
    console.log(response.data)
    deleteSong(response.data)
  }

  export default deleteSong