import Vue from 'vue'
import App from './App.vue'
import router from '@router'
import BaseVerLine from '@ui-components/BaseVerLine.vue'
import BaseHorLine from '@ui-components/BaseHorLine.vue'
import BaseArrowBack from '@ui-components/BaseArrowBack.vue'

var VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease-in-out',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})

Vue.config.productionTip = false

Vue.component('BaseVerLine', BaseVerLine)
Vue.component('BaseHorLine', BaseHorLine)
Vue.component('BaseArrowBack', BaseArrowBack)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
