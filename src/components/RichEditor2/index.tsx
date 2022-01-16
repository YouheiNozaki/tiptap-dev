import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { Container } from './Container';
import { MenuBar } from './MenuBar';
import './index.scss';

export const RichEditor2 = () => {
  const editor = useEditor({
    extensions: [StarterKit],
  });

  if (editor === null) {
    return null;
  }

  return (
    <Container>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </Container>
  );
};
