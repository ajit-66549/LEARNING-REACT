import { use } from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setsearchQuery] = useState("");

  const movies = [
    { id: 1, title: "The Notebook", release_date: 2004 },
    { id: 2, title: "La La Land", release_date: 2016 },
    { id: 3, title: "A Walk to Remember", release_date: 2002 },
  ];

  const handleSearch = (e) => {
    e.preventDefault(); //prevents default behavior like refreshing the page
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          className="movie-input"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
