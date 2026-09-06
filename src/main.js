import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import Echart from "./components/echart/index.vue";
import ItemWrap from "./components/item-wrap/item-wrap.vue";
import Message from "./components/message/message.vue";
import Reacquire from "./components/reacquire/reacquire.vue";
import Messages from "./components/message/message";
import "element-ui/lib/theme-chalk/index.css";
import "vue-easytable/libs/theme-default/index.css";
import "@/assets/css/public.scss";
import "@/assets/css/index.scss";
import * as filters from "@/directives/filters";

// 当前项目默认启用本地 mock，切真实接口时可以从这里切换。
require("./mock/mock");

Vue.config.productionTip = false;

// 大屏里高频复用的组件统一做全局注册，页面层可以直接使用。
[
  ["Echart", Echart],
  ["ItemWrap", ItemWrap],
  ["Message", Message],
  ["Reacquire", Reacquire],
].forEach(([name, component]) => Vue.component(name, component));

// 全局过滤器集中挂载，保持模板层调用方式一致。
Object.entries(filters).forEach(([name, filter]) => Vue.filter(name, filter));

// 自定义消息方法挂到 Vue 原型，组件内部直接 this.$Message 调用。
Vue.prototype.$Message = Messages;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
