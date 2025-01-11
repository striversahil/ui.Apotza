import React from "react";

type Props = {
  title: string;
  description: string;
};

const TitleDescription = (props: Props) => {
  return (
    <div>
      {" "}
      <div>
        <div className="w-full mt-[100px] ">
          <span className="text-5xl font-bold from-blue-500  to-sky-200 bg-clip-text bg-gradient-to-r text-transparent">
            {props.title}
          </span>
        </div>
        <div className="mt-7 mb-4">
          <span className="px-4 text-gray-400 ">{props.description}</span>
        </div>
      </div>
    </div>
  );
};

export default TitleDescription;
