import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //Run a peice of code each time this comp loads
    async function fetchData() {
      const response = await axios.get(selectedOption);
      console.log(response);
      setMovies(response.data.results);
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
