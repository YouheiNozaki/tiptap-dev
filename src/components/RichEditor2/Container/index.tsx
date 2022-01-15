import styles from './container.module.css';

type Props = {
  children: React.ReactNode;
};

export const Container: React.VFC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
