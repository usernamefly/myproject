import Vue from 'vue'
import home from '../views/home'
import main from '../views/main'
import cla from '../views/classification'
import cart from '../views/cart'
import login from '../views/login'
import  baili from '../views/baili'
import  fou from '../views/found'
import detail from '../views/detail'
import personal from '../views/Personal'
import VueRouter from 'vue-router'
import logins from "../components/login/logins"
import logregister from "../components/login/log-register"
Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {   path: '/login', component: login,
            children:[
                {path: '/login', redirect: logins},
                {path:'logins',component:logins},
                {path:'logregister',component:logregister}
            ]
        },
        {   path: '/detail', component: detail   },
        {   path: '/baili', component: baili   },
        {
            path: '/',redirect: '/main'
        },
        {
            path: '/main',
            component: main,
            children: [
                {   path: '/',component: home },
                {   path: 'cla', component: cla  },
                {   path: 'cart', component: cart  },
                {   path: 'personal', component: personal   },
                {   path: 'fou', component: fou   },
            ]
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
