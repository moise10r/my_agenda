import React from 'react'
import styles from './table.module.scss';
import agendaList from '../../utils/agendaList';



export default function Table() {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableRwo}>
          <th className={styles.tableColumn}>Title</th>
          <th className={styles.tableColumn}>Permission</th>
          <th className={styles.tableColumn}>Created At</th>
          <th className={styles.tableColumn}>Action</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {
            agendaList.map((note)=>(
                <tr className={styles.tableRow} key={note.id}>
                <td className={styles.tableData}>
                    <div className={styles.title}>
                        <span>{note.title}</span>
                        <span>{note.description}</span>
                    </div>    
                </td>
                <td className={styles.tableData}>{note.permissions}</td>
                <td className={styles.tableData}>{note.createdAt}</td>
                <td className={styles.tableData}>
                  <div className={styles.controlBtns}>
                      <button className={styles.editBtn}>Edit</button>
                      <button className={styles.deleteBtn}>Delete</button>
                  </div>
                </td>
              </tr>
            ))
        }
      </tbody>
    </table>
      
  )
}
