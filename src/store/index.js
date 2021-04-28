import Vue from "vue";
import Vuex from "vuex";

import countries from './modules/countries'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: false,
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
  modules: { countries },
});
