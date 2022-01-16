import { useState } from 'react';
import { Editor } from '@tiptap/react';

type Props = {
  editor: Editor;
};

export const Heading: React.VFC<Props> = ({ editor }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>見出し</button>
      {open && (
        <>
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
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              editor.isActive('heading', { level: 6 }) ? 'is-active' : ''
            }
          >
            h6
          </button>
        </>
      )}
    </>
  );
};
