import { Tooltip } from '../../Parts/Tooltip';
import type { Editor } from '@tiptap/react';
import { TextButton } from '../../Parts/TextButton';
import { BsArrowsExpand } from 'react-icons/bs';

type Props = {
  editor: Editor;
};

export const Heading: React.VFC<Props> = ({ editor }) => {
  return (
    <>
      <Tooltip
        trigger={
          <TextButton
            text="段落"
            icon={<BsArrowsExpand color="#331cbf" size={16} />}
          />
        }
      >
        <ul>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
            }
          >
            h1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
            }
          >
            h2
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
            }
          >
            h3
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
              editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
            }
          >
            h4
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
            }
          >
            h5
          </button>
        </ul>
      </Tooltip>
    </>
  );
};
