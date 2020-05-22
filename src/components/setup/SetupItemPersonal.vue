<template>
  <div class="widgets__content-personal">
    <div class="widgets__content-avatar">
      <img src="img/photo.png" alt />
    </div>
    <div class="widgets__content-text widgets__content-text_personal">
      <a href="#" class="title">{{!!item.title ? item.title : "+ добавить"}}</a>
      <a href="#" class="text">{{!!item.text ? item.text : "+ добавить"}}</a>
      <a :href="item.button_url" class="gen-btn">{{!!item.button ? item.button : "+ добавить"}}</a>
    </div>
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