import type { Editor } from '@tiptap/react';
import { IconButton } from '../../../ui/IconButton';
import { Tooltip } from '../../../ui/Tooltip';
import { Button } from '../../../ui/Button';
import { Input } from '../../../ui/Input';
import { useLink } from './useLink';
import styles from './link.module.scss';

type Props = {
  editor: Editor;
};

export const Link: React.VFC<Props> = ({ editor }) => {
  const { url, setInputValue, setLink } = useLink(editor);
  return (
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
        <Button onClick={setLink}>
          <span>追加</span>
        </Button>
      </div>
    </Tooltip>
  );
};
