import React from "react";
import styles from "./editorNoteModal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Editor from "../../common/Editor/index";

const EditorNoteModal = (props: any) => {
  const { onClose, onEdit } = props;

  const [description, setDescription] = React.useState("");
  const handleChange = (content: any) => {
    const newContent = `${content}`;
    setDescription(newContent);
  };

  return (
    <div className={styles.editModalMainContainer}>
      <button onClick={onClose} className={styles.closeModalBtn}>
        <CloseIcon className={styles.closeIcon} />
      </button>
      <div className={styles.editModalContainer}>
        <div className={styles.confirmModalHeader}>
          <Editor onChange={handleChange} value={description} />

          <div className={styles.controlBtns}>
            <button onClick={onClose} className={styles.cancelBtn}>
              Cancel
            </button>
            <button onClick={onEdit} className={styles.confirmBtn}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorNoteModal;
