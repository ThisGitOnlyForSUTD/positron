<template>
  <article class="navigation">
    <div class="container">
      <div class="navigation__wrapper nav">
        <nuxt-link to="/" class="nav__text">Главная</nuxt-link>
        <svg class="nav__img" width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.8" d="M0 8V0L5 4L0 8Z" fill="#33374E"/>
        </svg>
        <p class="nav__text nav__text_active">Корзина</p>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'Navigation',
  }
</script>

<style scoped lang="scss">
  .navigation {
    margin-bottom: 60px;
  }

  .nav {
    display: flex;

    &__text {
      font-size: 14px;
      line-height: 21px;
      color: #33374E;
    }

    &__text:not(:last-child) {
      margin-right: 10px;
    }

    &__text_active {
      color: #797B86;
    }

    &__img {
      height: 8px;
      width: 5px;
      align-self: center;
      margin-right: 10px;
    }
  }
</style>