import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
//Qitu eshte me i shfaq Puntoret,, edhe Spinerin
// Ajo qe sillet kur bon diqka click ...
export default new Vuex.Store({
  state: {
    jobs: [],
    displayJobs: [],
    rows:0,
    showSpinner: false,
     user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user(state){
      return state.user
    },
    getJobs(state) {
      return state.jobs;
    },
    getRows(state) {
      return state.rows;
    },
    getDisplayJobs(state) {
      return state.displayJobs;
    },
    getSpinner(state) {
      return state.showSpinner;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_DISPLAY_JOBS(state, displayJobs) {
      state.displayJobs = displayJobs;
    },
    SET_SPINNER(state, spinner) {
      state.showSpinner = spinner;
    }
  },
  actions: {
    async fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },
    async fetchData({ commit }) {
      commit("SET_SPINNER", true);
      return new Promise(resolve => {
        setTimeout(async () => {
          const res = await fetch("jobs.json");
          const val = await res.json();
          resolve(val);
          commit("SET_SPINNER", false);
        }, 1000);
      });
    },
    //qitu PAGINATION per employeee, eshte po ne front spo di
    updatePagination({ commit, dispatch }, { myJson, currentPage, perPage }) {
      commit("SET_JOBS", myJson);
      commit("SET_ROWS", myJson.length);
      dispatch("paginate", { currentPage, perPage });
    },
    async fetchJobs({ dispatch }) {
      const myJson = await dispatch("fetchData");
      dispatch("updatePagination", { myJson, currentPage: 1, perPage: 3 });
      return myJson;
    },
    async paginate({ commit, state }, { currentPage, perPage }) {
      const start = (currentPage - 1) * perPage;
      const jobs = state.jobs.slice(start, start + 3);
      commit("SET_DISPLAY_JOBS", jobs);
    },

    //qitu per SAERCH po spo bon ! LUVA
    async search({ dispatch }, { name }) {
      const myJson = await dispatch("fetchData");
      const values = myJson.filter(val => {
        return val.name.toLowerCase().includes(name.toLowerCase());
      });

      dispatch("updatePagination", {
        myJson: values,
        currentPage: 1,
        perPage: 3
      });
    }
  }
});