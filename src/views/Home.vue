<template>
  <div class="home">
    <!-- <app-search-bar></app-search-bar> -->
    <app-gallery-grid></app-gallery-grid>

  </div>
</template>

<script>
// import SearchBar from "@/components/SearchBar.vue";
import GalleryGrid from "@/components/GalleryGrid.vue";

export default {
  name: "Home",
  components: {
    // "app-search-bar": SearchBar,
    "app-gallery-grid": GalleryGrid
  }
};
</script>

<style lang="scss" scoped>
</style>
