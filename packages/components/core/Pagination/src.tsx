"use client";
import React from "react";

type Props = {
  totalPages: number;
  initialPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
};

export const Index = ({
  totalPages,
  initialPage = 1,
  currentPage = 1,
  onPageChange = () => {},
}: Props) => {
  const [currPage, setCurrPage] = React.useState(currentPage);

  const Click = (num: number) => {
    setCurrPage(num);
    onPageChange(num);
  };

  const Button = ({
    prop,
    slug,
  }: {
    prop: number;
    slug: string;
  }): React.ReactNode => (
    <div className="flex items-center ">
      <button
        onClick={() => {
          Click(currPage + prop);
        }}
        className="p-2 rounded-full bg-blue-500 mx-2 hover:bg-blue-700 "
      >
        {slug}
      </button>
    </div>
  );

  return (
    <div className="w-1/3 h-20 rounded-full flex justify-evenly bg-gradient-to-l from-blue-900 to-transparent border border-yellow-500">
      <Button prop={-1} slug={"Left"} />
      <div className="flex items-center justify-around w-full ">
        {[-1, 0, 1].map((add, idx) => (
          <button
            onClick={() => Click(currPage + add)}
            className="h-fit w-10  p-2 rounded-full text-blue-200 hover:bg-blue-300/55"
            key={idx}
          >
            {currPage + add}
          </button>
        ))}
      </div>
      <Button prop={1} slug={"Right"} />
    </div>
  );
};
