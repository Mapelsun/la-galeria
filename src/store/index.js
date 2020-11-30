import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    searchQuery: "",
    searchedPhotos: []
  },
  mutations: {
    setPhotos(state, photos) {
      state.searchedPhotos = photos;
    },
    clearData: state => {
      state.searchedPhotos = [];
    },
    setQuery(state, payload) {
      state.searchQuery = payload;
    },
    toggleLoading(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    setSearchedPhotos(context, payload) {
      let photos = payload;
      context.commit("setPhotos", photos);
    }
  },
  modules: {}
});
