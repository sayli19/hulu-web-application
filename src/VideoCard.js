import { ThumbUpSharp } from "@material-ui/icons";
import React from "react";
import "./VideoCard.css";

const base_URL = "https://image.tmdb.org/t/p/original/";
function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img src={`${base_URL}${movie.backdrop_path || movie.poster_path}`} />
      <p>{movie.overview}</p>
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type} • {movie.release_date || movie.first_air_date} •
        <ThumbUpSharp className="videoCard__thumbIcon" /> {movie.vote_count}
      </p>
    </div>
  );
}

export default VideoCard;
