<template>
  <b-modal id="modal-edit-name" hide-header hide-footer>
    <div class="modal__wrapper promocode">
      <button class="modal__close" @click="$bvModal.hide('modal-edit-name')">
        <img src="img/modal-close.png" alt />
      </button>
      <div class="widget-public">
        <div class="widget-public__wrapper">
          <img src="img/PIT.svg" alt class="widget-public__img" />
          <div class="widget-public__info">
            <h2 class="modal__title">Изменение названия виджета</h2>
            <p
              class="modal__text"
            >Введите новое название для вашего виджета и нажмите на кнопку «сохранить»</p>
            <div class="widget-public__group">
              <div class="form-group">
                <input v-model="namewidget" type="text" placeholder="Название виджета" />
                <app-loader v-model="loading">
                  <button @click.prevent="saveName" class="gen-btn">Сохранить</button>
                </app-loader>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>
<script>
  import axios from "axios"
  export default {
    props: {
      widgetName: {
        type: String,
        default: ''
      },
      widgetId: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        loading: false,
        namewidget: this.widgetName
      }
    },
    methods: {
      async saveName () {
        this.loading = true
        try {
          await axios.patch(
            process.env.NUXT_APP_API_URL + 'widgets/rename/' + this.widgetId,
            {
                widget_id: this.widgetId,
                name: this.namewidget
            }
          )
          this.$bvModal.hide('modal-edit-name')
          this.$emit('rename')
        } catch(e) {
          console.log(e)
        } finally {
          this.loading = false
        }
      }
    },
    watch: {
      widgetName: {
        handler(bef) {
          this.namewidget = bef
        }
      }
    }
  }
</script>
