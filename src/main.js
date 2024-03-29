import Vue from 'vue';
import App from './App.vue';
import {router} from './routes/index.js';
import {store} from './store/index.js';
import ChartPlugin from './plugins/ChartPlugin.js';

Vue.config.productionTip = false

Vue.use(ChartPlugin); //install() 속성 실행 


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
