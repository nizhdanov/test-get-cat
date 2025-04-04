import clsx from 'clsx';
import { LoaderCircle } from '../icons/LoaderCircle';

import styles from './Button.module.css';

interface ButtonProps extends React.ComponentProps<'button'> {
  loading?: boolean;
}

export const Button = ({ children, className, loading, disabled, ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, className)} disabled={disabled || loading} {...props}>
      {loading && <LoaderCircle />}
      {children}
    </button>
  );
};
