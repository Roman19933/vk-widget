<template>
  <div class="widgets__error">
    <p>
      Некоторые поля заполнены неверно. Внесите изменения и попробуйте снова.
    </p>
    <button @click.prevent="$emit('close')">
      <img src="/img/close-error.png" alt />
    </button>
  </div>
</template>

<script>
export default {
  // props: {
  //   isError: {
  //     type:Boolean,
  //     default:false
  //   }
  // }
};
</script>
