import cx from 'classnames';

import { Group } from '../../Parts/Group';
import { Tooltip } from '../../Parts/Tooltip';
import { Button } from '../../Parts/Button';

import styles from './heading.module.scss';
import type { Editor } from '@tiptap/react';

type Props = {
  editor: Editor;
};

export const Heading: React.VFC<Props> = ({ editor }) => {
  const isHeading1 = editor.isActive('heading', { level: 1 });
  const isHeading2 = editor.isActive('heading', { level: 2 });
  const isHeading3 = editor.isActive('heading', { level: 3 });
  const isHeading4 = editor.isActive('heading', { level: 4 });
  const isHeading5 = editor.isActive('heading', { level: 5 });

  return (
    <Group>
      <Tooltip
        trigger={
          <Button
            text={
              isHeading1
                ? '見出し1'
                : isHeading2
                ? '見出し2'
                : isHeading3
                ? '見出し3'
                : isHeading4
                ? '見出し4'
                : isHeading5
                ? '見出し5'
                : '段落'
            }
            icon={<span className="material-icons-outlined">unfold_more</span>}
          />
        }
      >
        <ul className={styles.list}>
          <li
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 1 }).run();
            }}
            className={cx(styles.li, {
              [styles.h1]: true,
              [styles.isActive]: isHeading1,
            })}
          >
            見出し1
          </li>
          <li
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 2 }).run();
            }}
            className={cx(styles.li, {
              [styles.h2]: true,
              [styles.isActive]: isHeading2,
            })}
          >
            見出し2
          </li>
          <li
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 3 }).run();
            }}
            className={cx(styles.li, {
              [styles.h3]: true,
              [styles.isActive]: isHeading3,
            })}
          >
            見出し3
          </li>
          <li
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 4 }).run();
            }}
            className={cx(styles.li, {
              [styles.h4]: true,
              [styles.isActive]: isHeading4,
            })}
          >
            見出し4
          </li>
          <li
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 5 }).run();
            }}
            className={cx(styles.li, {
              [styles.h5]: true,
              [styles.isActive]: isHeading5,
            })}
          >
            見出し5
          </li>
          <li
            onClick={() => {
              editor.commands.setParagraph();
            }}
            className={cx(styles.li, {
              [styles.paragrah]: true,
              [styles.isActive]: editor.isActive('paragraph'),
            })}
          >
            段落
          </li>
        </ul>
      </Tooltip>
    </Group>
  );
};
