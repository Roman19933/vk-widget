<template>
  <div class="widgets__content-places">
    <div class="item__menu">
      <a href="#" class="item__menu-close" @click.prevent="$emit('remove:item')">
        <img src="/img/close-error.png" alt />
      </a>
      <div class="item__menu-burger">
        <img src="/img/burger.png" alt />
      </div>
    </div>
    <div class="widgets__content-avatar">
      <img src="/img/photo.png" alt />
    </div>
    <div class="widgets__content-text widgets__content-text_places">
      <div class="places-content">
        <a href="#" class="places-content__title">{{!!item.title ? item.title : "+ добавить"}}</a>
        <a href="#" class="places-content__text">{{!!item.descr ? item.descr : "+ добавить"}}</a>
        <div class="places-content__info">
          <div class="places-content__location">
            <img src="/img/marker.png" alt />
            <a
              href="#"
              class="places-content__text"
            >{{!!item.address ? item.address : "+ добавить"}}</a>
          </div>
          <div class="places-content__location">
            <img src="/img/time.png" alt />
            <a href="#" class="places-content__text">{{!!item.time ? item.time : "+ добавить"}}</a>
          </div>
        </div>
      </div>
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