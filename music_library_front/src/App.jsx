import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddSongForm from './Components/AddSong/AddSong';

function App() {

    const [songs, setSongs] = useState([]);
    const [song, allSongs] = useState("");
    const [filterResult, setResults] = useState("")

    useEffect (() => {
        GetAllSongs();
    }, []);
      // [] allows for running only once

    async function GetAllSongs(){
        
        const response = await axios.get('http://127.0.0.1:8000/api/music/');
        console.log(response.data)
        setSongs(response.data)
        } 

    useEffect(() => {
        SearchSong();
    }, []);
    
    async function SearchSong(){
            
        const response = await axios.get('http://127.0.0.1:8000/api/music/');
        console.log(response.data)
        allSongs(response.data)
        setResults(response.data)

    // useEffect (() => {
    //     DeleteSong();
    // }, []);
        
    // async function DeleteSong(){
    //     const response = await axios.delete('http://127.0.0.1:8000/api/music/');
    //     console.log(response.data)
    //     setSongs(response.data)
    //     } 

    // useEffect (() => {
    //     UpdateSong();
    // }, []);
          
    // async function UpdateSong(){
    //     const response = await axios.put('http://127.0.0.1:8000/api/music/');
    //     console.log(response.data)
    //     setSongs(response.data)
    // }

    useEffect (() => {
        AddSong();
    }, []);

    async function AddSong(){
        const response = await axios.get('http://127.0.0.1:8000/api/music/');
        console.log(response.data)
        setSongs(response.data)
        } 
    

    return ( 
        <div className='container-fluid'>
            <div className='row'>
            <h3 style={{'margin': '1em'}}>Music 
            <small className='text-muted'>Library</small></h3>
            <div className='col-md-6'>
                <div className='border-box'>
                <DisplayMusic parentEntries = {songs} />
                <AddSongForm addNewSongProperty = {AddSong} />
                </div>
            </div>
            <div className='col-md-6'>
                <div className='border-box'>
                {/* <EntriesChartTracker parentEntries = {entries}/> */}
            </div>
            </div>
            </div>
        </div>
          );
    }

}

export default App;