import clsx from 'clsx';
import React from 'react';
import styles from './button.module.scss';

type Props = React.ComponentProps<'button'>;

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, ...props }, ref) => (
    <button {...props} ref={ref} className={clsx(styles.button, className)} />
  ),
);
