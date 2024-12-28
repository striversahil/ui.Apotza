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
      <div className="text-center flex align-middle h-full">{currPage - 1}</div>
      <div className="text-center flex align-middle h-full">{currPage}</div>
      <div className="text-center flex align-middle h-full">{currPage + 1}</div>
      <button onClick={() => Click(currPage + 1)}>Right</button>
    </div>
  );
};
