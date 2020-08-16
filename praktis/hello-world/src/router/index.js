import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from "../views/Auth.vue"
import Dashboard from "../views/Dashboard";
import store from '@/store/index'

Vue.use(VueRouter)

  const routes = [
  {
      path: '/',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
