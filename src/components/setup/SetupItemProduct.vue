<template>
  <div class="item">
    <div class="item__menu">
      <a href="#" class="item__menu-close" @click.prevent="$emit('remove:item')">
        <img src="/img/close-error.png" alt />
      </a>
      <div class="item__menu-burger">
        <img src="/img/burger.png" alt />
      </div>
    </div>
    <div class="item__img">
      <input id="file" type="file" class="hidden" />
      <label for="file" id="upload"></label>
      <img src="/img/photo.png" alt class="photo" />
    </div>
    <div class="item__info">
      <a href="#" class="item__title" v-b-modal.default>{{!!item.title ? item.title : "+ добавить"}}</a>
      <a
        href="#"
        class="item__price"
        v-b-modal.subscribe
      >{{!!item.descr ? item.descr : "+ добавить"}}</a>
      <a
        :href="item.link_url"
        class="item__sales"
        v-b-modal.default
      >{{!!item.link ? item.link : "+ добавить"}}</a>
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