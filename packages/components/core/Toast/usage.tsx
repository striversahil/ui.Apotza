import React from "react";
import { toast } from "./src";

type Props = {};

export const Usage = (props: Props) => {
  return (
    <div>
      <div className="flex items-center gap-4 flex-col md:flex-row *:p-2 *px-6 *:rounded-lg *:border-2 active:*:scale-95 *:transition-all">
        <button
          className="text-[#06b6d4] bg-[#F5F8FF] dark:bg-[#1f2937] border-2  border-[#06b6d4]/50 "
          type="default"
        >
          Default
        </button>
        <button
          className="text-green-500 bg-[#F5F8FF] dark:bg-[#1f2937] border-2  border-green-500/50"
          type="default"
        >
          Success
        </button>
        <button
          className="text-red-500 bg-[#F5F8FF] dark:bg-[#1f2937] border-2  border-red-500/50"
          type="default"
        >
          Error
        </button>
        <button
          className="text-yellow-500 bg-[#F5F8FF] dark:bg-[#1f2937] border-2  border-yellow-500/50"
          type="default"
        >
          Warning
        </button>
        <button
          className="text-blue-500 bg-[#F5F8FF] dark:bg-[#1f2937] border-2  border-blue-500/50"
          type="default"
        >
          Info
        </button>
      </div>
    </div>
  );
};
