import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css' //追加
import 'bootstrap-vue/dist/bootstrap-vue.css' //追加

Vue.use(BootstrapVue) //追加
Vue.use(IconsPlugin) //追加
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
