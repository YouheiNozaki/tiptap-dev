import { useState, useCallback } from 'react';
import { HexColorPicker } from 'react-colorful';
import type { Editor } from '@tiptap/react';

type Props = {
  editor: Editor;
};

export const BackgroundColorPicker: React.VFC<Props> = ({ editor }) => {
  const selectColor: string = editor.getAttributes('textStyle').color;
  const [color, setColor] = useState<string>(
    selectColor ? selectColor : '#1c1a1a',
  );

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
