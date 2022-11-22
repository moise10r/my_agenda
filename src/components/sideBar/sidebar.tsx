import React from "react";
import styles from "./sidebar.module.scss";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/04.jpg";

export default function sidebar() {
  return (
    <div className={styles.mainSideBarContainer}>
      <div className={styles.sideBarMainContent}>
        <div className={styles.topContainer}>
          <div className={styles.imgWrapper}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.textWrapper}>
            <h1>MyNote</h1>
          </div>
        </div>
        <div className={styles.bar}></div>
        <div className={styles.userContainer}>
          <div className={styles.userProfil}>
            <div className={styles.firstUserContainer}>
              <div className={styles.profilImgWrapper}>
                <img src={profile} alt="" />
              </div>
              <div className={styles.userName}>Moise</div>
            </div>
            <div>down</div>
          </div>
        </div>

        <div className={styles.genreMainContainer}>
            <ul className={styles.genreContainer}>
                <li className={styles.genreItem}>
                    <div className={styles.genreIcon}>0</div>
                    <div className={styles.genreText}>Personal Notes</div>
                </li>
                <li className={styles.genreItem}>
                    <div className={styles.genreIcon}>0</div>
                    <div className={styles.genreText}>Work Notes</div>
                </li>
                <li className={styles.genreItem}>
                    <div className={styles.genreIcon}>0</div>
                    <div className={styles.genreText}>Musics Notes</div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
