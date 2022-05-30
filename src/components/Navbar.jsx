import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const [searchText, setSearchText] = useState("");
  const { showResults, result: searchResult } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();

  return (
    <div className="nav">
      <div
        className="search-container"
        onPointerLeave={() => {
          if (showResults) dispatch({ type: "HIDE_SEARCH" });
        }}
        onPointerEnter={() => {
          if (!showResults && searchResult.Poster)
            dispatch({ type: "UNHIDE_SEARCH" });
        }}
      >
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          id="search-btn"
          onClick={() => {
            if (searchText === "") {
              return;
            }
            const url = `https://www.omdbapi.com/?apikey=56a2ffd&t=${searchText}`;

            fetch(url)
              .then((response) => response.json())
              .then((data) => {
                dispatch({
                  type: "SEARCH_MOVIE",
                  payload: data,
                });
              })
              .catch((err) => console.log(err));
          }}
        >
          Search
        </button>
        {showResults && (
          <div className="search-results">
            <div className="search-result">
              <img src={searchResult.Poster} alt="imageHai" />
              <div className="movie-info">
                <span>{searchResult.Title}</span>
                <button
                  onClick={() => {
                    dispatch({
                      type: "ADD_MOVIE_LIST",
                      payload: searchResult,
                    });
                  }}
                >
                  Add To Movie
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
