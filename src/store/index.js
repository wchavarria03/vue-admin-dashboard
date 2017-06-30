import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import auth from './modules/auth';
import inventories from './modules/inventories';
import teachers from './modules/teachers';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  authView: 'login',
  notifications: [],
  isLoading: false,
  isFetchingMore: false,
  isAuthWidgetOpen: false,
  isNotificationPanelOpen: false,
  appAlerts: []
};

const store = new Vuex.Store({
  getters,
  state,
  actions,
  mutations,
  modules: {
    auth,
    inventories,
    teachers
  },
  strict: debug
});

export default store;
