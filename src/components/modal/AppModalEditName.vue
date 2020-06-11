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
                <input v-model="nameVidget" type="text" placeholder="Название виджета" />
                <button @click.prevent="saveName" class="gen-btn">Сохранить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>
<script>
  export default {
    props: {
      vidgetName: {
        type: String,
        default: ''
      },
      vidgetId: {
        type: Number,
        default: null
      },
      groupId: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        nameVidget: this.vidgetName
      }
    },
    methods: {
      async saveName () {
        try {
          let response = await this.$store.dispatch('server/sales/edit', {
            id: this.vidgetId,
            name: this.nameVidget,
            group_id: this.groupId
          })
          console.log(response)
        } catch(e) {
          console.log(e)
        }
      }
    },
    watch: {

    }
  }
</script>