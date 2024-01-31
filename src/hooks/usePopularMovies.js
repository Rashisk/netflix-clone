import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector} from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
// Hooks are normal Javascript functions

// We can create custom hooks as well along with some built in hooks like useState, useEffect etc.

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(store => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    /*
  the api is being called 2 times because of strict mode which happens only in development mode
    To check if any uncertainity occurs in the app
    in production mode - it will be called only once
    */
   /**
    * In computing, memoization or memoisation is an optimization technique used 
    * primarily to speed up computer programs by storing the results of expensive
    *  function calls to pure functions and returning the cached result when 
    * the same inputs occur again.
    */
    if(!popularMovies ) getPopularMovies();
    // once you get the list , you need to add the movies in the store - so you dispatch the action and call an add method
  }, []);
};

export default usePopularMovies;
