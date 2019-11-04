import Vue from 'vue'
import home from '../views/home'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/',redirect: '/main'
        },
        {
            path: '/main', component: home,
        }
    ]
})

// 全局路由guard 前置guard user ->main -> login
/*router.beforeEach((to, from, next) => {
    console.log(to.path) // to from $route
    console.log(from.path)
    // let token = localStorage.getItem('token')
    next()
    // if (token) {
    //   next('/main')
    // } else {
    //   next('/login')
    // }
})

router.afterEach((to, from) => {
    // window.confirm('您真的需要退出吗!')
    console.log('afterEach')
})*/

export default router
