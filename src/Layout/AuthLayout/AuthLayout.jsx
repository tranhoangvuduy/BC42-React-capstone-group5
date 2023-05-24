import React from 'react'
import styles from './AuthLayout.module.scss';
import {Outlet } from 'react-router-dom';



function AuthLayout() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.box}>
            {/* <Link className='nav nav-link text-end' to='/Signup'>Đăng kí tại đây</Link> */}
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthLayout