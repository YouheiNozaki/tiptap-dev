import { Group } from '../../ui/Group';
import type { Editor } from '@tiptap/react';
import { IconButton } from '../../ui/IconButton';

type Props = {
  editor: Editor;
};

export const Sub: React.VFC<Props> = ({ editor }) => {
  return (
    <Group>
      <IconButton
        icon={<span className="material-icons-outlined">subscript</span>}
        onClick={() => editor.chain().focus().toggleSubscript().run()}
        isActive={editor.isActive('subscript')}
      />
      <IconButton
        icon={<span className="material-icons-outlined">superscript</span>}
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
        isActive={editor.isActive('superscript')}
      />
    </Group>
  );
};
