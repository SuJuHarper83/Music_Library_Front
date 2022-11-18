import { useState, useEffect } from "react";

const SearchBar = (props) => {

    function handleSearch(event) {
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = allSongs.filter((data) => {
        return data.title.search(value) != -1;
        });
        setResults(result);
        }

    return (
        <div className="App">
        <div style={{ margin: '0 auto', marginTop: '10%' }}>
        <label>Search:</label>
        <input type="text" onChange={(event) =>handleSearch(event)} />
        </div>
        </div>
    );

}
