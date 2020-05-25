<template>
  <b-modal
    v-model="show"
    id="default"
    hide-header
    hide-footer
    centered
    dialog-class="modal-dialog__widgets"
  >
    <div class="modal__wrapper modal__wrapper-widgets">
      <button class="modal__close" @click.prevent="show = !show">
        <img src="/img/modal-close.png" alt />
      </button>
      <div class="widgets-setting__content">
        <div class="widgets-setting__input">
          <span class="modal__title">заголовок</span>
          <div class="form-group">
            <input type="text" placeholder="Ваш промокод" />
          </div>
        </div>
        <div class="widgets-setting__input">
          <span class="modal__title">ссылка</span>
          <div class="form-group">
            <input type="text" placeholder="Ваш промокод" v-model="input1" />
          </div>
        </div>
        <div class="widgets-setting__btn">
          <button type="submit" class="gen-btn bgnone" @click.prevent="show = !show">Отменить</button>
          <button type="submit" class="gen-btn">Принять</button>
        </div>
        <p class>Введите знак { в поле, чтобы выбрать переменную</p>
      </div>
    </div>
    <div class="modal__wrapper modal__extra">
      <div class="modal__extra-content">
        <span class="modal__title">выберите переменную</span>
        <div class="content">
          <nav>
            <ul>
              <li>
                <a href="#">{имя} - Иван</a>
              </li>
              <li>
                <a href="#">{имя} - Иван</a>
              </li>
              <li>
                <a href="#">{имя} - Иван</a>
              </li>
              <li>
                <a href="#">{имя} - Иван</a>
              </li>
              <li>
                <a href="#">{имя} - Иван</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <p>{{this.input1}}</p>
  </b-modal>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      input1: ""
    };
  },
  watch: {
    input1(val) {
      // console.log(val);
      let val1 = val.includes("{");
      if (val1) {
        console.log(val1);
      }
    }
  }
  // methods: {
  //   a() {
  //     console.log(this.input1);
  //   }
  // }
};
</script>