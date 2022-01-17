import { useState, useCallback } from 'react';
import { HexColorPicker } from 'react-colorful';
import type { Editor } from '@tiptap/react';

type Props = {
  editor: Editor;
};

export const BackgroundColor: React.VFC<Props> = ({ editor }) => {
  const [color, setColor] = useState<string>('#1c1a1a');

  const onPickColor = useCallback(
    (newColor: string) => {
      setColor(newColor);
      editor.chain().setHighlight({ color: newColor }).run();
    },
    [editor],
  );

  return (
    <div>
      <HexColorPicker
        color={color}
        onChange={(newColor) => onPickColor(newColor)}
      />
      <input value={color} onChange={(e) => onPickColor(e.target.value)} />
    </div>
  );
};
