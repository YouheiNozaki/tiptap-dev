import clsx from 'clsx';
import React from 'react';
import styles from './button.module.scss';

export type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, ...props }, ref) => (
    <button {...props} ref={ref} className={clsx(styles.button, className)} />
  ),
);
