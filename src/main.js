import Vue from 'vue'
import App from './App.vue'
import router from '@router'

import BaseVerLine from '@ui-components/BaseVerLine.vue'
import BaseHorLine from '@ui-components/BaseHorLine.vue'

Vue.config.productionTip = false

Vue.component('BaseVerLine', BaseVerLine)
Vue.component('BaseHorLine', BaseHorLine)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')