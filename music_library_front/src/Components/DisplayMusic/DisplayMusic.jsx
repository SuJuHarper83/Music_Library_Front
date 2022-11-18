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
                         {props.parentEntries.map((entry, index) => {
                         return (
                         <tr key={index}>
                              <td>{index +1}</td>
                              <td>{entry.title}</td>
                              <td>{entry.artist}</td>
                              <td>{entry.album}</td>
                              <td>{entry.release_date}</td>
                              <td>{entry.genre}</td>
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
