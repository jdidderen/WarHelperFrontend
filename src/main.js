import Vue from 'vue'
import App from './App.vue'
import './site.scss'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from "@/routes";
import store from './store';

Vue.use(Buefy)

Vue.config.productionTip = true

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
