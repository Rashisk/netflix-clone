import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCards = ({id, posterPath}) => {
  const navigate = useNavigate();
  const handleMovieClick = () => {
    console.log("Successful");
    navigate(`/movieDescription/${id}`);
  }
  if(!posterPath) return null;
  return (<div  className="w-36 md:w-48">
<img onClick={handleMovieClick} className="cursor-pointer hover:scale-125 transition-transform" src={IMG_CDN_URL + posterPath} alt="Card Image" />
  </div>
  );
};

export default MovieCards;
