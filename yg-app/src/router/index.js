import Vue from 'vue'
import home from '../views/home'
import main from '../views/main'
import cla from '../views/classification'
import cart from '../views/cart'
import sale from '../views/SalesVolume'
import  baili from '../views/baili'
import  fou from '../views/found'
import detail from '../views/detail'
import personal from '../views/Personal'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/',redirect: '/main'
        },
        {
            path: '/main',
            component: main,
            children: [
                {   path: '',component: home },
                {   path: 'cla', component: cla  },
                {   path: 'cart', component: cart  },
                {   path: 'sale', component: sale  },
                {   path: 'detail', component: detail    },
                {   path: 'personal', component: personal    },
                {   path: 'baili', component: baili    },
                {   path: 'fou', component: fou    },
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
