import React from 'react';
import GetAllSongs from '../../App.jsx';
import DeleteSong from '../../App.jsx';
import './DisplayMusic.css';
     
const DisplayMusic = (props) => {
     return (
          <>
          <div className="music-display">
          <div className="get-songs-btn"><button onClick={() => GetAllSongs()}>Get All Songs</button></div>
               <table className='display-table'>
                    <tbody>
                         <tr className="display-head">
                              <th className="display-th">Title</th>
                              <th className="display-th">Artist</th>
                              <th className="display-th">Album</th>
                              <th className="display-th">Release Date</th>
                              <th className="display-th">Genre</th>
                              <th className="display-th"></th>
                         </tr>
                         {props.parentEntries.map((song, index) => {
                         return (
                         <tr key={index}>
                              {/* <td>{index +1}</td> */}
                              <td className="display-td">{song.title}</td>
                              <td className="display-td">{song.artist}</td>
                              <td className="display-td">{song.album}</td>
                              <td className="display-td">{song.release_date}</td>
                              <td className="display-td">{song.genre}</td>
                              <td className="display-td"><button className="delete-btn" onClick={() => DeleteSong()}>Delete Song</button></td>
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
