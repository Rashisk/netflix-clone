import React from "react";
import { useSelector } from "react-redux";
import MovieLists from "./MovieLists";

const GptMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector(store => store.gpt);
 if(!movieNames) return null;
  return <div className="p-4 mt-[5%] bg-black bg-opacity-90">
    <div>

   {movieNames.map((movieName, index) => (
          <MovieLists
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
    </div>
  </div>;
};

export default GptMovieSuggestions;
