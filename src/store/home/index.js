import { reqCategory, reqBannerList, reqFloorList } from "@/api";
let state = {
  category: [],
  bannerList: [],
  floorList: [],
};
let mutations = {
  GETCATEGORY(state, category) {
    state.category = category;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
let actions = {
  async getCategory({ commit, state, dispatch }) {
    let result = await reqCategory();
    if (result.code == 200) {
      commit("GETCATEGORY", result.data);
    }
  },
  async getBannerList({ commit, state, dispatch }) {
    let result = await reqBannerList();
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
  async getFloorList({ commit, state, dispatch }) {
    let result = await reqFloorList();
    if (result.code == 200) {
      commit("GETFLOORLIST", result.data);
    }
  },
};
let getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
