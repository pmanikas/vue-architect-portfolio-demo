import Vue from 'vue'
import App from './App.vue'
import router from '@router'
import VueCarousel from 'vue-carousel'
import BaseVerLine from '@ui-components/BaseVerLine.vue'
import BaseHorLine from '@ui-components/BaseHorLine.vue'
import BaseArrowBack from '@ui-components/BaseArrowBack.vue'
import BaseButton from '@ui-components/BaseButton.vue'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false

Vue.use(VueCarousel)
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

Vue.component('BaseVerLine', BaseVerLine)
Vue.component('BaseHorLine', BaseHorLine)
Vue.component('BaseArrowBack', BaseArrowBack)
Vue.component('BaseButton', BaseButton)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
