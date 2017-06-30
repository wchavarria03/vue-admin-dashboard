import api from '../api';
import * as types from '../mutation-types';

const URI = 'teachers';
const state = {
  teachers: []
};

const getters = {
  getTeachers: context => context.teachers
};

const mutations = {
  [types.FETCH_TEACHERS](context, list) {
    context.teachers = list;
  }
};

const actions = {
  [types.FETCH_TEACHERS]({ commit }) {
    api.getTeachers(state, URI, (data) => {
      commit(types.FETCH_TEACHERS, data);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
