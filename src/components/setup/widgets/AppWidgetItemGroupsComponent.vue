<template>
  <div class="widgets__content-places">
    <div class="item__menu">
      <a href="#" class="item__menu-close" @click.prevent="$emit('remove:item')">
        <img src="/img/close-error.png" alt />
      </a>
      <div class="item__menu-burger">
        <img src="/img/burger.png" alt />
      </div>
    </div>
    <div
      class="widgets__content-avatar widgets__content-avatar_groups"
      @click.prevent="
        $emit('edit:element', {
          typeModal: 'modal-widget-upload-image',
          map: {
            image: {
              fieldName: 'icon_id',
              value: ''
            },
            src: {
              fieldName: 'icon_url',
              value: ''
            },
            other: {
              sizeImage: 'small'
            }
          }
        })
      "
    >
      <img :src="value.icon_url || `/img/photo.png`" alt class="photo" />
      <app-error-popover :varError="mapErros['icon_id']"></app-error-popover>
    </div>
    <div class="widgets__content-text widgets__content-text_places">
      <div class="places-content">
        <app-error-popover :varError="mapErros['title']">
          <template v-slot:varName>
            <a
              href="#"
              class="places-content__title"
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
            >{{ !!value.title ? value.title : "+ добавить" }}</a>
          </template>
        </app-error-popover>
        <a
          href="#"
          class="places-content__text"
          @click.prevent="
            $emit('edit:element', {
              typeModal: 'modal-widget-text',
              map: {
                title: {
                  fieldName: 'descr',
                  value: value.descr
                }
              }
            })
          "
        >{{ !!value.descr ? value.descr : "+ добавить" }}</a>
      </div>
      <app-error-popover :varError="mapErros['button'] || mapErros['button_url']">
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
          >{{ !!value.button ? value.button : "+ добавить" }}</a>
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
import AppModalWidgetTitleLink from "@/components/modal/widgets/AppModalWidgetTitleLinkComponent.vue";
import AppModalWidgetText from "@/components/modal/widgets/AppModalWidgetTextComponent.vue";
import AppModalWidgetUploadImage from "@/components/modal/widgets/AppModalWidgetUploadImageComponent.vue";

export default {
  mixins: [validateWidgetItem],
  components: {
    AppModalWidgetTitleLink,
    AppModalWidgetText,
    AppModalWidgetUploadImage
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
