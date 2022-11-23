import React from "react";
import styles from "./confirmModal.module.scss";
import CloseIcon from "@mui/icons-material/Close";

const ConfirmModal = (props: any) => {
  const { onClose, onConfirm } = props;
  return (
    <div className={styles.confirmModalMainContainer}>
      <button onClick={onClose} className={styles.closeModalBtn}>
        <CloseIcon className={styles.closeIcon} />
      </button>
      <div className={styles.confirmModalContainer}>
        <div className={styles.confirmModalHeader}>
          <h3 className={styles.confirmModalTitle}>
            Are you sure you want to delete this note?
          </h3>
          <div className={styles.controlBtns}>
            <button onClick={onClose} className={styles.cancelBtn}>
              Cancel
            </button>
            <button onClick={onConfirm} className={styles.confirmBtn}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
