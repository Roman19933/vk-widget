<template>
  <label class="radio">
    <input
      type="radio"
      name="birth"
      class="radio__input"
      :value="item.id"
      @input="$emit('input', item.id)"
    />
    <span class="radio__custom"></span>
    <span class="radio__text">{{ item.title }}</span>
  </label>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  }
};
</script>
