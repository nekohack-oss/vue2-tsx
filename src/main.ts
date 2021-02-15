import Vue from 'vue'
import App from './App'

import './assets/main.css'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
