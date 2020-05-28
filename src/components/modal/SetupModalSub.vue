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
          <span class="modal__title">Описание</span>
          <div class="form-group">
            <input type="text" placeholder="описание" v-model="subs" />
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
  props: {
    data: {
      type: Object
    },
    place: {
      type: Boolean
    },
    text: {
      type: Boolean
    },
    time: {
      type: Boolean
    },
    id: {
      type: String,
      default: "subscriptions"
    }
  },
  data() {
    return {
      show: false,
      subs: ""
    };
  },
  mounted() {
    if (this.place) {
      this.subs = this.data.address;
    } else if (this.time) {
      this.subs = this.data.time;
    } else if (this.text) {
      this.subs = this.data.descr;
    }
  },
  methods: {
    add() {
      if (this.place) {
        this.data.address = this.subs;
      } else if (this.time) {
        this.data.time = this.subs;
      } else if (this.text) {
        this.data.descr = this.subs;
      }
      this.$bvModal.hide(this.id);
    }
  }
};
</script>