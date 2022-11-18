import React from 'react';
     
const DisplayMusic = (props) => {
     return ( 
          <table className="table">
               <thead>
               <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
               </tr>
               </thead>
               <tbody>
               {props.parentEntries.map((entry, index) => {
                    return (
                    <tr key={index}>
                         <td>{index +1}</td>
                         <td>{entry.title}</td>
                         <td>{entry.artist}</td>
                         <td>{entry.album}</td>
                         <td>{entry.release_date}</td>
                         <td>{entry.genre}</td>
                    </tr>
                    );
               })}
               </tbody>
          </table>
     );
}
    
// //     <div>
// //         <button onClick={() => GetAllSongs()}>Get All Songs</button>
// //         {/* <button onClick={() => UpdateSong()}>Update Song</button> */}
// //         {/* <button onClick={() => DeleteSong()}>Delete Song</button> */}
// //         </div>
     
// //      }
     
export default DisplayMusic;
