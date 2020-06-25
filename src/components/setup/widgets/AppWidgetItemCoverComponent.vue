<template>
  <div class="item">
    <div class="item__menu">
      <a
        v-if="itemLength > 1"
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
      @click.prevent="$emit('edit:element',{
        typeModal:'modal-widget-upload-image-stars',
        map: {
            image: {
              fieldName: 'cover_id',
              value: ''
            },
            src: {
              fieldName: 'icon_url',
              value: ''
            },
            other: {
              sizeImage: 'cover'
            }
        }
    })"
    >
      <img :src="value.icon_url || `/img/photo.png`" alt class="photo" />
      <app-error-popover :varError="mapErros['cover_id']"></app-error-popover>
    </div>
    <div class="item__info">
      <div class="item__info-cover">
        <app-error-popover :varError="mapErros['title']">
          <template v-slot:varName>
            <a
              href="#"
              class="item__info-cover_title"
              @click.prevent="$emit('edit:element', {
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
            })"
            >{{!!value.title ? value.title : "+ добавить"}}</a>
          </template>
        </app-error-popover>
        <app-error-popover :varError="mapErros['descr']">
          <template v-slot:varName>
            <a
              href="#"
              class="item__info-cover_star"
              @click.prevent="$emit('edit:element', {
              typeModal: 'modal-widget-text',
              map: {
                title: {
                  fieldName: 'descr',
                  value: value.descr
                },
              }
            })"
            >{{!!value.descr ? value.descr : "+ добавить"}}</a>
          </template>
        </app-error-popover>
      </div>
      <app-error-popover :varError="mapErros['button_url']">
        <template v-slot:varName>
          <a
            href="#"
            class="gen-btn"
            @click.prevent="$emit('edit:element', {
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
            })"
          >{{!!value.button ? value.button : "+ добавить"}}</a>
        </template>
      </app-error-popover>
    </div>
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
import AppModalWidgetTitleLink from "@/components/modal/widgets/AppModalWidgetTitleLinkComponent.vue";
import AppModalWidgetText from "@/components/modal/widgets/AppModalWidgetTextComponent.vue";
import AppModalWidgetUploadImageStars from "@/components/modal/widgets/AppModalWidgetUploadImageStarsComponent.vue";
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
  props: {
    itemLength: {
      type: Number,
      default: 0
    }
  },
  mixins: [validateWidgetItem],
  components: {
    AppModalWidgetTitleLink,
    AppModalWidgetUploadImageStars,
    AppModalWidgetText
  }
};
</script>
