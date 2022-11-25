import React from "react";
import styles from "./editorNoteModal.module.scss";
import Editor from "../../common/Editor/index";

interface EditorNoteModalProps {
  onClose: () => void;
  onEdit: () => void;
  onChange: (value: string) => void;
  value: string;
}

const EditorNoteModal = (props: EditorNoteModalProps) => {
  const { onClose, onEdit, onChange, value } = props;

  return (
    <div className={styles.editModalMainContainer}>
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
