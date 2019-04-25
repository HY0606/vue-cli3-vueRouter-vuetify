import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../pages/home.vue'
import page from '../pages/page.vue'

Vue.use(Router)

export const routes = [
    {
        path: '/',
        component: () => import('@/pages/login'),
        name: '登录'
    },
    {
        path: '/page',
        component: page,
        name: '数据监控',
        meta: {
            title: '',
            requireAuth: true
        },
        children: [{
            path: '/',
            component: homePage,
            name: '监控首页'
        }]
    }
]
const router = new Router({ routes: routes })
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
        const token = sessionStorage.getItem('token')
        if (token === 'hy') { // 判断当前的token是否存在
            next()
        } else {
            next({
                path: '/',
                query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next()
    }
})
export default router
