import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player';
import styles from "./Movies.module.scss";
import { apiGetMovies } from '../../../apis/movieAPI';
function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const getMovies = async () => {
    try {
      const data = await apiGetMovies();
      setMovies(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {movies.map((item) => {
        return <div>
          <span>{item.tenPhim}</span>
          <button onClick={() => navigate(`/movies/${item.maPhim}`)}>mua vé</button>
          {/* <ReactPlayer url={item.trailer}/> */}
         
        </div>
      })}
    </div>
  )
}

export default Movies