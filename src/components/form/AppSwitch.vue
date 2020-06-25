<template>
  <label class="switch">
    <input v-model="val" type="checkbox" class="switchcheckbox" />
    <span class="switch__circle"></span>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    sw: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      val: this.value
    };
  },
  mounted() {
    this.val = this.sw
  },
  watch: {
    value: {
      handler(bef) {
        this.val = bef;
      }
    },
    val: {
      handler(bef) {
        this.$emit("switch-val", bef);
      }
    }
  }
};
</script>
