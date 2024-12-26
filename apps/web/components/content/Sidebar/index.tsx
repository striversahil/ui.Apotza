"use client";

import React from "react";

import * as Json from "@repo/common";
import Navigation_button from "./Button";

type Props = {};

const Sidebar = ({}: Props) => {
  return (
    <div className="relative left-0 my-40 w-[250px] rounded-xl overflow-y-auto bg-slate-600 hover:translate-x-5 ease-in-out duration-500">
      <div className=" sticky z-10 top-0 w-full h-[75px] mb-10 bg-blue-400 text-bold text-2xl flex justify-center items-center ">
        Components
        <span className="bg-slate-400 rounded-full">✨</span>
      </div>
      <div className="flex flex-col gap-5 my-6">
        {Json.data.map((item, index) => (
          <Navigation_button key={index} name={item.title} path={item.href} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
