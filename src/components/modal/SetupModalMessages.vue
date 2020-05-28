<template>
  <b-modal
    v-model="show"
    :id="id"
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
          <span>Описание</span>
          <div class="form-group">
            <textarea v-model="messages"></textarea>
          </div>
        </div>
        <div class="widgets-setting__btn">
          <button type="submit" class="gen-btn bgnone" @click.prevent="show = !show">Отменить</button>
          <button type="submit" class="gen-btn" @click.prevent="add">Принять</button>
        </div>
        <p>Введите знак { в поле, чтобы выбрать переменную</p>
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
  </b-modal>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      messages: ""
    };
  },
  props: {
    id: {
      type: String,
      default: "messages"
    },
    text: {
      type: Boolean
    },
    data: {
      type: Object
    }
  },
  mounted() {
    if (this.text) {
      this.messages = this.data.text;
    } else {
      this.messages = this.data.descr;
    }
  },
  methods: {
    add() {
      if (this.text) {
        this.data.text = this.messages;
      } else {
        this.data.descr = this.messages;
      }
      this.$bvModal.hide(this.id);
    }
  }
};
</script>