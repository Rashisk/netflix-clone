import React from "react";
import Header from "./Header";
import useMovieDetails from "../hooks/useMovieDetails";
import { IMG_CDN_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const MovieDescriptionPage = () => {
  const movieImage = useSelector((store) => store.movies?.movieImage);
  const movieMetaData = useSelector((store) => store.movies?.movieMetaData);
  useMovieDetails();

  return (
    <div>
      <Header />
      <div className="fixed -z-10 bg-black w-screen h-screen"></div>
      <div className="pt-[35%] md:pt-[15%] flex m-6 p-10">
        <div className="w-2/5 px-5">
          {movieImage !== null && (
            <img src={IMG_CDN_URL + movieImage[0].file_path} alt="movieImage" />
            // <h2>{movieDetails[0].file_path}</h2>
          )}
        </div>
        <div className="w-3/5 bg-red-700 p-5">
          {movieMetaData !== null && (
            <div className="flex justify-between">
              <h1 className="text-6xl font-bold text-white text-center">
                {movieMetaData.title}
              </h1>
              <h1 className="text-6xl my-0 font-bold text-white text-center">
                {movieMetaData.vote_average} <span><img className="inline-block w-12 h-12" src="data:image/jpeg;base64,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"/></span>
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDescriptionPage;
