<template>
  <div class="item">
    <div class="item__menu">
      <a
        v-if="itemLength > 3"
        href="#"
        class="item__menu-close"
        @click.prevent="$emit('remove:item')"
      >
        <img src="/img/close-error.png" alt />
      </a>
      <div class="item__menu-burger">
        <img src="/img/burger.png" alt />
      </div>
    </div>
    <div
      class="item__img"
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
              sizeImage: `${large ? 'large' : 'square'}`
            }
          }
        })
      "
    >
      <img :src="value.icon_url || `/img/photo.png`" alt class="photo" />
    </div>

    <app-error-popover
      :prename-validation="`${prenameValidation}icon_id`"
      :validation-errors="validationErrors"
    >
    </app-error-popover>
    <div class="item__info">
      <app-error-popover
        :prename-validation="`${prenameValidation}title`"
        :prename-validation2="`${prenameValidation}url`"
        :validation-errors="validationErrors"
      >
        <template v-slot:varName>
          <a
            href="#"
            class="item__title"
            @click.prevent="
              $emit('edit:element', {
                typeModal: 'modal-widget-title-link',
                map: {
                  title: {
                    fieldName: 'title',
                    value: value.title
                  },
                  link: {
                    fieldName: 'url',
                    value: value.url
                  }
                }
              })
            "
          >
            {{ !!value.title ? value.title : "+ добавить" }}
          </a>
        </template>
      </app-error-popover>
      <app-error-popover
        :prename-validation="`${prenameValidation}descr`"
        :validation-errors="validationErrors"
      >
        <template v-slot:varName>
          <a
            href="#"
            class="item__price"
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
          >
            {{ !!value.descr ? value.descr : "+ добавить" }}
          </a>
        </template>
      </app-error-popover>
      <app-error-popover
        :prename-validation="`${prenameValidation}link`"
        :prename-validation2="`${prenameValidation}link_url`"
        :validation-errors="validationErrors"
      >
        <template v-slot:varName>
          <a
            :href="value.link_url"
            class="item__sales"
            @click.prevent="
              $emit('edit:element', {
                typeModal: 'modal-widget-title-link',
                map: {
                  title: {
                    fieldName: 'link',
                    value: value.link
                  },
                  link: {
                    fieldName: 'link_url',
                    value: value.link_url
                  }
                }
              })
            "
            >{{ !!value.link ? value.link : "+ добавить" }}</a
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
import AppModalWidgetTitleLink from "@/components/modal/widgets/AppModalWidgetTitleLinkComponent.vue";
import AppModalWidgetText from "@/components/modal/widgets/AppModalWidgetTextComponent.vue";
import AppModalWidgetUploadImage from "@/components/modal/widgets/AppModalWidgetUploadImageComponent.vue";
export default {
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
  mixins: [validateWidgetItem],
  components: {
    AppModalWidgetTitleLink,
    AppModalWidgetUploadImage,
    AppModalWidgetText
  },
  props: {
    itemLength: {
      type: Number,
      default: 0
    },
    large: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped></style>
