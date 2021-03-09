import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bsdk',
    name: 'BSDK',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bsdk.vue')
  },
  {
    path: '/ui',
    name: 'UI',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ui.vue')
  },
  {
    path: '/modules',
    name: 'Modules',
    component: () => import(/* webpackChunkName: "about" */ '../views/Modules.vue')
  },
  {
    path: '/repositories',
    name: 'Repositories',
    component: () => import(/* webpackChunkName: "about" */ '../views/Repositories.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
