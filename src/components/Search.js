
const SEARCH_MOVIES = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API}&query=`;

const Search = ({ setMovies }) => {

    const handleonChange = (e) => {

        e.target.value && searchMovies(e.target.value);

    }

    const searchMovies = async searchTerm => {
        const moviesResp = await fetch(SEARCH_MOVIES + searchTerm);
        const moviesJson = await moviesResp.json();

        setMovies(moviesJson.results);
    }
    return (
        <header>
            <input type="text" placeholder="Search" onChange={handleonChange} />
        </header>
    )

}


export default Search
