
const MOVIE_IMAGES = `https://image.tmdb.org/t/p/w1280/`;

const Movie = ({ title, poster_path, overview, vote_average }) => {
    return (
        <div className="movie">
            <img src={MOVIE_IMAGES + poster_path} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h4>Overview:</h4>
                <p>
                    {overview}
                </p>
            </div>
        </div>
    )
}

export default Movie
