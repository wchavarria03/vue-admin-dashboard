import api from '../api';
import * as types from '../mutation-types';
import vueAuthInstance from '../../services/auth.js';

const URI = 'signin';
const state = {
  isAuthenticated: vueAuthInstance.isAuthenticated(),
  isLoggedIn: !!localStorage.getItem('token'),
  profile: null
};

const getters = {
  isLoggedIn: context => context.isLoggedIn
};

const mutations = {
  [types.ISAUTHENTICATED] (state, payload) {
    state.isAuthenticated = payload.isAuthenticated;
  },
  [types.SETPROFILE] (state, payload) {
    state.profile = payload.profile;
  },
  [types.LOGIN] (state) {
    state.pending = true;
  },
  [types.LOGIN_SUCCESS] (state) {
    state.isLoggedIn = true;
    state.pending = false;
  },
  [types.LOGOUT] (state) {
    state.isLoggedIn = false;
  }
};

const actions = {
  [types.LOGIN] (context, payload) {
    payload = payload || {};
    return vueAuthInstance.login(payload)
      .then(() => {
        context.commit('isAuthenticated', {
          isAuthenticated: vueAuthInstance.isAuthenticated()
        });
      });
    /* commit(types.LOGIN);
    return api.login(state, URI, (data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      // localStorage.setItem('permissions', data.token);
      commit(types.LOGIN_SUCCESS);
      commit(types.FETCH_TEACHERS, data);
    }, payload);
    */
  },
  [types.LOGOUT] (context, payload) {
    payload = payload || {};
    return vueAuthInstance.logout(payload.requestOptions)
      .then(() => {
        context.commit('isAuthenticated', {
          isAuthenticated: vueAuthInstance.isAuthenticated()
        });
      });
    /*
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    // localStorage.removeItem('permissions');
    commit(types.LOGOUT);
    */
  },
  [types.AUTHENTICATE] (context, payload) {
    payload = payload || {};
    return vueAuthInstance.authenticate(payload.provider, payload.userData, payload.requestOptions)
      .then(function () {
        context.commit('isAuthenticated', {
          isAuthenticated: vueAuthInstance.isAuthenticated()
        });
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
