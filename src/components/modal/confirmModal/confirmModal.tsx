import React from "react";
import styles from "./confirmModal.module.scss";

interface ConfirmModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const { onClose, onConfirm } = props;
  return (
    <div className={styles.confirmModalMainContainer}>
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
