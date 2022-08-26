import Vue from "vue";
import App from "./App.vue";

import Header from "@/components/header";
import Footer from "@/components/footer";
import TypeNav from "@/components/typeNav";
import Pagination from "@/components/pagination";
import HintButton from "@/components/hintButton";
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);
Vue.component(TypeNav.name, TypeNav);
Vue.component(Pagination.name, Pagination);
Vue.component(HintButton.name, HintButton);
import { Button, Row, Col, MessageBox, Message, Input } from "element-ui";
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.prototype.$message = Message;
import router from "./router";
import store from "./store";

import "@/mock/mockServe.js";

import * as http from "@/api";
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$http = http;
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
