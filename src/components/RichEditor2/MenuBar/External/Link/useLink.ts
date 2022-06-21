import { Editor } from '@tiptap/react';
import { useState, useCallback } from 'react';

export const useLink = (editor: Editor) => {
  const [url, setUrl] = useState<string>('');

  const onSubmitUrl = useCallback(() => {
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor, url]);

  return { url, setUrl, onSubmitUrl };
};
