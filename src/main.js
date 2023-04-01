import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.use(VueAxios, axios)


// 将 axios 添加到 Vue 实例的原型中，这样就可以在组件内部使用 this.$axios 访问
const app = createApp(App);
app.config.globalProperties.$axios = axios;

// 使用 Vue Router
app.use(router);

// 将 App 挂载到页面的 #app 元素上
app.mount("#app");
