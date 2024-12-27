import * as Slug from "@repo/components";

import * as Template from "@repo/components/core/__template";

import * as Sidebar from "@repo/components/core/Sidebar";

interface Props {
  title: string;
  description: string;
  usage: React.ElementType;
  code: string;
  prop: Object;
}

export const data: { [key: string]: Props } = {
  sidebar: {
    title: Sidebar.Title,
    description: Sidebar.Description,
    usage: Sidebar.Usage,
    code: Sidebar.code,
    prop: Sidebar.Props,
  },
  template: {
    title: Template.Title,
    description: Template.Description,
    usage: Template.Usage,
    code: Template.code,
    prop: Template.Props,
  },
};
