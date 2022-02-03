import { Editor } from '@tiptap/react';
import styles from './preview.module.scss';

type Props = {
  editor: Editor;
};

export const Preview: React.VFC<Props> = ({ editor }) => {
  return (
    <pre className={styles.code}>
      <code>{editor.getHTML()}</code>
    </pre>
  );
};
