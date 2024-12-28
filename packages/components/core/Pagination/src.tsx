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
  };

  return (
    <div className="w-1/3 h-20 rounded-full flex justify-around bg-blue-400">
      <button onClick={() => Click(currPage - 1)}>Left</button>
      <div></div>
      {[-1, 0, 1].map((add, idx) => (
        <button
          onClick={() => Click(currPage + add)}
          className="h-full w-5 rounded-full bg-blue-300"
        >
          {currPage + add}
        </button>
      ))}
      <button onClick={() => Click(currPage + 1)}>Right</button>
    </div>
  );
};
