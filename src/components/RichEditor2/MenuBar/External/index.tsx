import React, { useState, useCallback } from 'react';
import { Group } from '../../ui/Group';
import { IconButton } from '../../ui/IconButton';
import type { Editor } from '@tiptap/react';
import { Tooltip } from '../../ui/Tooltip';
import { Button } from '../../ui/Button';
import styles from './external.module.scss';
import { Input } from '../../ui/Input';

type Props = {
  editor: Editor;
};

export const External: React.VFC<Props> = ({ editor }) => {
  const [linkUrl, setLinkUrl] = useState<string>(
    editor.getAttributes('link').href || '',
  );
  const setInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(e.target.value);
  }, []);

  const setLink = useCallback(() => {
    if (linkUrl === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: linkUrl })
      .run();
  }, [editor, linkUrl]);

  return (
    <Group>
      <Tooltip
        trigger={
          <IconButton
            icon={<span className="material-icons-outlined">link</span>}
            isActive={editor.isActive('link')}
          />
        }
      >
        <div className={styles.link}>
          <div className={styles.linkInput}>
            <Input value={linkUrl} onChange={setInput} />
          </div>
          <Button onClick={setLink}>
            <span>追加</span>
          </Button>
        </div>
      </Tooltip>
    </Group>
  );
};
