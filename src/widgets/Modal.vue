<template>
  <div class="modal-mask">
    <div class="modal-close" @click="$emit('close')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.953"
        height="20.953"
        viewBox="0 0 20.953 20.953"
      >
        <path
          class="a"
          d="M28.477,9.619l-2.1-2.1L18,15.9,9.619,7.523l-2.1,2.1L15.9,18,7.523,26.381l2.1,2.1L18,20.1l8.381,8.381,2.1-2.1L20.1,18Z"
          transform="translate(-7.523 -7.523)"
        />
      </svg>
    </div>
    <div class="modal-body">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #111;
  cursor: zoom-out;
  overflow: auto;
  backface-visibility: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 3% 7%;
}

.modal-close {
  cursor: pointer;
  position: absolute;
  top: 3%;
  right: 3%;
  svg {
    fill: #aaaaac;
    width: 1.2rem;
  }
}

.modal-body {
  position: relative;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  width: 90%;
  max-width: 80rem;
  margin: 0px auto;
  outline: none;
  pointer-events: none;
  cursor: default;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
