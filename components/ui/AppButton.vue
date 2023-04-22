<template>
  <button @click="sendDataToServer()" :class="primary ? 'primary' : 'button'">
    {{text}}
  </button>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name:'AppButton',
  props:{
    text:{
      type: String,
      default: null,
    },
    primary: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
      ...mapActions([
        'sendDataToServer',
      ]),
    },
}
</script>
<style lang="scss" scoped>
.button {
  padding: 0;
  border: 0;
  width: 365px;
  height: 54px;
  background-color: #fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #2C3242;
  border: 1px solid #0069B4;
  border-radius: 4px;
}

.primary {
  background-color: #0069B4;
  color: #fff;
  border-color: transparent;
  padding: 0;
  border: 0;
  width: 365px;
  height: 54px;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  border: 1px solid #0069B4;
  border-radius: 4px;
}
</style>
