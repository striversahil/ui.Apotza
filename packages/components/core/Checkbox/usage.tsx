import React from "react";
import { CheckBox } from "./src";

type Props = {};

export const Usage = (props: Props) => {
  return (
    <div className="">
      <CheckBox onChange={(checked) => console.log(checked)} />
    </div>
  );
};
