import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from '../views/Shop.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Shop',
        component: Shop,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Cart.vue'),
    },
]

const router = new VueRouter({
    routes,
})

export default router
