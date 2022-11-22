import React from 'react'
import styles from './table.module.scss';


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
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>CES-9000</td>
          <td className={styles.tableData}>50mt</td>
          <td className={styles.tableData}>9mm</td>
          <td className={styles.tableData}>1/2"</td>
        </tr>
           <tr className={styles.tableRow}>
          <td className={styles.tableData}>CES-9000</td>
          <td className={styles.tableData}>50mt</td>
          <td className={styles.tableData}>9mm</td>
          <td className={styles.tableData}>1/2"</td>
        </tr>
           <tr className={styles.tableRow}>
          <td className={styles.tableData}>CES-9000</td>
          <td className={styles.tableData}>50mt</td>
          <td className={styles.tableData}>9mm</td>
          <td className={styles.tableData}>1/2"</td>
        </tr>
           <tr className={styles.tableRow}>
          <td className={styles.tableData}>CES-9000</td>
          <td className={styles.tableData}>50mt</td>
          <td className={styles.tableData}>9mm</td>
          <td className={styles.tableData}>1/2"</td>
        </tr>
      </tbody>
    </table>
      
  )
}
