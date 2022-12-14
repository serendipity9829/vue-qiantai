import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
import routes from "./routes";

import store from "@/store";
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

VueRouter.prototype.replace = function(location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return {
      y: 0,
    };
  },
});

export default router;

router.beforeEach(async (to, from, next) => {
  let hasToken = store.state.user.token;
  let hasNickName = store.state.user.nickName;
  if (hasToken) {
    if (to.path == "/login") {
      next("/home");
    } else {
      if (hasNickName) {
        next();
      } else {
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          await store.dispatch("logout");
          next("/login");
        }
      }
    }
  } else {
    let toPath = to.path;
    if (
      toPath.indexOf("trade") != -1 ||
      toPath.indexOf("pay") != -1 ||
      toPath.indexOf("center") != -1
    ) {
      next("/login?redirect=" + toPath);
    } else {
      next();
    }
  }
});

// })
