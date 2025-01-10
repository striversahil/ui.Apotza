import * as Slug from "@repo/components";

import Template_Usage from "@repo/components/core/__template";

import * as Table from "@repo/components/core/Table";
import * as Pagination from "@repo/components/core/Pagination";
import * as Toast from "@repo/components/core/Toast";
import * as Checkbox from "@repo/components/core/Checkbox";
import * as Dialog from "@repo/components/core/DialogBox";
import * as Switch from "@repo/components/core/Switch";
import * as Tooltip from "@repo/components/core/Tooltip";

interface Props {
  // title: string;
  // description: string;
  // usage: React.ElementType;
  // code: string;
  // prop: Object;
}

export const data: { [key: string]: Props } = {
  table: Table.Usage,
  pagination: Pagination.Usage,
  toast: Toast.Usage,
  checkbox: Checkbox.Usage,
  dialog_box: Dialog.Usage,
  switch: Switch.Usage,
  tooltip: Tooltip.Usage,
  template: Template_Usage,

  // pagination: {
  //   title: Pagination.Title,
  //   description: Pagination.Description,
  //   usage: Pagination.Usage,
  //   code: Pagination.code,
  //   prop: Pagination.Props,
  // },
  // toast: {
  //   title: Toast.Title,
  //   description: Toast.Description,
  //   usage: Toast.Usage,
  //   code: Toast.code,
  //   prop: Toast.Props,
  // },
  // checkbox: {
  //   title: Checkbox.Title,
  //   description: Checkbox.Description,
  //   usage: Checkbox.Usage,
  //   code: Checkbox.code,
  //   prop: Checkbox.Props,
  // },
  // dialog_box: {
  //   title: Dialog.Title,
  //   description: Dialog.Description,
  //   usage: Dialog.Usage,
  //   code: Dialog.code,
  //   prop: Dialog.Props,
  // },
  // switch: {
  //   title: Switch.Title,
  //   description: Switch.Description,
  //   usage: Switch.Usage,
  //   code: Switch.code,
  //   prop: Switch.Props,
  // },
  // tooltip: {
  //   title: Tooltip.Title,
  //   description: Tooltip.Description,
  //   usage: Tooltip.Usage,
  //   code: Tooltip.code,
  //   prop: Tooltip.Props,
  // },
};
