import React from "react";

import * as Radix from "@radix-ui/react-tooltip";

type Props = {
  children: React.ReactNode;
  trigger: React.ReactNode;
};

export const Tooltip = (props: Props) => {
  return (
    <div>
      <Radix.Provider>
        <Radix.Root>
          <Radix.Trigger>{props.trigger}</Radix.Trigger>
          <Radix.Content>
            <Radix.Arrow className="fill-blue-400" />
            {props.children}
          </Radix.Content>
        </Radix.Root>
      </Radix.Provider>
    </div>
  );
};
