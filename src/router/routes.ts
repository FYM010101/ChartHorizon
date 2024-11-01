export const constantRoute = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '',
      hidden: false,
      icon: '',
    },
    redirect: '/home', // 默认重定向到 item1
    children: [
      {
        path: '/home', // 修改为相对路径
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/chart1',
    component: () => import('@/layout/index.vue'),
    name: 'Chart1',
    meta: {
      title: '类别1',
      icon: 'User',
    },
    children: [
      {
        path: '/chart1/item1', // 修改为相对路径
        component: () => import('@/views/chart1/item1/index.vue'),
        name: 'Item1',
        meta: {
          title: '图表1',
          icon: 'User',
        },
      },
      {
        path: '/chart1/item2', // 修改为相对路径
        component: () => import('@/views/chart1/item2/index.vue'),
        name: 'Item2',
        meta: {
          title: '图表2',
          icon: 'User',
        },
      },
      {
        path: '/chart1/item3', // 修改为相对路径
        component: () => import('@/views/chart1/item3/index.vue'),
        name: 'Item3',
        meta: {
          title: '图表3',
          icon: 'User',
        },
      },
    ],
  },
  {
    path: '/chart2',
    component: () => import('@/layout/index.vue'),
    name: 'Chart2',
    meta: {
      title: '类别2',
      icon: 'User',
    },
    children: [
      {
        path: '/chart2/item1', // 修改为相对路径
        component: () => import('@/views/chart2/item1/index.vue'),
        name: 'Item1_Chart2',
        meta: {
          title: '图表1',
          icon: 'User',
        },
      },
      {
        path: '/chart2/item2', // 修改为相对路径
        component: () => import('@/views/chart2/item2/index.vue'),
        name: 'Item2_Chart2',
        meta: {
          title: '图表2',
          icon: 'User',
        },
      },
      {
        path: '/chart2/item3', // 修改为相对路径
        component: () => import('@/views/chart2/item3/index.vue'),
        name: 'Item3_Chart2',
        meta: {
          title: '图表3',
          icon: 'User',
        },
      },
    ],
  },
];
