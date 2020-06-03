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
        <a
          href="#"
          class="places-content__title"
          v-b-modal="`title-${index}`"
        >{{!!item.title ? item.title : "+ добавить"}}</a>
        <a
          href="#"
          class="places-content__text"
          v-b-modal="`subs-${index}`"
        >{{!!item.descr ? item.descr : "+ добавить"}}</a>
      </div>
      <a
        href="#"
        class="gen-btn"
        v-b-modal="`button-${index}`"
      >{{!!item.button ? item.button : "+ добавить"}}</a>
    </div>
    <setup-modal-title mainTitle :data="item" :id="`title-${index}`" />
    <setup-modal-title itemButton :data="item" :id="`button-${index}`" />
    <setup-modal-sub text :data="item" :id="`subs-${index}`" />
  </div>
</template>

<script>
import SetupModalTitle from "@/components/modal/SetupModalTitle";
import SetupModalSub from "@/components/modal/SetupModalSub";
export default {
  props: {
    item: {
      type: Object,
      default() {
        return undefined;
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  components: {
    SetupModalTitle,
    SetupModalSub
  }
};
</script>

<style lang="scss" scoped>
</style>