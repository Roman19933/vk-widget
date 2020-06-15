<template>
  <div class="widgets__content-text widgets__content-text_messages">
    <!-- <app-error-popover :varError="mapErros['text']">
    <template v-slot:varName>-->
    <a
      href="#"
      class="mess-text"
      @click.prevent="$emit('edit:element', {
              typeModal: 'modal-widget-text-area',
              map: {
                title: {
                  fieldName: 'text',
                  value: value.text
                }
              }
            })"
    >{{!!value.text ? value.text : "+ добавить"}}</a>
    <!-- </template>
    </app-error-popover>-->
    <a
      href="#"
      v-b-modal.messages
      @click.prevent="$emit('edit:element', {
              typeModal: 'modal-widget-text-area',
              map: {
                title: {
                  fieldName: 'descr',
                  value: value.descr
                }
              }
            })"
    >{{!!value.descr ? value.descr : "+ добавить"}}</a>
    <component
      v-if="modal"
      :is="`app-${ modal }`"
      :value="value"
      :map-data="mapData"
      :other="other"
      @saved="handlerSaved"
      @close="clear"
    />
  </div>
</template>

<script>
import validateWidgetItem from "@/mixins/validateWidgetItem";
import AppModalWidgetTextArea from "@/components/modal/widgets/AppModalWidgetTextAreaComponent";
export default {
  mixins: [validateWidgetItem],
  components: {
    AppModalWidgetTextArea
  },
  data() {
    return {
      mapData: "",
      modal: "",
      other: null
    };
  },
  mounted() {
    let self = this;
    this.$on("edit:element", e => {
      self.modal = e.typeModal;
      self.mapData = e.map;
      self.other = e.other || null;
    });
  },
  methods: {
    clear() {
      this.mapData = "";
      this.modal = "";
    },
    handlerSaved(e) {
      this.$emit("input", e);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>