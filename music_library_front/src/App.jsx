import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getAllSongs from './Components/GetSongs/GetSongs';
import updateSong from './Components/UpdateSong/UpdateSong';
import AddSongForm from './Components/AddSong/AddSong';

function App() {

  return (
    <body>
      <div>
        <div>
          <header>
            
          </header>
          <br />
        </div>
      </div>
      <br />
      <div>
        {/* <AddSongForm addNewSongProperty = {newSong} /> */}
      </div>
    </body>
  );
}

      // <button onClick={() => getAllSongs()}>Get All Songs</button>
      // <button onClick={() => updateSong()}>Update Song</button>

export default App;
