<template>
  <main class="main">
    <app-search-bar class="main__search"></app-search-bar>
    <app-gallery-grid class="main__gallery"></app-gallery-grid>
    <app-toast ref="toast"></app-toast>
  </main>
</template>

<script>
import api from "@/api/api.js";
import { mapState } from "vuex";
import SearchBar from "@/components/SearchBar.vue";
import GalleryGrid from "@/components/GalleryGrid.vue";
import Toast from "@/widgets/Toast.vue";

export default {
  computed: mapState(["searchQuery", "loading"]),
  components: {
    "app-search-bar": SearchBar,
    "app-gallery-grid": GalleryGrid,
    "app-toast": Toast,
  },
  mounted() {
    let payload = "African";
    this.$store.commit("setQuery", payload);
    this.$store.commit("toggleLoading", true);

    api
      .handleSearchPhotos(this.searchQuery)
      .then((response) => {
        this.$store.commit("toggleLoading", false);

        let responseStatus = response.status;
        let responseMessage = response.statusText;
        let photos = response.data.results;

        if (responseStatus === 200) {
          this.$store.dispatch("setSearchedPhotos", photos);
        } else {
          this.$refs.toast.toggleToast(responseMessage);
        }
      })
      .catch((error) => {
        this.$store.commit("toggleLoading", false);
        this.$refs.toast.toggleToast(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 15rem min-content;
  &__search {
    grid-row: 1 / 3;
    grid-column: 1 / -1;
  }
  &__gallery {
    grid-row: 2 / -1;
    grid-column: 1 / -1;
  }
}
</style>
