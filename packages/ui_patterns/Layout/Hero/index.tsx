"use client";
import React from "react";
import Component from "./component";
import Code from "./code";

type Props = {
  Usage: React.ElementType;
  Code: string;
};

const Hero = (props: Props) => {
  const [first, setstate] = React.useState(true);

  return (
    <div className="min-h-[250px] bg-slate-700">
      <button onClick={() => setstate(!first)}>Hello</button>
      {first && <Component Usage={props.Usage} />}
      {!first && <Code code={props.Code} />}
    </div>
  );
};

export default Hero;
