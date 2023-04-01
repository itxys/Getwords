import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);

// 将 axios 添加到 Vue 实例的原型中，这样就可以在组件内部使用 this.$axios 访问
app.config.globalProperties.$axios = axios;

// 将 App 挂载到页面的 #app 元素上
app.mount("#app");
