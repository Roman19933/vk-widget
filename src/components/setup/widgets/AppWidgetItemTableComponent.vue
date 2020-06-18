<template>
  <div class="widgets__content-personal item item__personal">
    <template v-for="(item, index) in this.head">
      <div class="head" :key="index">
        <div class="widgets__content-text">
          <a href="#" class="text">{{ item.text }}</a>
        </div>
      </div>
    </template>
    <template v-for="(item, index) in this.body">
      <div class="body" :key="`item-${index}`">
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
          <a href="#" class="text">{{ item.text }}</a>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      head: [],
      body: []
    };
  },
  mounted() {
    this.head = this.value.head;
    this.body = this.value.body;
  }
};
</script>
