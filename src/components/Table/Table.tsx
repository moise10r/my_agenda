import React from "react";
import { Link } from "react-router-dom";
import styles from "./table.module.scss";
import { truncateStr } from "../../utils/truncateStr";

//implement the interface for the agenda
interface Agenda {
  id: string;
  title: string;
  permissions: string;
  shortDescription: string;
  description: string;
  createdAt: string;
}

export default function Table(props: any) {
  const { agenda, onDelete, onEdit } = props;
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
        {agenda.map((note: Agenda) => (
          <tr className={styles.tableRow} key={note.id}>
            <td className={styles.tableData}>
              <div className={styles.title}>
                <Link to={`/notes/${note.id}`} className={styles.title}>
                  <span>{truncateStr(note.title, 10)}</span>
                  <span>{note.shortDescription}</span>
                </Link>
              </div>
            </td>
            <td className={styles.tableData}>{note.permissions}</td>
            <td className={styles.tableData}>{note.createdAt}</td>
            <td className={styles.tableData}>
              <div className={styles.controlBtns}>
                <button
                  className={styles.editBtn}
                  onClick={() => onEdit(note.id)}
                >
                  Edit
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => onDelete(note.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
