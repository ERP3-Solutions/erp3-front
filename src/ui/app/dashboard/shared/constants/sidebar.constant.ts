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
        subItems: [
          {
            label: 'Point of sales',
            route: '/dashboard/sales/point-sales',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'Vouchers',
            route: '/dashboard/sales/vouchers',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'Boxes',
            route: '/dashboard/sales/boxes',
            routerLinkActiveOptions: { exact: false },
          },
        ]
      },
      {
        label: 'Finances',
        route: '/dashboard/finance',
        icon: 'filled-account-balance',
        iconModule: 'dashboard',
        routerLinkActiveOptions: { exact: false },
        subItems: [
          {
            label: 'Accounts',
            route: '/dashboard/finance/accounts',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'Payment methods',
            route: '/dashboard/finance/methods',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'Payment conditions',
            route: '/dashboard/finance/conditions',
            routerLinkActiveOptions: { exact: false },
          },
        ]
      },
      {
        label: 'Logistic',
        route: '/dashboard/logistic',
        icon: 'filled-stack',
        iconModule: 'dashboard',
        routerLinkActiveOptions: { exact: false },
        subItems: [
          {
            label: 'Warehouses',
            route: '/dashboard/logistic/warehouses',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'Products',
            route: '/dashboard/logistic/products',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'Categories',
            route: '/dashboard/logistic/categories',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'List of prices',
            route: '/dashboard/logistic/list-prices',
            routerLinkActiveOptions: { exact: false },
          },
        ]
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
        subItems: [
          {
            label: 'Users',
            route: '/dashboard/security/users',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'Roles',
            route: '/dashboard/security/roles',
            routerLinkActiveOptions: { exact: false },
          },
        ]
      },
      {
        label: 'Organization',
        route: '/dashboard/organization',
        icon: 'corporation',
        iconModule: 'dashboard',
        subItems: [
          {
            label: 'Electronic series',
            route: '/dashboard/organization/series',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'Brances',
            route: '/dashboard/organization/branches',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'User profile',
            route: '/dashboard/organization/user-profile',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'Organization profile',
            route: '/dashboard/organization/organization-profile',
            routerLinkActiveOptions: { exact: false },
          },
        ]
      },
    ],
  },
];
