import { useCallback } from 'react';
import { Group } from '../../ui/Group';
import { IconButton } from '../../ui/IconButton';
import type { Editor } from '@tiptap/react';

type Props = {
  editor: Editor;
};

export const External: React.VFC<Props> = ({ editor }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  return (
    <Group>
      <IconButton
        icon={<span className="material-icons-outlined">link</span>}
        onClick={setLink}
        isActive={editor.isActive('link')}
      />
    </Group>
  );
};
