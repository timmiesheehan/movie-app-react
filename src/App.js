import './App.css';
import Movie from './components/Movie'
import Search from './components/Search'
import React, { useEffect, useState } from 'react'

const POPULAR_MOVIES = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIE_DB_API}`;


function App() {

  //const movies = ["1", "2", "3"];
  //console.log(process.env.REACT_APP_MOVIE_DB_API)
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, [])

  const getMovies = async () => {
    const moviesResp = await fetch(POPULAR_MOVIES);
    const moviesJson = await moviesResp.json();
    setMovies(moviesJson.results);
  }

  return (
    <>
      <Search setMovies={setMovies} />
      <div className="movies">

        {movies.map((movie) => (

          <Movie key={movie.id} {...movie} />

        ))}
      </div>
    </>
  );
}

export default App;
