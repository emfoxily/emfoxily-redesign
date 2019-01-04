import Vue from 'vue'
import VueMq from 'vue-mq'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
