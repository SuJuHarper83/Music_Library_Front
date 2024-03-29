import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddSongForm from './Components/AddSong/AddSong';
import SearchBar from './Components/SearchBar/SearchBar';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


function App() {

    const [songs, setSongs] = useState([]);

    useEffect (() => {
        GetAllSongs();
    }, []);
      // [] allows for running only once

    async function GetAllSongs(){
        
        const response = await axios.get('http://127.0.0.1:8000/api/music/');
        console.log(response.data)
        setSongs(response.data)
        } 
        
    async function DeleteSong(id){
        const response = await axios.delete(`http://127.0.0.1:8000/api/music/${id}/`);
        console.log(response.data)
        GetAllSongs()
    }

    // async function UpdateSong(){
    //     const response = await axios.put('http://127.0.0.1:8000/api/music/');
    //     console.log(response.data)
    //     setSongs(response.data)
    // }

    async function AddSong(newSong){
        const response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
        console.log(response.data)
        GetAllSongs()
        } 
    

    return ( 
        <body>
        <div className='container-fluid'>
            <div>
                <header>
                    <NavBar />
                </header>
                <div>
                <SearchBar entry = {songs} />
                </div>
                <div>
                <DisplayMusic DeleteSong={DeleteSong} parentEntries = {songs} />
                </div>
                <div>
                <AddSongForm addNewSongProperty = {AddSong} />
                </div>
            </div>
        </div>
        </body>
          );
    }


export default App;