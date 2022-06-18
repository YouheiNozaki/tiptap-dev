import { Group } from '../../ui/Group';
import type { Editor } from '@tiptap/react';
import { IconButton } from '../../ui/IconButton';

type Props = {
  editor: Editor;
};

export const List: React.VFC<Props> = ({ editor }) => {
  return (
    <Group>
      <IconButton
        icon={
          <span className="material-icons-outlined">format_list_bulleted</span>
        }
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive('bulletList')}
      />
      <IconButton
        icon={
          <span className="material-icons-outlined">format_list_bulleted</span>
        }
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive('orderedList')}
      />
    </Group>
  );
};
