import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  // scrollBehavior() {
  //   setTimeout(() => {
  //     return window.scrollTo({ top: 0 })
  //   }, 10)
  // },
  scrollBehavior(to, from, savedPosition) {
    setTimeout(() => {
      if (savedPosition) {
        return savedPosition
      } else {
        return window.scrollTo({ top: 0 })
      }
    }, 10)
  },
})

export default router
