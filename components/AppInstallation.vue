<template>
  <div class="install">
    <input class="install__checkbox" type="checkbox" id="install" name="install" @click="setInstall()">
    <label class="install__label" for="install"></label>
    <install-ico class="install__img"/>
    <div class="install__text-wrapper">
      <h2 class="install__title">Установка</h2>
      <p class="install__text">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</p>
    </div>
  </div>
</template>

<script>
import installIco from './ui/icons/install-ico.vue';
import { mapMutations } from 'vuex';
  export default {
    methods: {
      ...mapMutations([
        'setInstall'
      ]),
    },
    components: {
      installIco
    }
  }
</script>

<style lang="scss" scoped>
.install {
  display: flex;
  background-color: #F6F8FA;
  padding: 26px 0 26px 25px;
  border-radius: 5px;
  align-items: center;

  &__label {
    margin-right: 20px;
    align-self: center;
    display: flex;
    position: relative;
    cursor: pointer;
  }

  &__label:before {
    content: '';
    display: inline-block;
    height: 20px;
    width: 20px;
    border: 1px solid #797B86;
    box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.08);
    border-radius: 2px;
  }

  &__checkbox {
    position: absolute;
    z-index: -1;
    border-radius: 2px;
    opacity: 0;
  }

  &__checkbox:checked + &__label:before  {
    background-color: #0069B4;
  }

  &__img {
    margin-right: 20px;
    padding: 10px;
    background-color: #fff;
    box-sizing: content-box;
    border-radius: 4px;
  }

  &__title {
    margin-bottom: 2px;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
  }

  &__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #797B86;
  }
}
</style>