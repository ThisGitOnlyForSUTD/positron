<template>
  <header class="header">
    <div class="container">
      <nuxt-link to="/cart" class="header__cart cart" @click="$router.push('/cart')">
        <cart-ico/>
        <div class="cart__text-wrapper">
          <p class="cart__text cart__text_title">Ваша корзина</p>

          <p class="cart__text cart__text_item-count">{{ cartItemTotalCount }} товара.</p>

          <p class="cart__text">{{ cartTotalPrice }} {{ cartData.currency }}</p>
        </div>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import cartIco from './ui/icons/cart-ico.vue';
  export default {
    name: 'Header',
    computed: {
      ...mapState({
        cartData: state => state.cartData,
      }),
      ...mapGetters([
        'cartItemTotalCount',
        'cartTotalPrice',
      ])
    },
    components: {
      cartIco
    }
  }
</script>

<style scoped lang="scss">
  .header {
    margin-bottom: 31px;
  }

  .cart {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 64px; 
    column-gap: 10px;
    margin-bottom: 25px;

    &__text {
      font-size: 12px;
      line-height: 17px;
      text-align: left;
    }

    &__text_title {
      font-size: 14px;
      line-height: 21px;
    }

    &__text_item-count {
      color: #797B86;
    }
  }
</style>
