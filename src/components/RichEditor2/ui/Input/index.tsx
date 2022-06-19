import React from 'react';
import styles from './input.module.scss';

type Props = React.ComponentProps<'input'>;

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => (
    <input {...props} ref={ref} className={styles.input} />
  ),
);
