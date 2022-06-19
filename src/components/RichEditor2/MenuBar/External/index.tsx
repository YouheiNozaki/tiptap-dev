import React from 'react';
import { Group } from '../../ui/Group';
import { IconButton } from '../../ui/IconButton';
import type { Editor } from '@tiptap/react';
import { Tooltip } from '../../ui/Tooltip';
import { Button } from '../../ui/Button';
import styles from './external.module.scss';
import { Input } from '../../ui/Input';
import { useUrlHref } from './useUrlHref';

type Props = {
  editor: Editor;
};

export const External: React.VFC<Props> = ({ editor }) => {
  const { url, setInputValue, setUrlHref } = useUrlHref(editor);

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
            <Input value={url} onChange={setInputValue} />
          </div>
          <Button onClick={setUrlHref}>
            <span>追加</span>
          </Button>
        </div>
      </Tooltip>
    </Group>
  );
};
