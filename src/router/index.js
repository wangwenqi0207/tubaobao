import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index',
        name: 'Home',
        component: () => import('../components/layout/index.vue'),
        children: [
            {
                path: '/index',
                name: 'Index',
                meta: {
                    title: '兔宝宝家具-首页',
                },
                component: () => import('../views/index/index.vue'),
            },

            {
                path: '/about',
                name: 'About',
                meta: {
                    title: '兔宝宝家具-关于我们',
                },
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.about
                component: () => import(
                    /* webpackChunkName: "about" */ '../views/about/index.vue'
                ),
            },
            {
                path: '/product',
                name: 'Product',
                meta: {
                    title: '兔宝宝家具-产品中心',
                },
                component: () => import('../views/product/index.vue'),
            },
            {
                path: '/contact',
                name: 'Contact',
                meta: {
                    title: '兔宝宝家具-联系我们',
                },
                component: () => import('../views/contact/index.vue'),
            },
            {
                path: '/recruitment',
                name: 'Recruitment',
                meta: {
                    title: '兔宝宝家具-人才招聘',
                },
                component: () => import('../views/recruitment/index.vue'),
            },
            {
                path: '/news',
                name: 'News',
                meta: {
                    title: '兔宝宝家具-新闻中心',
                },
                component: () => import('../views/news/index.vue'),
            },
            {
                path: '/newsdetails/:id',
                name: 'NewsDetails',
                meta: {
                    title: '兔宝宝家具-新闻详情',
                },
                component: () => import('../views/newsDetails/index.vue'),
            },
        ],
    },
]

const router = new VueRouter({
    routes,
    // mode: 'history',
})
router.beforeEach((to, from, next) => {
    // console.log('to :>> ', to)
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router
