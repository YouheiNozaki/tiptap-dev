import styles from './group.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Group: React.VFC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
