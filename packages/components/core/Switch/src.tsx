import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  onChange?: (checked: boolean) => void;
  checked?: boolean;
};

export const Switch = ({ onChange, checked }: Props) => {
  const [isChecked, setIsChecked] = React.useState(checked || false);

  return (
    <div className="relative size-full flex bg-blue-950 rounded-[4px] ">
      <div
        className="absolute inset-2 bg-slate-400 rounded-[5px] cursor-pointer"
        onClick={() => setIsChecked(!isChecked)}
      >
        <div
          className={cn(
            "absolute w-full transition duration-200 rounded-full size-5 bg-orange-500",
            isChecked ? "translate-x-0" : "translate-x-12"
          )}
        ></div>
      </div>
    </div>
  );
};
