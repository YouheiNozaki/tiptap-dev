import { useState, useCallback } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import type { Editor } from '@tiptap/react';

type Props = {
  editor: Editor;
};

export const ColorPicker: React.VFC<Props> = ({ editor }) => {
  const selectColor: string = editor.getAttributes('textStyle').color;
  const [color, setColor] = useState<string>('#1c1a1a');

  const onPickColor = useCallback(
    (newColor: string) => {
      setColor(newColor);
      editor.commands.setColor(newColor);
    },
    [editor],
  );

  return (
    <div>
      <HexColorPicker
        color={selectColor ? selectColor : color}
        onChange={(newColor) => onPickColor(newColor)}
      />
      <HexColorInput
        color={selectColor ? selectColor : color}
        onChange={(newColor) => onPickColor(newColor)}
      />
    </div>
  );
};
