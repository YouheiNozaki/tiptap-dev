import type { Editor } from '@tiptap/react';
import { Button } from '../../Parts/Button';
import { Group } from '../../Parts/Group';

type Props = {
  editor: Editor;
};

export const Formatting: React.VFC<Props> = ({ editor }) => {
  return (
    <Group>
      <Button
        icon={<span className="material-icons-outlined">format_bold</span>}
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
      />
      <Button
        icon={<span className="material-icons-outlined">format_italic</span>}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic')}
      />
      <Button
        icon={
          <span className="material-icons-outlined">format_strikethrough</span>
        }
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive('strike')}
      />
    </Group>
  );
};
