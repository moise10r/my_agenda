import React from 'react'
import styles from './topbar.module.scss'
import BaseButton from '../common/baseBtn/BaseBtn';
export default function Topbar() {
  return (
    <div className={styles.topBarMainContainer}>
        <div className={styles.rightContainer}>
            <div className={styles.folder}>
                <div className={styles.folderIcon}>0</div>
                <div className={styles.folderText}>Folder</div>
            </div>
        </div>
        <div className={styles.leftContainer}>
            <div className={styles.sharedMyNote}>
                <BaseButton />
            </div>
        </div>
    </div>
  )
}
