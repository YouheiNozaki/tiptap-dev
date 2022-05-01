import React, { useState, useCallback } from 'react';
import styles from './tooltip.module.css';

type Props = {
  children?: React.ReactNode;
  trigger?: React.ReactChild;
  className?: string;
  onClose?: () => React.MouseEventHandler;
};

export const Tooltip: React.VFC<Props> = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      setIsOpen(true);
    },
    [setIsOpen],
  );

  const close = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  }, []);

  return (
    <div className={styles.trigger} onClick={open}>
      {trigger}
      {isOpen && (
        <div>
          <div className={styles.mask} onClick={close} />
          <div className={styles.container}>{children}</div>
        </div>
      )}
    </div>
  );
};
