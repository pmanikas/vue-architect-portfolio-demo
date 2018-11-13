import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from '@router'
import PrismicVue from 'prismic-vue'
import linkResolver from '@utils/link-resolver'
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
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueCarousel)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease-in-out',
  offset: 0,
  force: true,
  cancelable: false,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})
Vue.use(Meta)
Vue.use(VeeValidate)
Vue.use(VueAxios, axios)

const accessToken ='MC5XLXNxNFJJQUFCOEEwN1Iy.Q3Tvv73vv73vv73vv73vv70x77-9de-_ve-_ve-_ve-_ve-_ve-_ve-_vUEi77-977-977-9ciAIde-_vUxlCu-_ve-_vQ'

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  apiOptions: { accessToken }
});

Vue.component('BaseVerLine', BaseVerLine)
Vue.component('BaseHorLine', BaseHorLine)
Vue.component('BaseArrowBack', BaseArrowBack)
Vue.component('BaseButton', BaseButton)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

