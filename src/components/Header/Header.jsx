import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signout } from '../../slices/userSlice';

function Header() {

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignout = () => {
    dispatch(signout());
    localStorage.removeItem("user");
  };
  const handleSignin = () => {
    // chuyển sang trang signin
    navigate("/signin");
  };
  return (
    <div style={{ background: "red", display: "flex" }}>
      <h3>Cybermovie</h3>
      {user ? (
        <div style={{marginLeft: "auto", display: "flex"}}>
          <p>{user.hoTen}</p>
          <button onClick={handleSignout}>Đăng xuất</button>
        </div>

      ) : (
        <button onClick={handleSignin}>Đăng nhập</button>
      )}
    </div>
  );
}

export default Header