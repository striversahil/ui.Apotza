import React from "react";

type Props = {};

export const code = `
import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";

import { CheckIcon } from "@radix-ui/react-icons";

type CheckboxProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const Index = ({ checked, onChange }: CheckboxProps) => {
  const [isChecked, setIsChecked] = React.useState(checked || false);

  return (
    <div className="flex items-center">
      <Checkbox.Root
        checked={checked}
        className="p-2 w-10 h-10 rounded-[10px]  bg-blue-600/70 border-[3px] outline-none border-green-700 data-[state=checked]:bg-lime-500 transition-all duration-500 "
        onClick={() => {
          setIsChecked(!isChecked);
          onChange && onChange(!isChecked);
        }}
      >
        <Checkbox.Indicator className="text-white flex items-center justify-center scale-[1.8] ">
          {isChecked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeDasharray={24}
                strokeDashoffset={24}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3.9}
                d="M5 11L11 17L21 7"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.5s"
                  values="24;0"
                ></animate>
              </path>
            </svg>
          )}
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  );
};


`;
