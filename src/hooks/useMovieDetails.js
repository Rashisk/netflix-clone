import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieImage, addMovieMetaData } from "../utils/moviesSlice";
import { useParams } from "react-router-dom";
// Hooks are normal Javascript functions

// We can create custom hooks as well along with some built in hooks like useState, useEffect etc.

const useMovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
console.log(movieId + "  from usefile");
const getMovieDescription = async () => {
const data = await fetch(
`https://api.themoviedb.org/3/movie/${movieId}`, API_OPTIONS
);
const json = await data.json();
dispatch(addMovieMetaData(json));
console.log(json);
}
  const getMovieImage = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/images`,
      API_OPTIONS
    );
    const json = await data.json();
 //   const filterMovieImage = json.backdrops.f
console.log(json.backdrops.length);
if(json.backdrops.length !== 0){
   dispatch(addMovieImage(json.backdrops));
}
else{
  dispatch(addMovieImage(json.posters));
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
    getMovieImage();
    getMovieDescription();
    // here, we cannot use memoization because we have to 
    // make an api call everytime the moive id is changed
    // once you get the list , you need to add the movies in the store - so you dispatch the action and call an add method
  }, [movieId]);

  
};

export default useMovieDetails;
