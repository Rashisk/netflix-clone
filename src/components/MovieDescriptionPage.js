import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { BACKGROUND_IMG_URL, IMG_CDN_URL } from "../utils/constants";

const MovieDescriptionPage = () => {
  const { movieId } = useParams();
  const { movieDetails } = useMovieDetails(movieId);
  console.log(movieId);

  return (
    <div>
      <Header />
      <div className="fixed -z-10">
        <img
          src={BACKGROUND_IMG_URL}
          alt="logo"
          className=" w-screen h-screen object-cover"
        />
      </div>
      <div className="pt-[35%] md:pt-[15%] flex m-6 p-10">
        <div className="w-2/5 bg-green-500">
          {movieDetails!==null && (
            <img
              className=""
              src={IMG_CDN_URL + movieDetails[0].file_path}
              alt="movieImage"
            />
            // <h2>{movieDetails[0].file_path}</h2>
          )}
        </div>
        <div className="w-3/5 bg-red-700">Hi</div>
      </div>
    </div>
  );
};

export default MovieDescriptionPage;
