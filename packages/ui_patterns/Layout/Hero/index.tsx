import React from "react";
import Component from "./component";

type Props = {
  Usage: React.ElementType;
};

const Hero = (props: Props) => {
  return (
    <div className="min-h-[250px] bg-slate-700">
      <Component Usage={props.Usage} />
    </div>
  );
};

export default Hero;
