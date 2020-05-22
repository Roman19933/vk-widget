<template>
  <label class="radio">
    <input type="radio" name="birth" class="radio__input" :value="value" v-model="data.bdate" />
    <span class="radio__custom"></span>
    <span class="radio__text">{{this.value}}</span>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    data: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
</style>