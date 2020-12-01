<template>
  <section class="gallery row">
    <div v-if="loading">
      <app-content-loading
        v-for="(item, index) in items"
        :key="index"
      ></app-content-loading>
    </div>
    <div
      v-else
      v-for="photo in searchedPhotos"
      :key="photo.id"
      class="gallery__wrapper"
      @click="magnifyImage(photo)"
    >
      <img
        :srcset="
          `${photo.urls.raw}&amp;auto=format&amp;fit=crop&amp;w=478&amp;q=60 478w, ${photo.urls.raw}&amp;auto=format&amp;fit=crop&amp;w=768&amp;q=80 768w, ${photo.urls.raw}&amp;auto=format&amp;fit=crop&amp;w=1024&amp;q=80 1024w, ${photo.urls.raw}&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80 1200w, ${photo.urls.raw}&amp;auto=format&amp;fit=crop&amp;w=1440&amp;q=80 1440w, ${photo.urls.raw}&amp;auto=format&amp;fit=crop&amp;w=1800&amp;q=80 1800w, ${photo.urls.raw}&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80 2550w`
        "
        sizes="(min-width: 1335px) 416px, (min-width: 992px) calc(calc(100vw - 72px) / 3), (min-width: 768px) calc(calc(100vw - 48px) / 2), 100vw"
        :src="`${photo.urls.thumb}`"
        :alt="photo.alt_description"
        class="gallery__img"
      />
      <div class="overlay">
        <h3 class="overlay__author">{{ photo.user.name }}</h3>
        <p class="overlay__location">{{ photo.user.location }}</p>
      </div>
    </div>

    <app-modal
      v-if="photoModalVisible"
      @close="photoModalVisible = false"
      class="modal"
    >
      <div v-if="singlePhoto" class="modal__container">
        <div class="modal__image-box">
          <img
            :src="`${singlePhoto.urls.regular}`"
            :alt="singlePhoto.alt_description"
            class="modal__img"
          />
        </div>
        <div class="modal__texts">
          <h3>{{ singlePhoto.user.name }}</h3>
          <p>{{ singlePhoto.user.location }}</p>
        </div>
      </div>
    </app-modal>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Modal from "@/widgets/Modal";
import LoadingPlaceholder from "@/widgets/LoadingPlaceholder";
export default {
  computed: mapState(["searchedPhotos", "loading"]),
  components: {
    "app-modal": Modal,
    "app-content-loading": LoadingPlaceholder
  },
  data() {
    return {
      photoModalVisible: false,
      singlePhoto: null,
      items: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  },
  methods: {
    magnifyImage(photo) {
      this.singlePhoto = photo;
      this.photoModalVisible = true;
    }
  }
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
.modal {
  &__container {
    height: 100%;
    position: relative;
    display: grid;
    grid-template-rows: 85% 15%;
    grid-template-columns: 1fr;
  }
  &__image-box {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }
  &__img {
    width: 100%;
    height: 100%;
    display: inline-block;
    object-fit: cover;
  }
  &__texts {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
      color: #384966;
    }
    p {
      color: #b2b8c4;
    }
  }
}
</style>
