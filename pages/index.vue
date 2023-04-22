<template>
  <div class="main container">
    Это путсая страница, для того чтобы перейти в корзину, кликните на нее или нажмите на
    <br/>
    <nuxt-link to="/cart" class="link">меня</nuxt-link>
    <br/>
    <br/>
    Что сделано: 
    Верста по БЭМ без bootstrap & tailwind, 
    <br/>
    Выполнено все на nuxt2 + vuex (Почему-то попросили на nuxt2),
    <br/>
    Вывод товаров удаление, изменение кол-ва итд
    <br/>
    Слайдер на Swiper на сколько мне известно nuxt 2 не работает с новым Swiper 
    <br/>
    и не было понятно можно ли использовать vue-awesome-swiper, поэтому сделал костыль.
    <br/>
    Сделан простенький алерт при отправке на сервер, <strong>данные в консоле!</strong>

  </div>
</template>


<style lang="scss" scoped>
  .main {
    font-size: 20px;
  }
  .link {
    color: blue;
    font-weight: 700;
    font-size: 25px;
    text-decoration: underline;
  }
</style>
