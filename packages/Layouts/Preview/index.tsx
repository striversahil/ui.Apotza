import React from "react";
import * as Sidebar from "@repo/ui/shadcn_ui/sidebar";

type Props = {
  code: string;
  children: React.ReactNode;
};

const PreviewCode = (props: Props) => {
  return (
    <div>
      PreviewCode
      <Sidebar.Sidebar>{props.children}</Sidebar.Sidebar>
    </div>
  );
};

export default PreviewCode;
