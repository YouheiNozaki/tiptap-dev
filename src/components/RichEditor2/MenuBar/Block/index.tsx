import { Group } from '../../ui/Group';
import type { Editor } from '@tiptap/react';
import { IconButton } from '../../ui/IconButton';
import { Tooltip } from '../../ui/Tooltip';

import styles from './block.module.scss';

type Props = {
  editor: Editor;
};

export const Block: React.VFC<Props> = ({ editor }) => {
  return (
    <Group>
      <IconButton
        icon={<span className="material-icons">format_quote</span>}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive('blockquote')}
      />
      <IconButton
        icon={<span className="material-icons-outlined">code</span>}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive('codeBlock')}
      />
      {editor.isActive('table') ? (
        <Tooltip
          trigger={
            <IconButton
              icon={
                <span className="material-icons-outlined">table_chart</span>
              }
              isActive={editor.isActive('codeBlock')}
            />
          }
        >
          <ul className={styles.list}>
            <li className={styles.li}>
              <button
                onClick={() => editor.chain().focus().addColumnBefore().run()}
                disabled={!editor.can().addColumnBefore()}
                className={styles.button}
              >
                <p>列を左に追加</p>
              </button>
            </li>
            <li className={styles.li}>
              <button
                onClick={() => editor.chain().focus().addColumnAfter().run()}
                disabled={!editor.can().addColumnAfter()}
                className={styles.button}
              >
                <p>列を右に追加</p>
              </button>
            </li>
            <li className={styles.li}>
              <button
                onClick={() => editor.chain().focus().deleteColumn().run()}
                disabled={!editor.can().deleteColumn()}
                className={styles.button}
              >
                <p>列を削除</p>
              </button>
            </li>
            <li className={styles.li}>
              <button
                onClick={() => editor.chain().focus().addRowBefore().run()}
                disabled={!editor.can().addRowBefore()}
                className={styles.button}
              >
                <p>行を上に追加</p>
              </button>
            </li>
            <li className={styles.li}>
              <button
                onClick={() => editor.chain().focus().addRowAfter().run()}
                disabled={!editor.can().addRowAfter()}
                className={styles.button}
              >
                <p>行を下に追加</p>
              </button>
            </li>
            <li className={styles.li}>
              <button
                onClick={() => editor.chain().focus().deleteRow().run()}
                disabled={!editor.can().deleteRow()}
                className={styles.button}
              >
                <p>行を削除</p>
              </button>
            </li>
            <li className={styles.li}>
              <button
                onClick={() => editor.chain().focus().deleteTable().run()}
                disabled={!editor.can().deleteTable()}
                className={styles.button}
              >
                <p>テーブル削除</p>
              </button>
            </li>
          </ul>
        </Tooltip>
      ) : (
        <IconButton
          icon={<span className="material-icons-outlined">table_chart</span>}
          onClick={() =>
            editor
              .chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run()
          }
          isActive={editor.isActive('codeBlock')}
        />
      )}
    </Group>
  );
};
