<template>
  <div :class="[{active: collaps}, wrapClass]">
    <div @click="collaps = !collaps">
      <slot name="title"></slot>
    </div>
    <!-- <transition name="collaps"> -->
    <slot v-if="collaps" name="content"></slot>
    <!-- </transition> -->
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
    mounted() {

    }
  }
</script>