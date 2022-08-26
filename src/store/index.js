import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

import home from "./home";
import search from "./search";
import detail from "./detail";
import user from "./user";
import shopcart from "./shopcart";
import trade from "./trade";

export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    user,
    shopcart,
    trade,
  },
});
