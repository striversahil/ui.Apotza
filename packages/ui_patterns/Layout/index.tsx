import React from "react";
import Title_Description from "./title_description";
import Hero from "./Hero";

type Props = {
  title: string;
  description: string;
  Usage: React.ElementType;
  code: string;
  prop: Array<Object>;
};

const Code_Layout = ({ title, description, Usage, code, prop }: Props) => {
  return (
    <div className=" h-screen">
      <Title_Description title={title} description={description} />
      <Hero Usage={Usage} Code={code} />
    </div>
  );
};

export default Code_Layout;
