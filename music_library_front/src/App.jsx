import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Components'

function App() {


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
