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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.

        // TODO: Replace this with basket page

        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Cart.vue'),
    },
]

const router = new VueRouter({
    routes,
})

export default router
