<template>
  <b-modal id="modal-timer" hide-header hide-footer>
    <div class="modal__wrapper public timer">
      <button class="modal__close" @click="$bvModal.hide('modal-timer')">
        <img src="img/modal-close.png" alt />
      </button>
      <div class="widget-public">
        <div class="widget-public__wrapper">
          <img src="img/PIT.svg" alt class="widget-public__img" />
          <div class="widget-public__info">
            <h2 class="modal__title">Эй, не так быстро!</h2>
            <p>Между публикацией виджетов должно пройти 10 секунд. Пожалуйста, подождите...</p>
            <b-progress :value="val" :max="10"></b-progress>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
  export default {
    props: {
      timerVal: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        val: this.timerVal
      }
    },
    watch: {
      timerVal(time) {
        this.val = time
      }
    },
  }
</script>
