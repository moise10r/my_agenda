import React from 'react';
import Button from '@mui/material/Button';
import styles from './BaseButton.module.scss';
interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined' | 'text';
}

const BaseButton = ({
  onClick,
  name,
  disabled,
  children,
  color,
  variant,
}: ButtonProps) => {
  return (
    <Button
      className={styles.BaseButton}
      onClick={onClick}
      disabled={disabled}
      color={color || 'primary'}
      variant={variant || 'contained'}
    >
      {children || name}
    </Button>
  );
};

export default BaseButton;