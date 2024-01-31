import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({posterPath}) => {
  if(!posterPath) return null;
  return <div className="w-36 md:w-48">
<img src={IMG_CDN_URL + posterPath} alt="Card Image" />
  </div>;
};

export default MovieCards;
