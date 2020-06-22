<template>
  <b-modal v-model="show" hide-header hide-footer centered dialog-class="modal-dialog__widgets">
    <div class="modal__wrapper modal__wrapper-widgets">
      <button class="modal__close" @click.prevent="show = !show">
        <img src="/img/modal-close.png" alt />
      </button>
      <div class="widgets-setting__content">
        <div class="widgets-setting__input">
          <span class="modal__title">Описание</span>
          <div class="form-group">
            <input type="text" placeholder="описание" v-model="form.title" />
          </div>
        </div>
        <div class="widgets-setting__btn">
          <button type="submit" class="gen-btn bgnone" @click.prevent="show = !show">Отменить</button>
          <button type="submit" class="gen-btn" @click.prevent="handlerSavesTable">Принять</button>
        </div>
        <p>Введите знак { в поле, чтобы выбрать переменную</p>
      </div>
    </div>
    <!-- <div class="modal__wrapper modal__extra" v-if="this.openExtra">
      <div class="modal__extra-content">
        <span class="modal__title">выберите переменную</span>
        <div class="content">
          <nav>
            <ul>
              <li>
                <a href="#" @click="$emit('changes',$event.target)" data-value="{имя}">{имя} - Иван</a>
              </li>
              <li>
                <a
                  href="#"
                  @click="$emit('changes',$event.target)"
                  data-value="{любимый(ая)}"
                >{любимый(ая)} - Катя</a>
              </li>
              <li>
                <a
                  href="#"
                  @click="$emit('changes',$event.target)"
                  data-value="{любимого(ой)}"
                >{любимого(ой)} - Кати</a>
              </li>
              <li>
                <a
                  href="#"
                  @click="$emit('changes',$event.target)"
                  data-value="{любимому(ой)}"
                >{любимому(ой)} - Кате</a>
              </li>
              <li>
                <a
                  href="#"
                  @click="$emit('changes',$event.target)"
                  data-value="{любимого(ую)}"
                >{любимого(ую)} - Катю</a>
              </li>
              <li>
                <a
                  href="#"
                  @click="$emit('changes',$event.target)"
                  data-value="{любимом(ой)}"
                >{любимом(ой)} - Кате</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>-->
  </b-modal>
</template>

<script>
import modalWidgets from "@/mixins/modalWidgets";

export default {
  mixins: [modalWidgets],
  data() {
    return {
      form: {
        title: ""
      }
    };
  }
};
</script>
