import { Group } from '../../Parts/Group';
import type { Editor } from '@tiptap/react';
import { Button } from '../../Parts/Button';

type Props = {
  editor: Editor;
};

export const List: React.VFC<Props> = ({ editor }) => {
  return (
    <Group>
      <Button
        icon={
          <span className="material-icons-outlined">format_list_bulleted</span>
        }
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive('bulletList')}
      />
      <Button
        icon={
          <span className="material-icons-outlined">format_list_bulleted</span>
        }
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive('orderedList')}
      />
    </Group>
  );
};
