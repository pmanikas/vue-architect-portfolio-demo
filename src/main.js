import Vue from 'vue'
import App from './App.vue'
import router from '@router'
import Meta from 'vue-meta'
import VueCarousel from 'vue-carousel'
import BaseVerLine from '@ui-components/BaseVerLine.vue'
import BaseHorLine from '@ui-components/BaseHorLine.vue'
import BaseArrowBack from '@ui-components/BaseArrowBack.vue'
import BaseButton from '@ui-components/BaseButton.vue'
import VueScrollTo from 'vue-scrollto'
import VeeValidate from 'vee-validate'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
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
Vue.use(Meta)
Vue.use(VeeValidate)
Vue.use(VueAxios, axios)

Vue.component('BaseVerLine', BaseVerLine)
Vue.component('BaseHorLine', BaseHorLine)
Vue.component('BaseArrowBack', BaseArrowBack)
Vue.component('BaseButton', BaseButton)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
