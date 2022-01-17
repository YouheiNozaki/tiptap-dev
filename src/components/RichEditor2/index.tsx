import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';

import { Container } from './Container';
import { MenuBar } from './MenuBar';
import './index.scss';

export const RichEditor2 = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Text,
      TextStyle,
      Color.configure({
        types: ['textStyle'],
      }),
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
  });

  if (editor === null) {
    return null;
  }

  return (
    <>
      <Container>
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </Container>
      {
        <pre>
          <code>{editor.getHTML()}</code>
        </pre>
      }
      <div>
        <ul>
          <li>
            ColorとbackgroundColorを同時に設定できない(Markの詳細度が高いため)
          </li>
        </ul>
      </div>
    </>
  );
};
