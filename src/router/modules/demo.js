import Layout from '@/layout';

export default {
  path: '/demo',
  component: Layout,
  name: 'demo',
  redirect: '/demo/list',
  meta: {
    title: 'demo模块',
    icon: 'sidebar-menu'
  },
  children: [
    {
      path: '/demo/list',
      component: () => import(/* webpackChunkName: "demo" */ '@/views/demo/list'),
      name: 'list',
      meta: {
        title: 'list子模块',
        icon: 'eye',
        breadcrumb: false
      }
    },
    {
      path: '/demo/detail',
      component: () => import(/* webpackChunkName: "demo" */ '@/views/demo/detail'),
      name: 'detail',
      meta: {
        title: 'detail子模块',
        sidebar: false,
        breadcrumb: false,
        activeMenu: '/demo/list'
      }
    }
  ]
};
