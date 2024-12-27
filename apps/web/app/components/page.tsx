"use client";
import Page from "@/components/content/pages";
import Sidebar from "@/components/content/Sidebar";
import Navbar from "@/components/Landing/Navbar";
import React, { useEffect, useState } from "react";
import * as Json from "@repo/common";

type Props = {
  params: Promise<{ Comp_Id: string }>; // `params` is a Promise
};

export default function CompIdPage({ params }: Props) {
  const [Comp_Id, setComp_Id] = useState("");
  const [component, setcomponent] = useState(undefined);

  async function getProp() {
    const unwrappedParams = await params;
    const { Comp_Id } = unwrappedParams;
    setComp_Id(Comp_Id);
    setcomponent(Json.data.find((comp) => comp.href === Comp_Id));
  }

  useEffect(() => {
    getProp();
    // console.log(component)
  }, []);

  // const [text, setText] = useState('');

  return (
    <div>
      <Navbar />
      <div className="flex h-screen bg-gradient-to-tl from-blue-950 to-transparent">
        <Sidebar />

        <div className=" flex-grow">
          {component ? (
            <Page
              title={component.title}
              description={component.description}
              src={component.src}
              usage={component.usage}
              href={component.href}
            />
          ) : (
            <div className="h-screen flex items-center justify-center">
              {" <--  "}Please Check Components listed in Sidebar
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
