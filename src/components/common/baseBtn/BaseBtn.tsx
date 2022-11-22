import React from 'react';
import styles from './BaseBtn.module.scss';
interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const BaseButton = ({
  onClick,
  name,
  disabled,
  children,
}: ButtonProps) => {
  return (
    <button
      className={styles.BaseButton}
      onClick={onClick}
      disabled={disabled}
    >
      {children || name}
    </button>
  );
};

export default BaseButton;