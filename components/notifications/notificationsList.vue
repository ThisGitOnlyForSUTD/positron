<template>
  <div class="notifications-list">
    <notifications-item v-for="item in notification" 
    :notification="item" 
    :key="item.id" 
    :text="'Заказ прошел, проверте консоль'"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import notificationsItem from '@/components/notifications/notificationsItem'
export default {
  name: 'NotificationsList',
  computed: {
    ...mapState({
      notification: state => state.notification
    })
  },
  components: {
    notificationsItem
  }
};
</script>

<style lang="scss" scoped>
  .notifications-list {
    z-index: 12;
    position: fixed;
    top: 20%;
    right: 1%;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
  }
</style>