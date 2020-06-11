<template>
  <b-modal id="modal-wrapper" @hide="$emit('input', false)" hide-header hide-footer>
    <div class="modal__wrapper public">
      <button class="modal__close" @click="$bvModal.hide('modal-wrapper'), $emit('input', false)">
        <img src="img/modal-close.png" alt />
      </button>
      <div class="widget-public">
        <div class="widget-public__wrapper">
          <img src="img/PIT.svg" alt class="widget-public__img" />
          <div class="widget-public__info">
            <h2 v-if="title" class="modal__title">{{ title }}</h2>
            <p v-if="subtitle" class="modal__text">{{ subtitle }}</p>
            <div class="widget-public__group">
              <button
                @click="$emit('input', false)"
                class="widget-public__btn gen-btn disable"
              >Нет</button>
              <button
                class="widget-public__btn gen-btn"
                @click="$emit('input', true)"
              >Да</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      subtitle: {
        type: String,
        default: ''
      }
    }
  }
</script>