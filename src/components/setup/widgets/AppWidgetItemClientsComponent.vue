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
      <div
        class="widgets__content-avatar__wrapper"
        :class="{ 'photo-url': value[0].icon_url }"
      >
        <img :src="value[0].icon_url" alt class="photo" />
      </div>
    </div>
    <div class="widgets__content-text">
      <a href="#" class="text">{{ value[0].text }}</a>
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
    }
  }
};
</script>
