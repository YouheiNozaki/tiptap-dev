import { Group } from '../../Parts/Group';
import type { Editor } from '@tiptap/react';
import { Button } from '../../Parts/Button';

type Props = {
  editor: Editor;
};

export const Block: React.VFC<Props> = ({ editor }) => {
  return (
    <Group>
      <Button
        icon={<span className="material-icons">format_quote</span>}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive('blockquote')}
      />
      <Button icon={<span className="material-icons-outlined">code</span>} />
    </Group>
  );
};
