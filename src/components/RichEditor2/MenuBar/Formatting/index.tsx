import cx from 'classnames';

import { Button } from '../../Parts/Button';
import { Group } from '../../Parts/Group';
import { Tooltip } from '../../Parts/Tooltip';

import type { Editor } from '@tiptap/react';
import styles from './formatting.module.scss';
import { ColorPicker } from '../../Parts/ColorPicker';
import { BackgroundColor } from '../../Parts/BackgroundColor';

type Props = {
  editor: Editor;
};

export const Formatting: React.VFC<Props> = ({ editor }) => {
  const textAlighLeft = editor.isActive({ textAlign: 'left' });
  const textAlighCenter = editor.isActive({ textAlign: 'center' });
  const textAlighRight = editor.isActive({ textAlign: 'right' });
  const textAlighJustify = editor.isActive({ textAlign: 'justify' });

  return (
    <Group>
      <Button
        icon={<span className="material-icons-outlined">format_bold</span>}
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
      />
      <Button
        icon={<span className="material-icons-outlined">format_italic</span>}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic')}
      />
      <Button
        icon={
          <span className="material-icons-outlined">format_strikethrough</span>
        }
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive('strike')}
      />
      <Button
        icon={<span className="material-icons-outlined">code_off</span>}
        onClick={() => editor.chain().focus().toggleCode().run()}
        isActive={editor.isActive('code')}
      />
      <Tooltip
        trigger={
          <Button
            icon={
              <span className="material-icons-outlined">format_color_text</span>
            }
          />
        }
      >
        <ColorPicker editor={editor} />
      </Tooltip>
      <Tooltip
        trigger={
          <Button
            icon={
              <span className="material-icons-outlined">format_color_fill</span>
            }
          />
        }
      >
        <BackgroundColor editor={editor} />
      </Tooltip>
      <Tooltip
        trigger={
          textAlighCenter ? (
            <Button
              icon={
                <span className="material-icons-outlined">
                  align_horizontal_center
                </span>
              }
              isActive={true}
            />
          ) : textAlighRight ? (
            <Button
              icon={
                <span className="material-icons-outlined">
                  align_horizontal_right
                </span>
              }
              isActive={true}
            />
          ) : textAlighJustify ? (
            <Button
              icon={
                <span className="material-icons-outlined">
                  format_align_justify
                </span>
              }
              isActive={true}
            />
          ) : (
            <Button
              icon={
                <span className="material-icons-outlined">
                  align_horizontal_left
                </span>
              }
            />
          )
        }
      >
        <ul className={styles.list}>
          <li
            className={cx(styles.li, {
              [styles.isActive]: textAlighLeft,
            })}
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
          >
            <span className="material-icons-outlined">
              align_horizontal_left
            </span>
          </li>
          <li
            className={cx(styles.li, {
              [styles.isActive]: textAlighCenter,
            })}
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
          >
            <span className="material-icons-outlined">
              align_horizontal_center
            </span>
          </li>
          <li
            className={cx(styles.li, {
              [styles.isActive]: textAlighRight,
            })}
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
          >
            <span className="material-icons-outlined">
              align_horizontal_right
            </span>
          </li>
          <li
            className={cx(styles.li, {
              [styles.isActive]: textAlighJustify,
            })}
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          >
            <span className="material-icons-outlined">
              format_align_justify
            </span>
          </li>
        </ul>
      </Tooltip>
    </Group>
  );
};
