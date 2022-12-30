import React, { useState } from "react";
import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

//736225b9

const API_URL = 'http://www.omdbapi.com?apikey=736225b9'

const App = () =>{

    const [Movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }


    useEffect(()=>{
        searchMovies('Spiderman');
    },[])
    return(
        <div className="app">
            <h1>Sbu's Movie Site</h1>

            <div className="search">
                <input placeholder="search for movies" 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />

                <img src={SearchIcon}
                alt="search"
                onClick={()=>searchMovies(searchTerm)} 
                />
            </div>
            {
                Movies?.length > 0
                ?(
                    <div className="container">
                        {Movies.map((movie) =>(
                            <MovieCard movie={movie} />
                        ))}
                
            </div>
                ) :(
                    <div className="empty">
                        <h2>No Movies found</h2>
                    </div>

                )
            }
            
        </div>
    );
}

export default App