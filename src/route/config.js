import asyncComponent from './asyncComponent';
const _import_views = filePath => asyncComponent(() => {
    console.log(`../pages/${filePath}`);
  return import(`../pages/${filePath}`)
});

export const routerList = [
    {
        path: '/',
        name: '首页',
        icon: 'el-icon-menu',
        layout: true,
        exact: true,
        component: _import_views('Home')
    },
    {
        path: '/about',
        name: '关于',
        icon: 'el-icon-setting',
        layout: true,
        exact: false,
        component: _import_views('About')
    },
]


