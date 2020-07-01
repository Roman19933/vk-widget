<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
let timer
export default {
  mounted() {
    this.resizeWindow();
  },
  methods: {
    async resizeWindow() {
      let self = this
      if(height > 734) {
        timer = setTimeout(() => {
          let element = document.getElementsByClassName('main__wrapper')[0]
          let width = element.scrollWidth;
          let height = element.scrollHeight;

          self.$store.dispatch("vk/bridge/resizeWindow", {
            width: 1000,
            height: height
          });
        }, 500)
      }
    }
  },
  destroyed () {
    clearTimeout(timer);
  },
};
</script>
