import { reqDetailList, reqAddOrUpdateCart } from "@/api";
let state = {
  detailInfo: {},
};
let mutations = {
  GETDETAILINFO(state, detailInfo) {
    state.detailInfo = detailInfo;
  },
};
let actions = {
  async getDetailInfo({ state, commit, dispatch }, skuId) {
    let result = await reqDetailList(skuId);
    if (result.code == 200) {
      commit("GETDETAILINFO", result.data);
    }
  },
  async addOrUpdateCart({ state, commit, dispatch }, { skuId, skuNum }) {
    let result = await reqAddOrUpdateCart(skuId, skuNum);

    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject();
    }
  },
};
let getters = {
  categoryView(state) {
    return state.detailInfo.categoryView || {};
  },
  skuInfo() {
    return state.detailInfo.skuInfo || {};
  },
  spuSaleAttrList() {
    return state.detailInfo.spuSaleAttrList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
