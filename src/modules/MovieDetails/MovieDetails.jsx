import React from 'react'
import { useParams } from "react-router-dom";
import MovieInfo from './MovieInfo/MovieInfo';
import Showtimes from './Showtimes/Showtimes';

function MovieDetails() {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <>
      <MovieInfo movieId={movieId}/>
      
      <Showtimes movieId={movieId}/>
    </>
  );
}

export default MovieDetails