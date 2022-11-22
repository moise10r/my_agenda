import React from 'react'
import styles from './topbar.module.scss'
import BaseButton from '../common/baseBtn/BaseBtn';
export default function Topbar() {
    const handleShare = () => {
        console.log('share');
    }
  return (
    <div className={styles.topBarMainContainer}>
        <div className={styles.rightContainer}>
            <div className={styles.folder}>
                <div className={styles.folderIcon}>0</div>
                <div className={styles.folderText}>Folder</div>
            </div>
            <div className={styles.sharedMyNote}>
                <BaseButton name={'Share'} onClick={handleShare} />
            </div>
        </div>
        <div className={styles.leftContainer}>
           
        </div>
    </div>
  )
}
