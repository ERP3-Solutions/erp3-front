import { SidebarRouterGroupInterface } from "../interfaces/sidebar-router-group.interface";

export const SidebarItemsConstant: SidebarRouterGroupInterface[] = [
  {
    title: 'dashboard.fragments_sidebar.dashboard',
    items: [
      {
        label: 'dashboard.fragments_sidebar.home',
        route: '/dashboard/home',
        icon: 'filled-dashboard',
        iconModule: 'dashboard',
        routerLinkActiveOptions: { exact: false },
      },
      {
        label: 'dashboard.fragments_sidebar.sales',
        route: '/dashboard/sales',
        icon: 'filled-store',
        iconModule: 'dashboard',
        routerLinkActiveOptions: { exact: false },
        subItems: [
          {
            label: 'dashboard.fragments_sidebar.sales_pos',
            route: '/dashboard/sales/point-sales',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'dashboard.fragments_sidebar.sales_vouchers',
            route: '/dashboard/sales/vouchers',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'dashboard.fragments_sidebar.sales_boxes',
            route: '/dashboard/sales/boxes',
            routerLinkActiveOptions: { exact: false },
          },
        ]
      },
      {
        label: 'dashboard.fragments_sidebar.finances',
        route: '/dashboard/finance',
        icon: 'filled-account-balance',
        iconModule: 'dashboard',
        routerLinkActiveOptions: { exact: false },
        subItems: [
          {
            label: 'dashboard.fragments_sidebar.finances_accounts',
            route: '/dashboard/finance/accounts',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'dashboard.fragments_sidebar.finances_payment-methods',
            route: '/dashboard/finance/methods',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'dashboard.fragments_sidebar.finances_payment-conditions',
            route: '/dashboard/finance/conditions',
            routerLinkActiveOptions: { exact: false },
          },
        ]
      },
      {
        label: 'dashboard.fragments_sidebar.logistic',
        route: '/dashboard/logistic',
        icon: 'filled-stack',
        iconModule: 'dashboard',
        routerLinkActiveOptions: { exact: false },
        subItems: [
          {
            label: 'dashboard.fragments_sidebar.logistic_warehouses',
            route: '/dashboard/logistic/warehouses',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'dashboard.fragments_sidebar.logistic_products',
            route: '/dashboard/logistic/products',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'dashboard.fragments_sidebar.logistic_categories',
            route: '/dashboard/logistic/categories',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'dashboard.fragments_sidebar.logistic_lop',
            route: '/dashboard/logistic/list-prices',
            routerLinkActiveOptions: { exact: false },
          },
        ]
      },
    ],
  },
  {
    title: 'dashboard.fragments_sidebar.management',
    items: [
      {
        label: 'dashboard.fragments_sidebar.security',
        route: '/dashboard/security',
        icon: 'filled-security',
        iconModule: 'dashboard',
        subItems: [
          {
            label: 'dashboard.fragments_sidebar.security_users',
            route: '/dashboard/security/users',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'dashboard.fragments_sidebar.security_roles',
            route: '/dashboard/security/roles',
            routerLinkActiveOptions: { exact: false },
          },
        ]
      },
      {
        label: 'dashboard.fragments_sidebar.organization',
        route: '/dashboard/organization',
        icon: 'corporation',
        iconModule: 'dashboard',
        subItems: [
          {
            label: 'dashboard.fragments_sidebar.organization_electronic-series',
            route: '/dashboard/organization/series',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'dashboard.fragments_sidebar.organization_branches',
            route: '/dashboard/organization/branches',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'dashboard.fragments_sidebar.organization_user-profile',
            route: '/dashboard/organization/user-profile',
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'dashboard.fragments_sidebar.organization_organization-profile',
            route: '/dashboard/organization/organization-profile',
            routerLinkActiveOptions: { exact: false },
          },
        ]
      },
    ],
  },
];
