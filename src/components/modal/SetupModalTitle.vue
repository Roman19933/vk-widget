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
          <button type="submit" class="gen-btn bgnone" @click.prevent="show = !show">Отменить</button>
          <button type="submit" class="gen-btn" @click.prevent="add">Принять</button>
        </div>
        <p class>Введите знак { в поле, чтобы выбрать переменную</p>
      </div>
    </div>
    <div class="modal__wrapper modal__extra" v-if="this.openExtra">
      <div class="modal__extra-content">
        <span class="modal__title">выберите переменную</span>
        <div class="content">
          <nav>
            <ul>
              <li>
                <a href="#" @click="inputs($event)" data-value="{имя}">{имя} - Иван</a>
              </li>
              <li>
                <a href="#" @click="inputs($event)" data-value="{любимый(ая)}">{любимый(ая)} - Катя</a>
              </li>
              <li>
                <a
                  href="#"
                  @click="inputs($event)"
                  data-value="{любимого(ой)}"
                >{любимого(ой)} - Кати</a>
              </li>
              <li>
                <a
                  href="#"
                  @click="inputs($event)"
                  data-value="{любимому(ой)}"
                >{любимому(ой)} - Кате</a>
              </li>
              <li>
                <a
                  href="#"
                  @click="inputs($event)"
                  data-value="{любимого(ую)}"
                >{любимого(ую)} - Катю</a>
              </li>
              <li>
                <a href="#" @click="inputs($event)" data-value="{любимом(ой)}">{любимом(ой)} - Кате</a>
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
    mainTitle: {
      type: Boolean
    },
    itemTitle: {
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
      link: "",
      openExtra: false,
      extraRadio: "{"
    };
  },
  watch: {
    title(val) {
      this.change(val, "title");
      // for (let l in val) {
      //   if (val[l] === "*") {
      //     let n = val.replace("*", this.extraRadio);
      //     this.title = n;
      //   }
      // }
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
    }
  },
  methods: {
    inputs(event) {
      this.extraRadio = event.target.getAttribute("data-value");
      this.openExtra = false;
    },
    change(str, variable) {
      let b = str.split(" ");
      console.log(b);
      for (let i in b) {
        if (b[i].indexOf("{") !== -1) {
          this.openExtra = true;
          console.log(i);
          console.log(b[i]);
          let newStr = str.replace("{", this.extraRadio);
          switch (variable) {
            case "title":
              this.title = newStr;
              this.extraRadio = "{";
              break;
            case "link":
              this.link = newStr;
              this.extraRadio = "{";
              break;
            case "subs":
              this.subs = newStr;
              this.extraRadio = "{";
              break;
            case "messages":
              this.messages = newStr;
              this.extraRadio = "{";
              break;
          }
        }
      }
    },
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
      }
      this.$bvModal.hide(this.id);
    }
  }
};
</script>