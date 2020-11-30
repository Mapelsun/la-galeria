<template>
  <section class="gallery-item__loading">
    <div class="gallery-item__loading--img"></div>
    <h3 class="gallery-item__loading--author"></h3>
    <p class="gallery-item__loading--location"></p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.gallery-item {
  &__loading {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    column-width: 35rem;
    column-gap: 5rem;
    page-break-inside: avoid;
    break-inside: avoid;
    animation: pulse 1s infinite ease-in-out;
    margin-bottom: 4rem;
    &--img {
      width: 100%;
      height: 20rem;
      display: block;
      object-fit: cover;
      margin-bottom: 4rem;
    }
    &--author,
    &--location {
      color: #ffffff;
      height: 2rem;
      margin: 0 2rem 2rem;
      animation: pulse 1s infinite ease-in-out;
    }
    &--author {
      width: 80%;
    }
    &--location {
      width: 60%;
    }
  }
}

@keyframes pulse {
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
}
</style>
