import React from "react";
import styles from "./sidebar.module.scss";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/04.jpg";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import SummarizeIcon from "@mui/icons-material/Summarize";

const sideBarItems = [
  {
    id: 1,
    title: "Personal Notes",
    icon: EventNoteIcon,
  },
  {
    id: 2,
    title: "Work Notes",
    icon: SpeakerNotesIcon,
  },
  {
    id: 3,
    title: "Meeting Notes",
    icon: SummarizeIcon,
  },
];
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
            {sideBarItems.map((item) => (
              <li key={item.id} className={styles.genreItem}>
                <div className={styles.genreIcon}>
                  <item.icon className={styles.icon} />
                </div>
                <div className={styles.genreTitle}>{item.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
