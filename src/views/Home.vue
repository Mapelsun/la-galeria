<template>
  <main class="main">
    <!-- <app-search-bar></app-search-bar> -->
    <section class="search search-wrapper"></section>
    <!-- <app-gallery-grid class="gallery"></app-gallery-grid> -->
    <section class="gallery row">
      <img
        class="gallery__img"
        src="https://images.unsplash.com/photo-1602524209335-0224ee211de5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <img
        class="gallery__img"
        src="https://images.unsplash.com/photo-1606440894295-8a79c32fdaf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <img
        class="gallery__img"
        src="https://images.unsplash.com/photo-1588442742006-ca3547ac60fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <img
        class="gallery__img"
        src="https://images.unsplash.com/photo-1606462531411-bd77abcb7c57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <img
        class="gallery__img"
        src="https://images.unsplash.com/photo-1602312588630-7801386f162d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <img
        class="gallery__img"
        src="https://images.unsplash.com/photo-1606446134254-61235a08ccb6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <img
        class="gallery__img"
        src="https://images.unsplash.com/photo-1600440087542-abc2a532862d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <img
        class="gallery__img"
        src="https://images.unsplash.com/photo-1606416463636-393d972e14df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
    </section>
  </main>
</template>

<script>
// import SearchBar from "@/components/SearchBar.vue";
// import GalleryGrid from "@/components/GalleryGrid.vue";

export default {
  components: {
    // "app-search-bar": SearchBar,
    // "app-gallery-grid": GalleryGrid
  }
};
</script>

<style lang="scss" scoped>
.search {
  background: #dde2e9;
  padding: 10%;
  grid-row: 1 / 3;
  grid-column: 1 / -1;
  position: relative;
  z-index: 1;
}

// .gallery {
//   // margin-top: -5rem;
// }

.gallery {
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  position: relative;
  z-index: 9999;

  column-width: 35rem;
  column-gap: 2.4rem;
  page-break-inside: avoid;
  break-inside: avoid;

  margin: 10rem auto;

  &__img {
    width: 100%;
    display: block;
    object-fit: cover;
    margin-bottom: 2.4rem;
    border-radius: .5rem;
  }
}

.main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 16vh min-content;
  position: relative;
}
</style>
