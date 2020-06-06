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
            <b-progress :value="5" :max="10"></b-progress>
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
        timer: null,
        val: this.timerVal
      }
    },
    mounted() {
      this.startTimer()
    },
    // destroyed() {
    //   this.stopTimer()
    // },
    methods: {
      startTimer() {
        let $this = this
        this.timer = setInterval(() => {
          this.val--
          if (this.val === 0) {
            clearTimeout($this.timer)
          }
        }, 1000)
      },
      // stopTimer() {
      //   clearTimeout(this.timer)
      // },
    },
    // watch: {
    //   currentTime(time) {
    //     if (time === 0) {
    //       this.stopTimer()
    //     }
    //   }
    // },
  }
</script>