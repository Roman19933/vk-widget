<template>
  <label class="switch">
    <input v-model="val" type="checkbox" class="hidden switchcheckbox" />
    <span class="switch__circle"></span>
  </label>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        val: this.value
      }
    },
    watch: {
      value: {
        handler(bef) {
          console.log(bef)
          this.val = bef
        }
      },
      val: {
        handler(bef) {
          this.$emit('switch-val', bef)
        }
      }
    }
  }
</script>
