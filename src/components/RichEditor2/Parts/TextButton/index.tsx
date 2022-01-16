import styles from './textbutton.module.scss';
type Props = {
  text: string;
  icon?: React.ReactChild;
};

export const TextButton: React.VFC<Props> = ({ text, icon }) => {
  return (
    <button className={styles.button}>
      <p className={styles.text}>{text}</p>
      {icon && icon}
    </button>
  );
};
