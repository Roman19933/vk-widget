<template>
  <div :class="[{active: collaps}, wrapClass]">
    <div
      :class="titleClass"
      @click="clicCollaps">
      <slot name="title"></slot>
    </div>
      <transition
        name="collaps"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
        <div :class="{noanimate: noAnimate}" v-if="collaps">
          <slot name="content"></slot>
        </div>
      </transition>
  </div>
</template>

<script>
  export default {
    props: {
      col: {
        type: Boolean,
        default: false
      },
      titleClass: {
        type: String,
        default: ''
      },
      wrapClass: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        collaps: this.col,
        noAnimate: false
      }
    },
    methods: {
      async clicCollaps () {
        await (this.noAnimate = false)
        this.collaps = !this.collaps
      },
      beforeEnter (element) {
        element.style.height = 0
      },
      enter(element) {
        const height = element.scrollHeight

         element.style.height = height + 'px'
      },
      afterEnter(element) {
        element.style.height = 'auto';
      },
      leave(element) {
        const height = getComputedStyle(element).height;
        
        element.style.height = height;

        getComputedStyle(element).height;

        requestAnimationFrame(() => {
          element.style.height = 0;
        });
      },
    },
    mounted() {
      this.noAnimate = true
    },
    watch: {
      col: {
        handler(bef) {
          this.collaps = bef
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .noanimate {
    transition: none!important;
  }
  .collaps-enter-active, .collaps-leave-active {
    transition: height .3s;
    overflow: hidden;
  }

</style>