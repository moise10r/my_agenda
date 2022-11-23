import React from "react";
import styles from "./editorNoteModal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Editor from "../../common/Editor/index";

const EditorNoteModal = (props: any) => {
  const { onClose, onEdit, onChange, value } = props;

  return (
    <div className={styles.editModalMainContainer}>
      <button onClick={onClose} className={styles.closeModalBtn}>
        <CloseIcon className={styles.closeIcon} />
      </button>
      <div className={styles.editModalContainer}>
        <div className={styles.confirmModalHeader}>
          <Editor onChange={onChange} value={value} />

          <div className={styles.controlBtns}>
            <button onClick={onClose} className={styles.cancelBtn}>
              Cancel
            </button>
            <button
              onClick={onEdit}
              className={styles.confirmBtn}
              disabled={value === ""}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorNoteModal;
