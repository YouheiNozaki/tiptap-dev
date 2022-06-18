import cx from 'classnames';
import styles from './button.module.scss';
type Props = {
  text?: string;
  icon?: React.ReactChild;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const IconButton: React.VFC<Props> = ({
  text,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.isActive]: isActive,
      })}
      onClick={onClick}
    >
      {text && <p className={styles.text}>{text}</p>}
      {icon && icon}
    </button>
  );
};
