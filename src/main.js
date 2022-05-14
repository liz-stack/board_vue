import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import page from '@/plugins/page'
import vueMoment from 'vue-moment'
import Button from '@/components/common/Button'

Vue.config.productionTip = true
Vue.component('Button', Button)
Vue.use(page)
Vue.use(vueMoment)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
