<template>
  <main class="main">
    <app-search-bar class="main__search"></app-search-bar>
    <app-gallery-grid class="main__gallery"></app-gallery-grid>
  </main>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import GalleryGrid from "@/components/GalleryGrid.vue";

import api from "@/api/api.js";

export default {
  components: {
    "app-search-bar": SearchBar,
    "app-gallery-grid": GalleryGrid
  },
  mounted() {
    let payload = "Africa";
    api
      .handleSearchPhotos(payload)
      .then(response => {
        let responseStatus = response.status;
        let responseMessage = response.statusText;
        let photos = response.data.results;
        if (responseStatus === 200) {
          this.$store.dispatch("setSearchedPhotos", photos);
        } else {
          console.log(responseMessage);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 16vh min-content;

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
