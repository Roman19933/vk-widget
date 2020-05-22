<template>
  <div :class="[{active: collaps}, wrapClass]">
    <div @click="collaps = !collaps">
      <slot name="title"></slot>
    </div>
      <transition
        name="collaps"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
        <div v-if="collaps">
          <slot name="content"></slot>
        </div>
      </transition>
  </div>
</template>

<script>
  export default {
    props: {
      wrapClass: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        collaps: false,
      }
    },
    methods: {
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

    }
  }
</script>
<style lang="scss" scoped>
  .collaps-enter-active, .collaps-leave-active {
    transition: height .3s;
    overflow: hidden;
  }

</style>