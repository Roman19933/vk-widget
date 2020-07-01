<template>
  <div>
    <input
      :value="value"
      type="text"
      placeholder="описание"
      ref="inputString"
      @input="input"
      @focus="input"
    />
    <div v-if="show" class="modal__wrapper modal__extra">
      <div class="modal__extra-content">
        <span class="modal__title">выберите переменную</span>
        <div class="content">
          <nav>
            <ul>
              <li v-for="(token, key) in tokens" :key="key">
                <a href="#" @click.prevent="changeToken(key)">{{ token }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      tokens: {
        "{firstname}": "{firstname} - Иван",
        "{lovename}": "{lovename} - Имя любимой",
        "{любимый(ая)}": "{любимый(ая)}",
        "{любимый(ая)}": "{любимый(ая)}",
        "{любимого(ой)}": "{любимого(ой)}",
        "{любимому(ой)}": "{любимому(ой)}",
        "{любимого(ую)}": "{любимого(ую)}",
        "{любимым(ой)}": "{любимым(ой)}",
        "{любимом(ой)}": "{любимом(ой)}",
        "{userAvatar}": "{userAvatar}"
      },
      selectionStart: 0,
      show: false,
    };
  },
  methods: {
    changeToken(key) {
      this.show = false;

      let textBefore = this.value
        .substring(0, this.selectionStart)
        .slice(0, -1);
      let textAfter = this.value.substring(
        this.selectionStart,
        this.value.length
      );

      this.$emit("input", textBefore + key + textAfter);
    },
    input(e) {
      this.selectionStart = e.target.selectionStart;
      this.show = e.data === '{' ? true : false
      this.$emit("input", e.target.value)
    }
  }
};
</script>
