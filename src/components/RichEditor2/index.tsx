import { useEditor, EditorContent, ReactNodeViewRenderer } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import lowlight from 'lowlight';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Link from '@tiptap/extension-link';

import { Container } from './Container';
import { MenuBar } from './MenuBar';
import { CodeBlock } from './ui/CodeBlock';
// @ts-ignore
import styles from './index.module.scss';
import { Preview } from './Preview';

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
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlock);
        },
      }).configure({ lowlight }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Subscript,
      Superscript,
      Link.configure({
        openOnClick: false,
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
        <EditorContent editor={editor} className={styles.main} />
      </Container>

      {/* TODO：削除 */}
      <Container>
        <Preview editor={editor} />
      </Container>
    </>
  );
};
