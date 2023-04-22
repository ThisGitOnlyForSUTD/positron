<template>
  <transition name="bounce">
  <div class="notification" @click="closeNotification">
    <span class="notification__text">
      {{ text }}
    </span>
  </div>
</transition>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'FrontNotificationsItem',
  props: ['text', 'notification'],
  methods: {
    ...mapActions(['closeNotification'])
  },
  mounted () {
    setTimeout (() => {
      this.closeNotification()
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
  .notification {
    cursor: pointer;
    background-color: #0069B4;
    padding: 20px 0;
    width: 250px;
    text-align: center;

    &__text {
      color: #fff;
      font-size: 14px;
    }
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>