import home from "@/pages/home";
import Search from "@/pages/search";
import Login from "@/pages/login";
import Register from "@/pages/register";
import Detail from "@/pages/detail";
import AddCartSuccess from "@/pages/addCartSuccess";
import ShopCart from "@/pages/shopCart";
import Trade from "@/pages/trade";
import Pay from "@/pages/pay";
import PaySuccess from "@/pages/paySuccess";
import Center from "@/pages/center";

import MyOrder from "@/pages/center/myOrder";
import TeamOrder from "@/pages/center/teamOrder";
export default [
  {
    path: "/home",
    name: "erha",
    component: home,
    meta: { show: true },
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: Search,
    meta: { show: true },
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/detail/:skuId?",
    component: Detail,
    meta: { show: true },
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    meta: { show: true },
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: { show: true },
  },
  {
    path: "/trade",
    component: Trade,
    meta: { show: true },
  },
  {
    path: "/pay",
    component: Pay,
    meta: { show: true },
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: { show: true },
  },
  {
    path: "/center",
    component: Center,
    meta: { show: true },
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "teamorder",
        component: TeamOrder,
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    path: "/communication",
    component: () => import("@/pages/Communication/Communication"),
    children: [
      {
        path: "event",
        component: () => import("@/pages/Communication/EventTest/EventTest"),
        meta: {
          show: false,
        },
      },
      {
        path: "model",
        component: () => import("@/pages/Communication/ModelTest/ModelTest"),
        meta: {
          show: false,
        },
      },
      {
        path: "sync",
        component: () => import("@/pages/Communication/SyncTest/SyncTest"),
        meta: {
          show: false,
        },
      },
      {
        path: "attrs-listeners",
        component: () =>
          import("@/pages/Communication/AttrsListenersTest/AttrsListenersTest"),
        meta: {
          show: false,
        },
      },
      {
        path: "children-parent",
        component: () =>
          import("@/pages/Communication/ChildrenParentTest/ChildrenParentTest"),
        meta: {
          show: false,
        },
      },
      {
        path: "scope-slot",
        component: () =>
          import("@/pages/Communication/ScopeSlotTest/ScopeSlotTest"),
        meta: {
          show: false,
        },
      },
    ],
  },
];
