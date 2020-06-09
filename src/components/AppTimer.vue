<template>
  <h2>111</h2>
</template>

<script>
export default {
  data() {
    return {
      timer: null
    }
  },
  methods: {
    startTimer(val) {
      this.timer = setInterval(() => {
        val--
        console.log(val)
        this.$emit('valTimer', val)
      }, 1000)
    },
  }
}
</script>