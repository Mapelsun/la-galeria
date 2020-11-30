<template>
  <section class="search">
    <form class="form" @submit.prevent="login" novalidate="true">
      <div class="form__group">
        <button class="form__btn" type="submit" title="Search Unsplash">
          <svg
            width="32"
            height="32"
            version="1.1"
            viewBox="0 0 32 32"
            aria-hidden="false"
          >
            <path
              d="M21.9 20.1c1.3-1.7 2-3.8 2-6.1 0-5.5-4.5-10-10-10C8.5 4 4 8.5 4 14s4.5 10 10 10c2.3 0 4.4-.8 6.1-2l6.1 6.1 1.9-1.9-6.2-6.1zM14 21.3c-4.1 0-7.3-3.3-7.3-7.3S9.9 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"
            ></path>
          </svg>
        </button>
        <label for="formInput" class="form__label">
          <input
            class="form__input"
            type="form"
            name="formInput"
            id="formInput"
            placeholder="Search for photo"
        /></label>
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search {
  background: #dde2e9;
  padding: 10%;
}
.form {
  padding: 5rem 0;
  &__group {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 1.2rem;
    height: 6.5rem;
    border-radius: 1rem;
    background-color: #f5f5f5;
    box-shadow: 3px 3px 20px 5px rgba(0, 0, 0, 0.09);
    transition: all 0.3s ease-in-out;

    padding: 0 1.4rem;

    border: 1px solid #e0e0e0;

    &:active,
    &:hover,
    &:focus {
      background-color: #fff;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    }
  }
  &__btn {
    border: none;
    display: inline-block;
    background-color: initial;
    cursor: pointer;
    box-shadow: none;
    svg {
      width: 2.4rem;
      height: 2.4rem;
      fill: #767676;
      transition: fill 0.1s ease-in-out;
      backface-visibility: hidden;
    }
  }
  &__input,
  &__label {
    width: 100%;
  }
  &__input {
    border: none;
    background: none;
    outline: none;
    &::placeholder {
      color: #283b5b;
      // color: #909aaa;
      font-size: 1.6rem;
      letter-spacing: 0.5px;
    }
  }
}
</style>
