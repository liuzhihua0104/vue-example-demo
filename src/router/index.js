import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/vuedraggable',
    name: 'vuedraggable',
    // component: Home
    component: () => import(/* webpackChunkName: "about" */ '../views/Vuedraggable.vue')

  },
  {
    path: '/',
    name: 'turntable',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Turntable.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
