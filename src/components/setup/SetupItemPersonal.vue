<template>
  <div class="widgets__content-personal">
    <div class="widgets__content-avatar">
      <img src="/img/photo.png" alt />
    </div>
    <div class="widgets__content-text widgets__content-text_personal">
      <a href="#" class="title" v-b-modal="'mainTitle'">{{!!item.title ? item.title : "+ добавить"}}</a>
      <a
        href="#"
        class="text"
        v-b-modal="'messages-text'"
      >{{!!item.text ? item.text : "+ добавить"}}</a>
      <a
        :href="item.button_url"
        class="gen-btn"
        v-b-modal="'itemButton'"
        @click.prevent
      >{{!!item.button ? item.button : "+ добавить"}}</a>
    </div>
    <setup-modal-messages text :data="item" :id="'messages-text'" />
    <setup-modal-title mainTitle :data="item" :id="'mainTitle'" />
    <setup-modal-title itemButton :data="item" :id="'itemButton'" />
  </div>
</template>

<script>
import SetupModalMessages from "@/components/modal/SetupModalMessages";
import SetupModalTitle from "@/components/modal/SetupModalTitle";
export default {
  props: {
    item: {
      type: Object,
      default() {
        return undefined;
      }
    }
  },
  components: {
    SetupModalTitle,
    SetupModalMessages
  }
};
</script>

<style lang="scss" scoped>
</style>