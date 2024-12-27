import * as Slug from "@repo/components";

import * as Template from "@repo/components/core/__template";

import * as Table from "@repo/components/core/Table";

interface Props {
  title: string;
  description: string;
  usage: React.ElementType;
  code: string;
  prop: Object;
}

export const data: { [key: string]: Props } = {
  table: {
    title: Table.Title,
    description: Table.Description,
    usage: Table.Usage,
    code: Table.code,
    prop: Table.Props,
  },
  template: {
    title: Template.Title,
    description: Template.Description,
    usage: Template.Usage,
    code: Template.code,
    prop: Template.Props,
  },
};
