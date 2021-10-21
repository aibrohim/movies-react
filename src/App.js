import { useState } from "react";
import Filter from "./components/filter/filter";
import Header from "./components/header/header";
import MovieCard from "./components/movie-card/movie-card";
import allMovies from "./normalized-movies";

function App() {
  const [movies, setMovies] = useState(allMovies);

  return (
    <>
      <div>
        <Header />
        <main>
          <div className="container-xl">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="container">
                  <Filter setMovies={setMovies} />
                  <section className="mb-4">
                    <h2>Bookmarked movies</h2>
                    <ul className="bookmarked-movies list-group" />
                  </section>
                </div>
              </div>
              <section className="col-md-8">
                <h2 className="h5">Search results</h2>
                <div className="alert alert-info">Use the form on the left to search for a movie</div>
                <ul className="search-results row list-unstyled">
                  {movies.map((movie) => <MovieCard {...movie} />)}
                </ul>
              </section>
            </div>{/* row */}
          </div>{/* container */}
        </main>

      </div>
    </>
  );
}

export default App;
