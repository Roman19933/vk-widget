<template>
  <svg :class="'icon-svg icon-svg-' + name">
    <use :xlink:href="'/img/sprite.svg#' + name" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: true
    }
  }
};
</script>



