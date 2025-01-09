import React from "react";
import { Tooltip } from "./src";

type Props = {};

export const Usage = (props: Props) => {
  const Trigger = (): React.ReactNode => {
    return (
      <div className="flex text-center px-3 py-2 bg-blue-900/50 rounded-[5px]">
        This is Trigger
      </div>
    );
  };

  return (
    <div className="w-1/3 h-[200px] bg-slate-800 flex justify-center items-center rounded-[10px]">
      <Tooltip tooltip_text="This is Tooltip">
        <div className="flex text-center px-3 py-2 bg-blue-900/50 rounded-[5px]">
          This is Trigger
        </div>
      </Tooltip>
    </div>
  );
};
