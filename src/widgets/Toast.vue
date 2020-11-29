<template>
  <div id="snackbar">{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: null
    }
  },
  methods: {
    toggleToast(message) {
      this.message = message;
      const x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(() => {
        x.className = x.className.replace("show", "");
      }, 5000);
    }
  }
};
</script>

<style scoped>
#snackbar {
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 30rem;
  width: 90%;
  transform: translateX(-50%);
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  overflow: hidden;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  padding: 16px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 30px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  animation: fadein 0.5s, fadeout 0.5s 4.5s;
}

@keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 30px;
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    top: 30px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}
</style>
