import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

type Props = {
  code: string;
};

const Code = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2 rounded-3xl">
        <CodeBlock
          text={props.code}
          showLineNumbers={true}
          language="jsx"
          theme={dracula}
        />
      </div>
    </div>
  );
};

export default Code;