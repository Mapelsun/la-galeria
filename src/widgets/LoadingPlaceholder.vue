<template>
  <div class="text-input__loading">
    <div class="text-input__loading--line"></div>
    <div class="text-input__loading--line"></div>
    <div class="text-input__loading--line"></div>
    <div class="text-input__loading--line"></div>
    <div class="text-input__loading--line"></div>
    <div class="text-input__loading--line"></div>
    <div class="text-input__loading--line"></div>
    <div class="text-input__loading--line"></div>
    <div class="text-input__loading--line"></div>
    <div class="text-input__loading--line"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@mixin nth-children($points...) {
  @each $point in $points {
    &:nth-child(#{$point}) {
      @content;
    }
  }
}

.text-input {
  &__loading {
    &--line {
      height: 1rem;
      margin: 1rem;
      animation: pulse 1s infinite ease-in-out;
      @include nth-children(1, 5, 9) {
        width: 150px;
      }
      @include nth-children(2, 6, 10) {
        width: 250px;
      }
      @include nth-children(3, 7) {
        width: 50px;
      }
      @include nth-children(4, 8) {
        width: 100px;
      }
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
