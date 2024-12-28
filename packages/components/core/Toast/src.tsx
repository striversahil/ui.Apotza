import React from "react";

type Props = {
  message: string;
  type: string;
};

const container = () => {
  const contain = document.createElement("div");
  contain.classList.add("toast-container");
  contain.className = "fixed bottom-0 right-0 z-50 flex flex-col gap-4";
  return contain;
};

const removecontainer = () => {
  const contain = document.querySelector(".toast-container");
  if (!contain) return;
  document.removeChild(contain);
};

const createToast = () => {
  const container = document.createElement("div");
  container.className =
    "w-full max-w-xs h-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";
  return container;
};
createToast();

export const toast = (props: Props) => {
  return <div>Index</div>;
};
