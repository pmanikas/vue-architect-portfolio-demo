import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior() {
    setTimeout(() => {
      return window.scrollTo({ top: 0 })
    }, 10)
  },
})

export default router
