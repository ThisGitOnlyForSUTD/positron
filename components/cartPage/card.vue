<template>
  <section class="cart">
    <div class="container">
      <div class="cart__header-wrapper">
        <div class="cart__header-title-wrapper">
          <h1 class="cart__title">Ваша корзина</h1>
          <span class="cart__item-count" v-if="cartItemTotalCount > 0">{{ cartItemTotalCount }} шт.</span>
        </div>
        <button class="cart__btn" @click="clearCart()">Очистить корзину</button>
      </div>
      <div class="cart__wrapper">
        <div>
          <listing-cart/>
          <app-installation/>
        </div>
        <sidebar/>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex';
  import AppButton from '../ui/AppButton.vue';
  import listingCart from '@/components/cartPage/listingCart.vue'
  import AppInstallation from '../AppInstallation.vue';
  import sidebar from '@/components/cartPage/sidebar.vue';
  export default {
    name: 'Cart',
    computed: {
      ...mapGetters([
        'cartItemTotalCount',
      ])
    },
    methods: {
      ...mapMutations([
        'increaseCartItemCount',
        'decreaseCartItemCount',
        'clearCart',
      ]),
    },
    components: {
      AppButton,
      listingCart,
      AppInstallation,
      sidebar
    }
  }
</script>

<style scoped lang="scss">
    .cart {
      &__header-wrapper {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 800px;
        margin-bottom: 95px;
      }

      &__header-title-wrapper {
        display: flex;
      }

      &__title {
        font-size: 44px;
        line-height: 53px;
        font-weight: 700;
        color: #33374E;
        text-transform: unset;
        margin-right: 22px;
      }

      &__item-count {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 3px;
        color: #797B86;
        align-self: flex-end;
      }

      &__btn {
        text-decoration: underline;
        text-underline-offset: 4px;
        border: none;
        background-color: transparent;
        padding: 0;
        font-family: 'Lato', sans-serif;
        color: #797B86;
        font-size: 14px;
        line-height: 21px;
      }

      &__wrapper {
        display: flex;
        justify-content: space-between;
        column-gap: 55px;
      }
    }

</style>