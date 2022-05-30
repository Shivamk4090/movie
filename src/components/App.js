import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.movie.list);
  const favourite = useSelector((state) => state.movie.favourite);

  const favTab = useSelector((state) => state.movie.favTab);

  const movie = favTab ? favourite : list;

  const isMovieFav = (movie) => {
    return favourite.indexOf(movie) === -1 ? false : true;
  };

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div
            className="tab"
            onClick={() => dispatch({ type: "SHOW_FAV_TAB", payload: false })}
          >
            Movies
          </div>
          <div
            className="tab"
            onClick={() => dispatch({ type: "SHOW_FAV_TAB", payload: true })}
          >
            Favourites
          </div>
        </div>
        <div className="list">
          {movie.map((movie, index) => (
            <MovieCard
              movie={movie}
              key={index}
              isMovieFav={isMovieFav(movie)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
