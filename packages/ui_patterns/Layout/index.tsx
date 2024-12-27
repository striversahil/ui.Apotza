import React from "react";
import Description from "./Description";

type Props = {
  title: string;
  description: string;
  Usage: React.ElementType;
  code: string;
  prop: Object;
};

const Code_Layout = ({ title, description, Usage, code, prop }: Props) => {
  return (
    <div className=" h-screen">
      <div className="mt-[100px] w-full h-[75px] bg-blue-400 text-bold text-2xl flex justify-center items-center rounded-xl">
        <div className="text-3xl font-bold uppercase">{title}</div>
      </div>
      <Description prop={description} />
      <Usage />
      {code}
    </div>
  );
};

export default Code_Layout;
