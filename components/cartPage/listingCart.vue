<template>
  <div class="listing">
    <ul class="listing__list">
      <li class="item" v-for="item in cartData.items">
        <img class="item__img" :src="require(`@/assets/imgs/items/${item.photoId}.png`)" alt="Вытяжное устройство G2H" height="100" width="100">
        <div class="item__text-wrapper">
        <h2 class="item__title">{{ item.title }}</h2>  
          <p class="item__text item__text_description">{{ item.description }}</p>
          <p class="item__text item__text_article-number">Артикул: {{ item.article }}</p>
        </div>
        <div class="item__count-wrapper">
          <button class="item__btn" @click="decreaseCartItemCount(item.id)">−</button>
          <span class="item__text item__text_count">{{ item.count }}</span>
          <button class="item__btn" @click="increaseCartItemCount(item.id)">+</button>
          <span class="item__text item__text_sum-count" v-if="item.count > 1">{{ item.price }} {{ cartData.currency }}/шт</span>
        </div>
        <p class="item__text item__text_price">{{ item.count * item.price }} {{ cartData.currency }}</p>
        <button class="item__close-btn close-btn">
          <img class="close-btn__img" src="@/static/icons/cross.svg" alt="Иконка крестика" height="12" width="12" @click="deleteItemCart(item.id)">
        </button>
      </li>
      <li class="item" v-if="cartData.items.length == 0">Ваша корзина пуста</li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  export default {
    computed: {
      ...mapState({
        cartData: state => state.cartData,
      }),
    },
    methods: {
      ...mapMutations([
        'increaseCartItemCount',
        'decreaseCartItemCount',
        'deleteItemCart',
      ]),
    }
  }
</script>


<style lang="scss" scoped>
.close-btn {
  position: absolute;
  right: 0;
  top: 0;
  padding: 0;
  border: none;
  background-color: transparent;
}
.listing {
  padding-top: 15px;
  width: 800px;
    &__list {
      margin-bottom: 44px;
    }
}
.item {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 53px;
  padding-bottom: 21px;
  margin-bottom: 25px;

  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    margin-bottom: 6px;
  }

  &__text {
    max-width: 263px;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 7px;
    color: #2C3242;
  }

  &__text_article-number {
    color: #797B86;
    font-size: 14px;
    line-height: 21px;
  }

  &__count-wrapper {
    align-self: center;
    display: flex;
    position: relative;
  }

  &__btn {
    font-size: 14px;
    line-height: 21px;
    border: none;
    background-color: #F6F8FA;
    border-radius: 4px;
    height: 34px;
    width: 38px;
  }

  &__text_count {
    display: flex;
    font-size: 14px;
    line-height: 21px;
    border: none;
    background-color: #F6F8FA;
    border-radius: 4px;
    height: 34px;
    width: 38px;
    justify-content: center;
    align-items: center;
    margin-left: 2px;
    margin-right: 2px;
  }

  &__text_sum-count {
    margin-bottom: 0;
    text-align: center;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
  }

  &__text_price {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    align-self: center;
  }
}
</style>