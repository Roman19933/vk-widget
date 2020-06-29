<template>
  <div class="wrapper-account">
    <app-header />
    <nuxt />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
let timer
export default {
  components: {
    AppHeader
  },
  mounted() {
    this.resizeWindow();
  },
  methods: {
    async resizeWindow() {
      let self = this
      timer = setTimeout(() => {
        let element = document.getElementsByClassName('wrapper-account')[0]
        let width = element.scrollWidth;
        let height = element.scrollHeight;
        self.$store.dispatch("vk/bridge/resizeWindow", {
          width: 1000,
          height: height
        });
      }, 600)
    }
  },
  destroyed () {
    clearTimeout(timer);
  },
  watch: {
    '$route'(bef) {
      this.resizeWindow();
    }
  },
};
</script>



