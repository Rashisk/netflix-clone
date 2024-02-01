import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../utils/moviesSlice";
// Hooks are normal Javascript functions

// We can create custom hooks as well along with some built in hooks like useState, useEffect etc.

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();

  const movieDetails = useSelector(store => store.movies.movieDetails);
  const getMovieImage = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/images`,
      API_OPTIONS
    );
    const json = await data.json();
 //   const filterMovieImage = json.backdrops.f
console.log(json.backdrops.length);
if(json.backdrops.length !== 0){
   dispatch(addMovieDetails(json.backdrops));
}
else{
  dispatch(addMovieDetails(json.posters));
}
    // setMovieImage(movieImage);
    console.log(json.backdrops);
  //  dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    /*
     the api is being called 2 times because of strict mode which happens only in development mode
    // To check if any uncertainity occurs in the app
    // in production mode - it will be called only once
    */
    if(!movieDetails) getMovieImage();
    // once you get the list , you need to add the movies in the store - so you dispatch the action and call an add method
  }, []);

  return{
    movieDetails,
  }
};

export default useMovieDetails;
