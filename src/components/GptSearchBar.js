import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults,gptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.languages);
  const searchText = useRef(null);

  const movieList = ["Andaz Apna Apna", "Don", "Hera Pheri", "Apna sapna Money Money"];
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
    // We are returning a promise here. 
  };
const handleSearch = async () => {
  const movieData = movieList.map((movie) => searchMovieTMDB(movie));
  const tmdbResults = await Promise.all(movieData);
  dispatch(
    addGptMovieResults({ movieNames: movieList, movieResults: tmdbResults })
  );
}


  return (
    <div className="pt-[35%] md:pt-[20%] flex justify-center">
      <form
        className=" w-3/4 bg-black grid grid-cols-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-4"
          type="text"
          placeholder={lang[langKey].placeholder}
        />
        <button onClick={handleSearch} className="col-span-2 m-4 py-2 px-4 rounded-lg bg-red-700 text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
