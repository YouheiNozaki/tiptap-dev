import type { Editor } from '@tiptap/react';
import { Heading } from './Heading';
import styles from './menubar.module.css';

type Props = {
  editor: Editor;
};

export const MenuBar: React.VFC<Props> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Heading editor={editor} />
    </div>
  );
};