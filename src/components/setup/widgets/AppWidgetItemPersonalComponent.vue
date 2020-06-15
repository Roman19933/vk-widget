<template>
  <div class="widgets__content-personal">
    <div class="widgets__content-avatar">
      <img :src="userPhoto ? userPhoto : '/img/photo.png'" alt />
    </div>
    <div class="widgets__content-text widgets__content-text_personal">
      <app-error-popover :varError="mapErros['title']">
        <template v-slot:varName>
          <a
            href="#"
            class="title"
            @click.prevent="
              $emit('edit:element', {
                typeModal: 'modal-widget-title-link',
                map: {
                  title: {
                    fieldName: 'title',
                    value: value.title
                  },
                  link: {
                    fieldName: 'title_url',
                    value: value.title_url
                  }
                }
              })
            "
            >{{ !!value.title ? value.title : "+ добавить" }}</a
          >
        </template>
      </app-error-popover>
      <a
        href="#"
        class="text"
        @click.prevent="
          $emit('edit:element', {
            typeModal: 'modal-widget-text-area',
            map: {
              title: {
                fieldName: 'text',
                value: value.text
              }
            }
          })
        "
        >{{ !!value.text ? value.text : "+ добавить" }}</a
      >
      <app-error-popover :varError="mapErros['button_url']">
        <template v-slot:varName>
          <a
            href="#"
            class="gen-btn"
            @click.prevent="
              $emit('edit:element', {
                typeModal: 'modal-widget-title-link',
                map: {
                  title: {
                    fieldName: 'button',
                    value: value.button
                  },
                  link: {
                    fieldName: 'button_url',
                    value: value.button_url
                  }
                }
              })
            "
            >{{ !!value.button ? value.button : "+ добавить" }}</a
          >
        </template>
      </app-error-popover>
    </div>
    <component
      v-if="modal"
      :is="`app-${modal}`"
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
import AppModalWidgetTitleLink from "@/components/modal/widgets/AppModalWidgetTitleLinkComponent.vue";
export default {
  mixins: [validateWidgetItem],
  components: {
    AppModalWidgetTextArea,
    AppModalWidgetTitleLink
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
  },
  props: {
    userPhoto: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped></style>
