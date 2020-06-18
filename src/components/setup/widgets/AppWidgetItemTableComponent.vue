<template>
  <div class="widgets__content-personal item item__personal">
    <div class="item__menu">
      <a
        href="#"
        class="item__menu-close"
        @click.prevent="$emit('remove:item')"
      >
        <img src="/img/close-error.png" alt />
      </a>
      <div class="item__menu-burger">
        <img src="/img/burger.png" alt />
      </div>
    </div>
    <div class="widgets__content-avatar widgets__content-avatar_client">
      <img src="" alt />
    </div>
    <div class="widgets__content-text">
      <a href="#" class="text">rtyrtytr</a>
    </div>
    <div class="widgets__content-text" v-for="(item,index) in value" :key="index">
      <a href="#" class="text">{{item.text}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: function() {
        return [];
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  // mounted() {
  //   console.log(this.value[0]);
  // }
};
</script>
