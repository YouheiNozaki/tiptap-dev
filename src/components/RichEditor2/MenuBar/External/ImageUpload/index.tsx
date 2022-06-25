import { IconButton } from '../../../ui/IconButton';
import type { Editor } from '@tiptap/react';

type Props = {
  editor: Editor;
};

export const ImageUpload: React.VFC<Props> = ({ editor }) => {
  return (
    <IconButton
      icon={<span className="material-icons-outlined">image</span>}
      isActive={editor.isActive('image')}
    />
  );
};
