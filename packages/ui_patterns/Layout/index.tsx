import React from "react";
import Description from "./Description";

type Props = {
  title: string;
  description: string;
  src: React.ElementType;
  usage: React.ElementType;
  href: string;
};

export const Code = ({
  title,
  description,
  src: Src,
  usage: Usage,
  href,
}: Props) => {
  return (
    <div className="h-full flex flex-col">
      <Description prop={description} />
      <Src />
      <Usage />
      {href}
    </div>
  );
};

export const Hello = "dick";
