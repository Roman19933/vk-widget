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
      <a
        href="#"
        class="item__title"
        v-b-modal="`title-${index}`"
      >{{!!item.title ? item.title : "+ добавить"}}</a>
      <a
        href="#"
        class="item__price"
        v-b-modal="`subs-${index}`"
      >{{!!item.descr ? item.descr : "+ добавить"}}</a>
      <div class="item__popover">
        <div class="item__popover-info">
          <img src="/img/info.png" alt />
          <div class="popover">
            <div class="popover__wrapper">
              <span>Ссылка должна быть внутри vk.com</span>
            </div>
          </div>
        </div>
        <a
          :href="item.link_url"
          class="item__sales"
          @click.prevent
          v-b-modal="`link-${index}`"
        >{{!!item.link ? item.link : "+ добавить"}}</a>
      </div>
    </div>
    <setup-modal-title itemTitle :data="item" :id="`title-${index}`" />
    <setup-modal-title itemLink :data="item" :id="`link-${index}`" />
    <setup-modal-sub text :data="item" :id="`subs-${index}`" />
  </div>
</template>

<script>
import SetupModalTitle from "@/components/modal/SetupModalTitle";
import SetupModalSub from "@/components/modal/SetupModalSub";
export default {
  props: {
    item: {
      type: Object
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