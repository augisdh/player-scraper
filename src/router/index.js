import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '@/components/LogIn'
import MainApp from '@/components/MainApp'
import About from '@/components/About'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/app',
      name: 'MainApp',
      component: MainApp,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/app/about',
      name: 'About',
      component: About,
      meta: {
        requiresAuth: true
      }
    }
  ],
  mode: 'history',
  linkExactActiveClass: 'is-active'
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('')
  else if (!requiresAuth && currentUser) next('app')
  else next()
})

export default router
