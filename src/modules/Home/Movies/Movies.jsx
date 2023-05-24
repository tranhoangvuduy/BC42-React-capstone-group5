// import React, { useState, useEffect } from 'react'
// import { useNavigate } from "react-router-dom"
// import styles from "./Movies.module.scss"
// import { apiGetMovies } from '../../../apis/movieAPI'
// import ReactPlayer from "react-player";

// function Movies() {
//   const navigate=useNavigate();
//   const [movies, setMovies] = useState([]);

//   const getMovies = async () => {
//     try {
//       const data = await apiGetMovies();
//       setMovies(data.content);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const [showVideo, setShowVideo] = useState(null);

//   const handleImageClick = (id) => {
//     setShowVideo(id);
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <div className='container mt-5'>
//       <div className='row'>
//         {movies.map(item=>{
//           return (
//             <div key={item.maPhim} className="col-sm-4 mb-3">
//               <div className="card" style={{width: '25rem'}}>
//                 <div className="card-top">
//                   {!showVideo || showVideo !== item.maPhim ? (
//                     <img
//                       style={{width: "100%"}}
//                       className="card-img-top"
//                       src={item.hinhAnh}
//                       onClick={()=>handleImageClick(item.maPhim)}
//                     />
//                   ) : (
//                     <ReactPlayer
//                     width={400}
//                       url={item.trailer}
//                       playing
//                       controls
//                     />
//                   )}
//                 </div>
//                 <div className="card-body">
//                   <h5 className="card-title">{item.tenPhim}</h5>
//                   <button
//                     className="btn btn-success"
//                     onClick={()=>{navigate(`/movies/${item.maPhim}`)}}
//                   >
//                       Xem Chi Tiết
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   );
// }

// export default Movies;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Movies.module.scss";
import ReactPlayer from "react-player";
import { apiGetMovies } from "../../../apis/movieAPI";
import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Grid } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";

SwiperCore.use([Pagination, Grid]);

function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [trailer, setTrailer] = useState("");

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

  const handleOpenModal = (trailer) => {
    setOpen(true);
    setTrailer(trailer);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper} id="phim">
      <Swiper
        slidesPerView={4}
        // spaceBetween={25}
        grid={{
          rows: 2,
          fill: "row",
        }}
        pagination={{
          clickable: true,
        }}
        className={styles.mySwiper}
      >
        {movies?.map((item) => (
          <SwiperSlide key={item.maPhim} className={styles.movieDetails}>
            <div>
              <img
                src={item.hinhAnh}
                className={styles.bannerImg}
                width="60%%"
                height="auto"
              />

              <div className={styles.tenPhim}>
                {item.tenPhim.substring(0, 20)}
              </div>
              <div className={styles.button}>
                <button
                  onClick={() => navigate(`/movies/${item.maPhim}`)}
                  className={styles.buyTicket}
                >
                  Mua vé
                </button>
                <button onClick={() => handleOpenModal(item.trailer)}>
                  Xem trailer
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ position: "relative" }}>
        <Modal
          show={isOpen}
          onHide={handleCloseModal}
          backdropOpacity={0.7}
          style={{
            position: "absolute !important",
            top: "100% !important",
            width: "50% !important",
            height: "650px !important",
            zIndex: "10 !important",
            marginLeft: "25% !important",
            marginRight: "25% !important",
            marginTop: "180px !important",
          }}
        >
          <Modal.Header closeButton style={{ padding: "10px" }}></Modal.Header>
          <Modal.Body
            style={{
              height: "500px",
            }}
          >
            <ReactPlayer
              className={styles.reactPlayer}
              url={trailer}
              width="100%"
              height="100%"
              controls={true}
              playing={isOpen}
              // onPause={handleCloseModal}
            />
          </Modal.Body>
        </Modal>
        <div
          className={`${isOpen ? styles.backgroundBlur : styles.nonBlur}`}
        ></div>
      </div>
    </div>
  );
}

export default Movies;
