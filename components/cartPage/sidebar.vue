<template>
  <div class="sidebar">
    <div class="sidebar__main-wrapper">
      <h2 class="sidebar__title">Итого</h2>

      <div class="sidebar__wrapper">
        <p class="sidebar__text">Сумма заказа</p>
        <p class="sidebar__text sidebar__text_value">{{ cartTotalPrice }} {{ cartData.currency }}</p>
      </div>

      <div class="sidebar__wrapper">
        <p class="sidebar__text">Количество</p>
        <p class="sidebar__text sidebar__text_value">{{ cartItemTotalCount }} шт</p>
      </div>

      <div class="sidebar__wrapper">
        <p class="sidebar__text">Установка</p>
        <p class="sidebar__text sidebar__text_value">{{ cartData.isInstallRequired ? 'Да' : 'Нет' }}</p>
      </div>
    </div>

    <div class="sidebar__total-wrapper">
      <p class="sidebar__text sidebar__text_total">Стоимость товаров</p>
      <p class="sidebar__text sidebar__text_price">{{ cartTotalPrice }} {{ cartData.currency }}</p>
    </div>
   
    <div class="sidebar__btns">
      <app-button :primary="true" :text="'Оформить заказ'"></app-button>
      <app-button :text="'Купить в 1 клик'"></app-button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';
  import AppButton from '../ui/AppButton.vue';

  export default {
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
      AppButton
    }
  }
</script>


<style lang="scss" scoped>
.sidebar {
  padding: 35px 30px;
  display: flex;
  flex-direction: column;
  background-color: #F6F8FA;
  border-radius: 5px;

  &__main-wrapper {
    padding-bottom: 28px;
    border-bottom: 1px solid #AEB0B6;
  }

  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 31px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__wrapper:not(:last-child) {
    margin-bottom: 17px;
  }

  &__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }

  &__text_value {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 145%;
    color: #1F2432;
  }

  &__total-wrapper {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }

  &__text_total {
    font-size: 18px;
    line-height: 26px;
    font-weight: 700;
    align-self: center;
  }

  &__text_price {
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 26px;
    line-height: 34px;
    letter-spacing: 0.005em;
  }

  &__btns {
    display: flex;
    flex-direction: column;
    gap: 12px 0;
  }
}
</style>