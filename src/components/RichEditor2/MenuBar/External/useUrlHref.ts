import { Editor } from "@tiptap/react";
import { useState, useCallback } from "react";

export const useUrlHref = (editor: Editor) => {
  const [url, setUrl] = useState<string>(
    editor.getAttributes('link').href || '',
  );
  const setInputValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }, []);

  const setUrlHref = useCallback(() => {
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url })
      .run();
  }, [editor, url]);

  return { url, setInputValue, setUrlHref }
}
