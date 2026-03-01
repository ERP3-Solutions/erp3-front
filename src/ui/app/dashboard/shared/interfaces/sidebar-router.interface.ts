import { IsActiveMatchOptions } from "@angular/router";

export interface SidebarRouterItemInterface {
  label: string;
  route: string;

  icon?: string;
  iconModule?: string;
  routerLinkActiveOptions?: { exact: boolean } | IsActiveMatchOptions;

  subItems?: SidebarRouterItemInterface[]
}