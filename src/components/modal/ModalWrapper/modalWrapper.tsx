import React from 'react';
import styles from './modalWrapper.module.scss';
import { Modal } from '@mui/material';

interface ModalWrapperProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  mainWrapperClassName?: string;
}

const ModalWrapper = (props: ModalWrapperProps) => {
  const { open, onClose, children } = props;
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      classes={{ root: styles.modalWrapperMain }}
    >
      <div className={styles.ModalWrapper}>{children}</div>
    </Modal>
  );
};

export default ModalWrapper;