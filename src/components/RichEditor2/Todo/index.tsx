import styles from './todo.module.scss';

export const Todo: React.VFC = () => {
  return (
    <div className={styles.todo}>
      <h3>TODO</h3>
      <ul>
        <li>
          ColorとbackgroundColorを同時に設定できない(Markの詳細度が高いため)
        </li>
      </ul>
    </div>
  );
};
