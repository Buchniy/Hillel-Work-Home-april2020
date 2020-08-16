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

// to - куда идем
// from -- откуда
// next()
router.beforeEach((to, from, next) => {
    const isAuth = store.getters['GET_IS_AUTH'];

    if(!isAuth && to.name.toLowerCase() != 'auth') {
        router.push('/');
    } else {
        next();
    }
})

export default router
