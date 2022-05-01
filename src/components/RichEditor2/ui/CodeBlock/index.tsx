import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';
import './codeblock.scss';

type Props = {
  node: any;
  extension: any;
  updateAttributes: any;
};

export const CodeBlock: React.VFC<Props> = ({
  node,
  extension,
  updateAttributes,
}) => {
  return (
    <NodeViewWrapper className="code-block">
      <select
        contentEditable={false}
        defaultValue={node.attrs.language}
        onChange={(event) => updateAttributes({ language: event.target.value })}
      >
        <option value="null">auto</option>
        <option disabled>—</option>
        {extension.options.lowlight
          .listLanguages()
          .map((lang: string, index: number) => (
            <option key={index} value={lang}>
              {lang}
            </option>
          ))}
      </select>
      <pre>
        <NodeViewContent as="code" />
      </pre>
    </NodeViewWrapper>
  );
};
