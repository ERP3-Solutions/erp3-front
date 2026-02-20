import { SidebarRouterGroupInterface } from "../interfaces/sidebar-router-group.interface";

export const SidebarItemsConstant: SidebarRouterGroupInterface[] = [
  {
    title: 'Dashboard',
    items: [
      {
        label: 'Home',
        route: '/dashboard/home',
        icon: 'filled-dashboard',
        iconModule: 'dashboard',
        routerLinkActiveOptions: { exact: false },
      },
      {
        label: 'Sales',
        route: '/dashboard/sales',
        icon: 'filled-store',
        iconModule: 'dashboard',
        routerLinkActiveOptions: { exact: false },
      },
      {
        label: 'Finances',
        route: '/dashboard/finance',
        icon: 'filled-account-balance',
        iconModule: 'dashboard',
        routerLinkActiveOptions: { exact: false },
      },
      {
        label: 'Logistic',
        route: '/dashboard/logistic',
        icon: 'filled-stack',
        iconModule: 'dashboard',
        routerLinkActiveOptions: { exact: false },
      },
    ],
  },
  {
    title: 'Management',
    items: [
      {
        label: 'Security',
        route: '/dashboard/security',
        icon: 'filled-security',
        iconModule: 'dashboard',
      },
      {
        label: 'Organization',
        route: '/dashboard/organization',
        icon: 'corporation',
        iconModule: 'dashboard',
      },
    ],
  },
];
