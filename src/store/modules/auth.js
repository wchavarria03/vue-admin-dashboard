import api from '../api';
import * as types from '../mutation-types';

const URI = 'signin';
const state = {
  isLoggedIn: !!localStorage.getItem('token')
};

const getters = {
  isLoggedIn: context => context.isLoggedIn
};

const mutations = {
  [types.LOGIN](context) {
    context.pending = true;
  },
  [types.LOGIN_SUCCESS](context) {
    context.isLoggedIn = true;
    context.pending = false;
  },
  [types.LOGOUT](context) {
    context.isLoggedIn = false;
  }
};

const actions = {
  [types.LOGIN]({ commit }, creds) {
    commit(types.LOGIN);
    return api.login(state, URI, (data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      // localStorage.setItem('permissions', data.token);
      commit(types.LOGIN_SUCCESS);
      commit(types.FETCH_TEACHERS, data);
    }, creds);
  },
  [types.LOGOUT]({ commit }) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    // localStorage.removeItem('permissions');
    commit(types.LOGOUT);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
