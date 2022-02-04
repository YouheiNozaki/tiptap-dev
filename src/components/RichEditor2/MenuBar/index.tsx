import type { Editor } from '@tiptap/react';
import { Heading } from './Heading';
import { Formatting } from './Formatting';
import { Block } from './Block';
import { List } from './List';
import { Sub } from './Sub';
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
      <Formatting editor={editor} />
      <Block editor={editor} />
      <List editor={editor} />
      <Sub editor={editor} />
    </div>
  );
};
