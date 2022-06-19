import React from 'react';
import { Group } from '../../ui/Group';
import type { Editor } from '@tiptap/react';
import { Link } from './Link';

type Props = {
  editor: Editor;
};

export const External: React.VFC<Props> = ({ editor }) => {
  return (
    <Group>
      <Link editor={editor} />
    </Group>
  );
};
