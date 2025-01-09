import React from "react";

import * as Dialog from "@radix-ui/react-dialog";

type Props = {
  children: React.ReactNode;
};

export const Index = (props: Props) => {
  return (
    <div>
      <Dialog.Root>{props.children}</Dialog.Root>
    </div>
  );
};
