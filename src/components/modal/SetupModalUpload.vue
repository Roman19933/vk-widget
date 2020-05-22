<template>
  <b-modal
    v-model="show"
    id="uploadFoto"
    hide-header
    hide-footer
    centered
    dialog-class="modal-dialog__widgets_upload"
  >
    <div class="modal__wrapper modal__wrapper-widgets modal__wrapper-widgets_upload">
      <button class="modal__close" @click.prevent="show = !show">
        <img src="/img/modal-close.png" alt />
      </button>
      <div class="widgets-setting__content">
        <div class="widgets-setting__input">
          <span class="modal__title">загрузка изображения</span>
        </div>
        <img src="/img/loading.png" alt />
        <p>
          Рекомендуемое разрешение 480х720 рх.
          Изображение выровнено по центру. Формат .png или .jpg
        </p>
        <div class="widgets-setting__btn">
          <button type="submit" class="gen-btn">Загрузить</button>
        </div>
      </div>
    </div>
  </b-modal>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>