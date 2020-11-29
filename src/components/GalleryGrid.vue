<template>
  <section class="gallery row">
    <div
      v-for="photo in searchedPhotos"
      :key="photo.id"
      class="gallery__wrapper"
    >
      <img
        :src="photo.urls.regular"
        :alt="photo.alt_description"
        class="gallery__img"
      />
      <div class="overlay">
        <h3 class="overlay__author">{{ photo.user.name }}</h3>
        <p class="overlay__location">{{ photo.user.location }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["searchedPhotos"])
};
</script>

<style lang="scss" scoped>
.gallery {
  column-width: 35rem;
  column-gap: 5rem;
  page-break-inside: avoid;
  break-inside: avoid;

  margin: 10rem auto;

  &__wrapper {
    position: relative;
    border-radius: 1rem;
    margin-bottom: 4rem;
    overflow: hidden;
    &:hover {
      cursor: zoom-in;
    }
    &:hover .overlay {
      opacity: 1;
    }
  }
  &__img {
    width: 100%;
    display: block;
    object-fit: cover;
    border: none;
  }
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: all 0.5s ease;
  background-color: rgba(0, 0, 0, 0.3);

  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &__author,
  &__location {
    color: #ffffff;
  }
  &__author {
    font-weight: 500;
  }
  &__location {
    font-weight: 300;
  }
}
</style>
