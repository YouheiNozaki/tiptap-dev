import { Group } from '../../Parts/Group';
import type { Editor } from '@tiptap/react';
import { Button } from '../../Parts/Button';

type Props = {
  editor: Editor;
};

export const Sub: React.VFC<Props> = ({ editor }) => {
  return (
    <Group>
      <Button
        icon={<span className="material-icons-outlined">subscript</span>}
        onClick={() => editor.chain().focus().toggleSubscript().run()}
        isActive={editor.isActive('subscript')}
      />
      <Button
        icon={<span className="material-icons-outlined">superscript</span>}
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
        isActive={editor.isActive('superscript')}
      />
    </Group>
  );
};
