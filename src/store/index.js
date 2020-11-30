import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    searchedPhotos: []
  },
  mutations: {
    SET_PHOTOS(state, photos) {
      state.searchedPhotos = photos;
    },
    clearData: state => {
      state.searchedPhotos = [];
    }
  },
  actions: {
    setSearchedPhotos(context, payload) {
      let photos = payload;
      context.commit("SET_PHOTOS", photos);
    }
  },
  modules: {}
});
