import React from 'react'
import styles from './Home.module.scss'
import Sidebar from '../../components/sideBar/sidebar';
import Topbar from '../../components/TopBar/topbar';
import Editor from '../../components/common/Editor';
import Table from '../../components/Table/Table';
import BaseButton from '../../components/common/baseBtn/BaseBtn';

const htmlRegexG = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;

export default function Home() {

  const [description, setDescription] = React.useState('');
  const [title, setTitle] = React.useState('');
  const handleChange = (content:any) => {
    const newContent = `${content}`
    const titleContent = newContent.slice(newContent.indexOf('<p>') + 3, newContent.indexOf('</p>'));    
    setDescription(content);
    setTitle(titleContent)
  }
  
  // create handleSubmit with the event and the value of the text
  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('submit');
    
    
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
            <form action="" className={styles.editForm}>
              <Editor onChange={handleChange} value={description} />
              <div className={styles.btnWrapper}>
                <BaseButton name={'Submit'} disabled={description === ''} onClick={handleSubmit} />
              </div>
            </form>

          </div>
          <div className={styles.table}>
            <Table/>
          </div>
      </div>

    </div>
  )
}
