import React from 'react'
import styles from './Home.module.scss'
import Sidebar from '../../components/sideBar/sidebar';
import Topbar from '../../components/TopBar/topbar';
import Editor from '../../components/common/Editor';
import Table from '../../components/Table/Table';

export default function Home() {
  const [text, setText] = React.useState('');
  const handleChange = (value: string) => {
    console.log(value);
    setText(value);
  }
  return (
    <div className={styles.homeMainContainer}>
      <div className={styles.homeLeftMainContainer}>
          <Sidebar />
      </div>
      <div className={styles.homeRightMainContainer}>
          <div className={styles.homeRightContent}>
            <Topbar/>
          </div>
          <div className={styles.editor}>
          <Editor onChange={handleChange} value={text} />
          </div>
          <div className={styles.table}>
            <Table/>
          </div>
      </div>

    </div>
  )
}
