"use client";
import Sidebar from "@/components/content/Sidebar";
import React, { useEffect, useState } from "react";
import { data } from "@repo/common";

type Props = {
  params: Promise<{ Comp_Id: string }>; // `params` is a Promise
};

export default function CompIdPage({ params }: Props) {
  const [Comp_Id, setComp_Id] = useState("");

  async function getProp() {
    const unwrappedParams = await params;
    const { Comp_Id } = unwrappedParams;
    setComp_Id(Comp_Id);
  }

  const Component: any = data[Comp_Id] || null;

  useEffect(() => {
    getProp();
  }, [Comp_Id]);

  return (
    <div>
      <div className="relative min-h-screen ">
        <div className="pl-[300px] pt-[150px]">
          {Component && <Component />}
          {!Component && Comp_Id.length > 0 && (
            <div className="font-bold flex justify-center items-center h-screen">
              Component Not Found
            </div>
          )}
          <div className="h-screen"></div>{" "}
        </div>
      </div>
    </div>
  );
}
