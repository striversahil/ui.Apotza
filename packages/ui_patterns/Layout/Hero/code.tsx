import React from "react";

type Props = {
  code: string;
};

const Code = (props: Props) => {
  return <div>{props.code}</div>;
};

export default Code;
