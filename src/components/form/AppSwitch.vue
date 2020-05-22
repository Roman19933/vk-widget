<template>
  <label class="switch">
    <input v-model="val" type="checkbox" class="hidden switchcheckbox" />
    <span class="switch__circle"></span>
  </label>
</template>

<script>
  export default {
    data () {
      return {
        val: false
      }
    },
    watch: {
      val: {
        handler(bef) {
          this.$emit('switch-val', bef)
        }
      }
    }
  }
</script>