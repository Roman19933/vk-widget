<template>
  <div class="item__popover">
    <div v-if="varError" class="item__popover-info">
      <img src="/img/info.png" alt />
      <div class="popover popover_setup">
        <div class="popover__wrapper">
          <span v-for="(e, idx) in varError" :key="idx">{{ e }}</span>
        </div>
      </div>
    </div>
    <slot name="varName"></slot>
  </div>
</template>

<script>
export default {
  props: {
    varError: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>
