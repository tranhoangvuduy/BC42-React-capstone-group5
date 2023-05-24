import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { signout } from '../../slices/userSlice';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./Header.module.scss"

function Header() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignin = () => {
    // chuyển sang trang / signin
    navigate("/signin");
  }
  const handleSignout = () => {
    dispatch(signout());
    localStorage.removeItem("user");
  }

  return (
    
    <div className=''>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className='ms-5'>
            <img src="../../../public/img/headTixLogo.png" alt="" />
            TIV MOVIES
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse ms-5 px-5" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#">Lịch chiếu</a>
              <a className="nav-link active" href="#">Cụm rạp</a>
              <a className="nav-link active" href="#">Tin tức</a>
              <a className="nav-link active" href="#">Ứng dụng</a>
            </div>
          </div>
          <form className="d-flex">
              <div>
                {user ? (
                  <>
                    <p>{user.hoTen}</p>
                    <button className={styles.form} onClick={handleSignout}>Đăng xuất</button>
                  </>
                ) : (
                  <button onClick={handleSignin} className={styles.form}>Đăng Nhập</button>
                )}
                <button className={styles.form}>Đăng Ký</button>
              </div>
              
            </form>
        </div>
      </nav>

    </div>

  )
};

export default Header;