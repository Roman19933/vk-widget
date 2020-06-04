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
          <span class="modal__title">заголовок</span>
          <div class="form-group">
            <input type="text" placeholder="заголовок" v-model="title" />
          </div>
        </div>
        <div class="widgets-setting__input">
          <span class="modal__title">ссылка</span>
          <div class="form-group">
            <input type="text" placeholder="ссылка" v-model="link" />
          </div>
        </div>
        <div class="widgets-setting__btn">
          <button
            type="submit"
            class="gen-btn bgnone"
            @click.prevent="show = !show"
          >
            Отменить
          </button>
          <button type="submit" class="gen-btn" @click.prevent="add">
            Принять
          </button>
        </div>
        <p class>Введите знак [ в поле, чтобы выбрать переменную</p>
      </div>
    </div>
    <div class="modal__wrapper modal__extra" v-if="this.openExtra">
      <div class="modal__extra-content">
        <span class="modal__title">выберите переменную</span>
        <div class="content">
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  @click="$emit('changes', $event.target)"
                  data-value="{имя}"
                  >{имя} - Иван</a
                >
              </li>
              <li>
                <a
                  href="#"
                  @click="$emit('changes', $event.target)"
                  data-value="{любимый(ая)}"
                  >{любимый(ая)} - Катя</a
                >
              </li>
              <li>
                <a
                  href="#"
                  @click="$emit('changes', $event.target)"
                  data-value="{любимого(ой)}"
                  >{любимого(ой)} - Кати</a
                >
              </li>
              <li>
                <a
                  href="#"
                  @click="$emit('changes', $event.target)"
                  data-value="{любимому(ой)}"
                  >{любимому(ой)} - Кате</a
                >
              </li>
              <li>
                <a
                  href="#"
                  @click="$emit('changes', $event.target)"
                  data-value="{любимого(ую)}"
                  >{любимого(ую)} - Катю</a
                >
              </li>
              <li>
                <a
                  href="#"
                  @click="$emit('changes', $event.target)"
                  data-value="{любимом(ой)}"
                  >{любимом(ой)} - Кате</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </b-modal>
</template>
<script>
import SetupModalDefault from "@/mixins/setupModalDefault";
export default {
  props: {
    data: {
      type: Object
    },
    mainTitle: {
      type: Boolean
    },
    itemTitle: {
      type: Boolean
    },
    itemTitlePlace: {
      type: Boolean
    },
    itemLink: {
      type: Boolean
    },
    itemButton: {
      type: Boolean
    },
    id: {
      type: String,
      default: "default"
    }
  },
  data() {
    return {
      show: false,
      title: "",
      link: ""
    };
  },
  watch: {
    title(val) {
      this.change(val, "title");
    },
    link(val) {
      this.change(val, "link");
    }
  },
  mounted() {
    if (this.mainTitle) {
      this.title = this.data.title;
      this.link = this.data.title_url;
    } else if (this.itemTitle) {
      this.title = this.data.title;
      this.link = this.data.url;
    } else if (this.itemLink) {
      this.title = this.data.link;
      this.link = this.data.link_url;
    } else if (this.itemButton) {
      this.title = this.data.button;
      this.link = this.data.button_url;
    } else if (this.itemTitlePlace) {
      this.title = this.data.title;
      this.link = this.data.title_url;
    }
  },
  mixins: [SetupModalDefault],
  methods: {
    add() {
      if (this.mainTitle) {
        this.data.title = this.title;
        this.data.title_url = this.link;
      } else if (this.itemTitle) {
        this.data.title = this.title;
        this.data.url = this.link;
      } else if (this.itemLink) {
        this.data.link = this.title;
        this.data.link_url = this.link;
      } else if (this.itemButton) {
        this.data.button = this.title;
        this.data.button_url = this.link;
      } else if (this.itemTitlePlace) {
        this.data.title = this.title;
        this.data.title_url = this.link;
      }
      this.$bvModal.hide(this.id);
    }
  }
};
</script>
