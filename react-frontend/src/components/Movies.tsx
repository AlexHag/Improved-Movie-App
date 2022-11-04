import React, { useState, useEffect } from "react";

import MovieCard from './MovieCard';

import '../css/movies.css';

interface MovieInformation {
    id : number
    title : string,
    description : string,
    img : string
}

function Movies() {
    const [movieData, setMovieData] = useState<MovieInformation[]>([]);
    const [filteredData, setFilteredData] = useState<MovieInformation[]>([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:5086/api/Movie');
            const movieResults = await response.json();
        setMovieData(movieResults);
        setFilteredData(movieResults)
    };
    getData(); 

    }, []);

    const handleSearch = (event: any) => {
        console.log(event.currentTarget.value)

        let array = [...movieData]
        let input = event.currentTarget.value

        array = array.filter((item) => {
            return item.title.toLowerCase().indexOf(input.toLowerCase()) !== -1;
        })

        setFilteredData(array);
    }

    return (
        <>
        <h1 className="movie-header">Movie Library</h1>

        <input className="movie-search" type="text" placeholder="Search..." onChange={handleSearch} />
        
        {/* <button className="movie-search" onClick={handleSearch}>Search</button> */}

        <div className="all-movies">
            {filteredData.map(p => (
                <MovieCard id={p.id} title={p.title} description={p.description} img={p.img}/>
            ))}
        </div>
        </>
    )
}

export default Movies;