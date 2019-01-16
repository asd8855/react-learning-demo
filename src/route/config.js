import asyncComponent from './asyncComponent';
const _import_views = filePath => asyncComponent(() => {
    return import(`../pages/${filePath}`)
});

export const routerList = [
    {
        path: '/home',
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
    {
        path: '/charts',
        name: '图表',
        icon: 'el-icon-setting',
        layout: true,
        exact: false,
        redirect: '/charts/lineChart',
        children: [
            { path: '/charts/lineChart', component: _import_views('Rechart/Line'), name: 'LineChart' },
            { path: '/charts/barChart', component: _import_views('Rechart/Bar'), name: 'BarChart' },
        ]
    }
]


