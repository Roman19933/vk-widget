<template>
  <label class="radio">
    <input
      type="radio"
      name="birth"
      class="radio__input"
      :value="item"
      :checked="item"
      :disabled="disabled"
      @input="$emit('input', item)"
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
    disabled: {
      type: Boolean,
      required: false
    },
    data: {
      type: Object,
      required: true
    }
  }
};
</script>
