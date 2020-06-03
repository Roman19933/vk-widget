<template>
  <div class="widgets__content-text widgets__content-text_messages">
    <a
      href="#"
      class="mess-text"
      v-b-modal="'messages-text'"
    >{{!!item.text ? item.text : "+ добавить"}}</a>
    <a href="#" v-b-modal.messages>{{!!item.descr ? item.descr : "+ добавить"}}</a>
    <setup-modal-messages :data="item" />
    <setup-modal-messages text :data="item" :id="'messages-text'" />
  </div>
</template>

<script>
import SetupModalMessages from "@/components/modal/SetupModalMessages";
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
    SetupModalMessages
  }
};
</script>

<style lang="scss" scoped>
</style>