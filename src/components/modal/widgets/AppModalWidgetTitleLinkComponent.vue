<template>
  <b-modal v-model="show" hide-header hide-footer centered dialog-class="modal-dialog__widgets">
    <div class="modal__wrapper modal__wrapper-widgets">
      <button class="modal__close" @click.prevent="show = !show">
        <img src="/img/modal-close.png" alt />
      </button>
      <div class="widgets-setting__content">
        <div class="widgets-setting__input">
          <span class="modal__title">заголовок</span>
          <div class="form-group">
            <app-token-string v-model="form.title" />
          </div>
        </div>
        <div class="widgets-setting__input">
          <span class="modal__title">ссылка</span>
          <div class="form-group">
            <input type="text" placeholder="ссылка" v-model="form.link" />
          </div>
        </div>
        <div class="widgets-setting__btn">
          <button type="submit" class="gen-btn bgnone" @click.prevent="show = !show">Отменить</button>
          <button type="submit" class="gen-btn" @click.prevent="handlerSave">Принять</button>
        </div>
        <p class>Введите знак { в поле, чтобы выбрать переменную</p>
      </div>
    </div>
  </b-modal>
</template>

<script>
import modalWidgets from "@/mixins/modalWidgets";

export default {
  mixins: [modalWidgets],
  data() {
    return {
      form: {
        title: "",
        link: ""
      }
    };
  }
};
</script>
