import React from "react";
import Brand_logo from "../../ui/brand_logo";

type Props = {};

const Absolute_footer = (props: Props) => {
  return (
    <div className="relative top-0 flex top-15 h-28 justify-center bg-gradient-to-tr from-transparent to-blue-950 items-center gap-[100px]">
      <Brand_logo />
      <div className="text-gray-400 text-center">© 2025 Apotza UI KIT</div>
      <div className="h-[50px]"></div>
    </div>
  );
};

export default Absolute_footer;
