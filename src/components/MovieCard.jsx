import React from "react";
import { useDispatch } from "react-redux";

export default function MovieCard(props) {
  const dispatch = useDispatch();

  return (
    <div className="movie-card">
      <div className="left">
        <img src={props.movie.Poster} alt="movie-poster" />
      </div>
      <div className="right">
        <div className="title">{props.movie.Title}</div>
        <div className="plot">{props.movie.Plot}</div>
        <div className="footer">
          <div className="rating">{props.movie.imdbRating}</div>
          {props.isMovieFav ? (
            <button
              className="unfavourite-btn"
              onClick={() =>
                dispatch({ type: "UNFAV_MOVIE", payload: props.movie })
              }
            >
              Unfavourite
            </button>
          ) : (
            <button
              className="favourite-btn"
              onClick={() =>
                dispatch({ type: "FAV_MOVIE", payload: props.movie })
              }
            >
              Favourite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
