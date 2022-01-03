import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Form,Field,Button} from 'vant';
import 'vant/lib/index.css';

Vue.use(Form);
Vue.use(Field);
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
