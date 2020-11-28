<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
// Font import
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap");

// Basic reset
html {
  box-sizing: border-box;
  font-size: 62.5%;
  scroll-behavior: smooth;
  @media only screen and (max-width: 56.25em) {
    font-size: 56.25%;
  }
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-wrap: break-word;
  word-break: normal;
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.6;
}

// Reuseable
.row {
  max-width: 132rem;
  width: 90%;
  margin: 0 auto;
}

// Vue Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// Responsive breakpoints

// // 1200px
// @media only screen and (max-width: 75em) {
// }
// // 1024px
// @media only screen and (max-width: 64em) {
// }

// // 900px
// @media only screen and (max-width: 56.25em) {
// }

// // 768px
// @media only screen and (max-width: 48em) {
// }

// // 480px
// @media only screen and (max-width: 30em) {
// }
</style>
