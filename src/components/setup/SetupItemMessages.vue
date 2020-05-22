<template>
  <div class="widgets__content-text widgets__content-text_messages">
    <a href="#" class="mess-text">{{!!item.text ? item.text : "+ добавить"}}</a>
    <a href="#">{{!!item.descr ? item.descr : "+ добавить"}}</a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return undefined;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>