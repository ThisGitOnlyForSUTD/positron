<template>
  <div>
    <notifications-list/>
    <app-breadcrumbs/>
    <cart/>
    <slider/>
  </div>
</template>

<script>
import slider from '@/components/cartPage/slider.vue'
import notificationsList from '~/components/notifications/notificationsList.vue';
import cart from '@/components/cartPage/card.vue'
import AppBreadcrumbs from '@/components/ui/AppBreadcrumbs.vue';
  export default {
    components: { cart, AppBreadcrumbs, slider, notificationsList },
  }
</script>