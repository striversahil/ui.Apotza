import React from "react";

type Props = {
  title: string;
  description: string;
};

const Title_Description = ({ title, description }: Props) => {
  return (
    <div>
      <div className="w-full mt-[100px]  text-bold bg-slate-500 ">
        <div className="text-5xl font-bold text-red-600">{title}</div>
      </div>
      <div className="py-10">
        <span className=" px-4 text-gray-400 ">{description}</span>
      </div>
    </div>
  );
};

export default Title_Description;
