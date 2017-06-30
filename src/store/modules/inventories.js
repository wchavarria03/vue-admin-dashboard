
import api from '../api';
import * as types from '../mutation-types';

const URI = 'inventories';
const state = {
  inventories: []
};

const getters = {
  getInventories: context => context.inventories
};

const mutations = {
  [types.FETCH_INVENTORIES](context, list) {
    context.inventories = list;
  }
};

const actions = {
  [types.FETCH_INVENTORIES]({ commit }) {
    api.getInventories(state, URI, (data) => {
      commit(types.FETCH_INVENTORIES, data);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
