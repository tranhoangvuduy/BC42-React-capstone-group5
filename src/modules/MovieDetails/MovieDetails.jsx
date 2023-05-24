import React from 'react'
import MoviesInfo from './MoviesInfo/MoviesInfo'
import Showtimes from './Showtimes/Showtimes'
import { useParams } from 'react-router-dom'

function MovieDetails() {
  const { movieId } = useParams();

  return (
    <>
        <MoviesInfo movieId={movieId} />

        <Showtimes movieId={movieId}/>
    </>
  )
}

export default MovieDetails