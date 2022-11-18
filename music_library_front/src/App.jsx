import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddSongForm from './Components/AddSong/AddSong';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';


function App() {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        SearchSong();
    }, []);
    
    async function SearchSong(){
            
        const response = await axios.get('http://127.0.0.1:8000/api/music/');
        console.log(response.data)
        setSongs(response.data)
    }

    useEffect (() => {
        GetAllSongs();
    }, []);
      // [] allows for running only once

    async function GetAllSongs(){
        
        const response = await axios.get('http://127.0.0.1:8000/api/music/');
        console.log(response.data)
        setSongs(response.data)
        } 


    useEffect (() => {
        DeleteSong();
    }, []);
        
    async function DeleteSong(id){
        const response = await axios.delete('http://127.0.0.1:8000/api/music/');
        console.log(response.data);

        const songs = this.state.songs.filter(item => item.id !== id);
        this.setSongs({songs});
        } 

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
            <div>
            <h3 style={{'margin': '1em'}}>Music 
            <small className='text-muted'>Library</small></h3>
                <div>
                <SearchBar songSearchProperty = {SearchSong} />
                <div className='border-box'>
                <DisplayMusic parentEntries = {songs} />
                </div>
                <AddSongForm addNewSongProperty = {AddSong} />
                </div>
            </div>
        </div>
          );
    }


export default App;