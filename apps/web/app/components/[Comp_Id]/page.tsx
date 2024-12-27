"use client";
import Sidebar from "@/components/content/Sidebar";
import Navbar from "@/components/Landing/Navbar";
import React, { useEffect, useState } from "react";
import { data } from "@repo/common";
import { Code_Layout } from "@repo/ui_patterns";

type Props = {
  params: Promise<{ Comp_Id: string }>; // `params` is a Promise
};

export default function CompIdPage({ params }: Props) {
  const [Comp_Id, setComp_Id] = useState("");
  // const [component, setcomponent] = useState(undefined);

  async function getProp() {
    const unwrappedParams = await params;
    const { Comp_Id } = unwrappedParams;
    setComp_Id(Comp_Id);
  }

  // Getting Component data Through Reference
  const component = data[Comp_Id] || null;
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

        <div className="flex-grow mt-[100px] mx-10">
          {component ? (
            <Code_Layout
              title={component.title}
              description={component.description}
              Usage={component.usage}
              code={component.code}
              prop={component.prop}
            />
          ) : (
            <div className="h-screen flex items-center justify-center">
              "404 Not Found"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
