<template>
  <div class="item">
    <div class="item__menu">
      <a href="#" class="item__menu-close" @click.prevent="$emit('remove:item')">
        <img src="/img/close-error.png" alt />
      </a>
      <div class="item__menu-burger" v-b-modal="`upload-${index}`">
        <img src="/img/burger.png" alt />
      </div>
    </div>
    <div class="item__img" v-b-modal="`upload-${index}`">
      <img src="/img/photo.png" alt class="photo" v-if="!this.urlToFoto" />
      <img :src="urlToFoto" alt v-else />
    </div>
    <div class="item__info">
      <div class="item__info-cover">
        <a
          href="#"
          class="item__info-cover_title"
          v-b-modal="`title-${index}`"
        >{{!!item.title ? item.title : "+ добавить"}}</a>
        <a
          href="#"
          class="item__info-cover_star"
          v-b-modal="`subs-${index}`"
        >{{!!item.descr ? item.descr : "+ добавить"}}</a>
      </div>
      <a
        :href="item.button_url"
        class="gen-btn"
        v-b-modal="`button-${index}`"
        @click.prevent
      >{{!!item.button ? item.button : "+ добавить"}}</a>
    </div>
    <setup-modal-title itemTitle :data="item" :id="`title-${index}`" />
    <setup-modal-title itemButton :data="item" :id="`button-${index}`" />
    <setup-modal-sub text :data="item" :id="`subs-${index}`" />
    <setup-modal-upload :data="item" :id="`upload-${index}`" :type="type" @url="fotoUrl" />
  </div>
</template>

<script>
import SetupModalTitle from "@/components/modal/SetupModalTitle";
import SetupModalSub from "@/components/modal/SetupModalSub";
import SetupModalUpload from "@/components/modal/SetupModalUpload";
export default {
  props: {
    item: {
      type: Object,
      default() {
        return undefined;
      }
    },
    type: {
      type: String,
      default: ""
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      urlToFoto: ""
    };
  },
  methods: {
    fotoUrl(val) {
      this.urlToFoto = val;
    }
  },
  components: {
    SetupModalTitle,
    SetupModalSub,
    SetupModalUpload
  }
};
</script>

<style lang="scss" scoped>
</style>