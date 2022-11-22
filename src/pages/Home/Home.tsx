import React from 'react'
import styles from './Home.module.scss'
import Sidebar from '../../components/sideBar/sidebar';
import Topbar from '../../components/TopBar/topbar';

export default function Home() {
  return (
    <div className={styles.homeMainContainer}>
      <div className={styles.homeLeftMainContainer}>
          <Sidebar />
      </div>
      <div className={styles.homeRightMainContainer}>
          <div className={styles.homeRightContent}>
            <Topbar/>
          </div>
      </div>

    </div>
  )
}
