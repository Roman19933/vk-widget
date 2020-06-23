import _ from "lodash";
import { Api } from "~/plugins/axios-rest-client";
const GET_SUBS = "GET_SUBS";

export const state = () => ({
  subs: null
});

export const getters = {
  subs: state => state.subs
};

export const actions = {
  async getHistory({ commit }, group_id) {
    return await Api[`payments?group_id=${group_id}`]();
  },
  async getSubs({ commit }, group_id) {
    try {
      let { data } = await Api[`subscription?group_id=${group_id}`]();
      commit("GET_SUBS", data.data);
    } catch (e) {
      console.log(e);
    }
  }
};

export const mutations = {
  [GET_SUBS](state, payload) {
    state.subs = payload;
  }
};
