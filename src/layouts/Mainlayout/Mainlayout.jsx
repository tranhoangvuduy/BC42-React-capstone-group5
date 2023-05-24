import React from 'react'
import { Outlet } from "react-router-dom"
import styles from "./Mainlayout.module.scss"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton'

function Mainlayout() {
  return (
    <div className={styles.container}>
        <Header />

        <Outlet />

        <BackToTopButton />
        <Footer />
    </div>
  )
}

export default Mainlayout