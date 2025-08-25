import MovieCard from "../components/MovieCard";

function Home() {
    const movies = [
        {id: 1, title: "The Notebook", release_date: 2004},
        {id: 2, title: "La La Land", release_date: 2016},
        {id: 3, title: "A Walk to Remember", release_date: 2002},
    ];

    const handleSearch = () => {

    }

    return (<div className="home">
        <form className="search-form" onSubmit={handleSearch}>
            <input type="text" placeholder="Search for movies..." className="movie-input" />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>)
}

export default Home