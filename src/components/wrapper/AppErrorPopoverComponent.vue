<template>
  <div class="item__popover">
    <div v-if="varError" class="item__popover-info">
      <img src="/img/info.png" alt class="error" />
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
<style lang="scss">
.item__popover {
  display: flex;
  align-items: center;
}
.item__popover-info {
  position: relative;
  margin-right: 5px;

  &:hover {
    cursor: pointer;
    .popover {
      position: absolute;
      width: 270px;
      height: 39px;
      box-shadow: 0 -2px 5px rgba(10, 10, 10, 0.4);
      background-color: #21203d;
      align-items: center;
      justify-content: center;
      left: 21px;
      display: flex;
      &:before {
        content: "";
        border: 5px solid transparent;
        border-right: 5px solid #21203d;
        position: absolute;
        left: -10px;
        right: initial;
      }
    }
  }
}
</style>
