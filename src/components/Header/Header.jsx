import React from "react";
import styles from "./Header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user);
  const { isAuth } = useSelector((state) => state.user); 

  const handleSignin = () => {
    // chuyển sang trang / signin
    navigate("/signin");
  }
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
  };

  return (
    // <header className="header">
      
    //   <nav className="flex justify-between items-center py-4 bg-gray-800">
    //     <div className="flex items-center">
    //       <Link
    //         className="text-xl font-bold text-white uppercase text-decoration-none ml-20"
    //         to="/"
    //       >
    //         Movies
    //       </Link>
    //     </div>
    //     <div className="text-center">
    //       <ul className="flex justify-between translate-y-[35%]">
    //         <li key="lichchieu" className="mx-4">
    //           <a href="#" className="text-white text-decoration-none">
    //             Lịch chiếu
    //           </a>
    //         </li>
    //         <li className="mx-4">
    //           <a key="cum rap" href="#" className="text-white text-decoration-none">
    //             Cụm rạp
    //           </a>
    //         </li>
    //         <li key="tinTuc" className="mx-4">
    //           <a href="#" className="text-white text-decoration-none">
    //             Tin tức
    //           </a>
    //         </li>
    //         <li key="ungDung" className="mx-4">
    //           <a href="#" className="text-white text-decoration-none">
    //             Ứng dụng
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="flex items-center">
    //       <div className="ml-6">
    //         {isAuth ? (
    //           <>
    //             <span className="text-white mr-4">
    //               Xin chào, {currentUser && currentUser.taiKhoan}
    //             </span>
    //             <button
    //               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-decoration-none"
    //               onClick={handleLogout}
    //             >
    //               Đăng xuất
    //             </button>
    //           </>
    //         ) : (
    //           <>
    //             <Link
    //               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-decoration-none"
    //               to="/signin"
    //             >
    //               Đăng nhập
    //             </Link>
    //             <Link
    //               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 text-decoration-none"
    //               to="/signup"
    //             >
    //               Đăng kí
    //             </Link>
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    <div className=''>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className={styles.content}>
            <img src="../../../public/img/headTixLogo.png" alt="" />
            TIV MOVIES
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={styles.Nav}>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" href="#cumrap">Lịch chiếu</a>
                <a className="nav-link active" href="#cumrap">Cụm rạp</a>
                <a className="nav-link active" href="#phim">Phim Nổi bật</a>
                <a className="nav-link active" href="#ungdung">Ứng dụng</a>
              </div>
            </div>
          </div>
          <form className="d-flex">
            <div>
              {isAuth ? (
                <>
                  <p>{isAuth.hoTen}</p>
                  <button className={styles.form} onClick={handleLogout}>Đăng xuất</button>
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
  );
}

export default Header;