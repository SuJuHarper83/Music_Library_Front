import React from 'react';
import GetAllSongs from '../../App.jsx';
import DeleteSong from '../../App.jsx';
     
const DisplayMusic = (props) => {
     return (
          <>
          <button onClick={() => GetAllSongs()}>Get All Songs</button>
          <div className="table">
               <table>
                    <tbody>
                         <tr>
                              <th>Title</th>
                              <th>Artist</th>
                              <th>Album</th>
                              <th>Release Date</th>
                              <th>Genre</th>
                         </tr>
                         {props.parentEntries.map((song, index) => {
                         return (
                         <tr key={index}>
                              <td>{index +1}</td>
                              <td>{song.title}</td>
                              <td>{song.artist}</td>
                              <td>{song.album}</td>
                              <td>{song.release_date}</td>
                              <td>{song.genre}</td>
                              {/* <button onClick={() => UpdateSong()}>Update Song</button> */}
                              <td>
                              <button onClick={() => DeleteSong()}>Delete Song</button>
                              </td>
                         </tr>
                         );
                    })}
                    </tbody>
               </table>
          </div>
          </>
     );
}
    
     
export default DisplayMusic;
