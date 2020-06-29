<template>
  <div class="widgets__content-personal item item__table">
    <div class="head">
      <template v-for="(item, index) in value.head">
        <div class="head__wrapper" :key="index">
          <div class="widgets__content-text">
            <app-error-popover
              :prename-validation="`data.head.${index}.text`"
              :validation-errors="validationErrors"
            >
              <template v-slot:varName>
                <a
                  href="#"
                  class="text"
                  @click.prevent="
                    $emit('edit:element', {
                      typeModal: 'modal-widget-text',
                      map: {
                        title: {
                          fieldName: `head[${index}].text`,
                          value: item.text
                        }
                      }
                    })
                  "
                  >{{ !!item.text ? item.text : "+ добавить" }}</a
                >
              </template>
            </app-error-popover>
          </div>
        </div>
      </template>
    </div>
    <div class="body">
      <draggable v-model="value.body" group="table">
        <template v-for="(item, index) in value.body">
          <div class="body__wrapper" :key="`item-${index}`">
            <div class="item__menu">
              <a
                v-if="value.body.length >= 3"
                href="#"
                class="item__menu-close"
                @click.prevent="removeItem(index)"
              >
                <img src="/img/close-error.png" alt />
              </a>
              <div class="item__menu-burger">
                <img src="/img/burger.png" alt />
              </div>
            </div>
            <app-error-popover
              :prename-validation="`data.body.${index}.0.icon_id`"
              :validation-errors="validationErrors"
            >
              <template v-slot:varName>
                <div
                  class="widgets__content-avatar"
                  @click.prevent="
                    $emit('edit:element', {
                      typeModal: 'modal-widget-upload-image',
                      map: {
                        image: {
                          fieldName: `body[${index}][0].icon_id`,
                          value: ''
                        },
                        src: {
                          fieldName: `body[${index}][0].icon_url`,
                          value: ''
                        },
                        other: {
                          sizeImage: 'small'
                        }
                      }
                    })
                  "
                >
                  <div
                    class="widgets__content-avatar__wrapper"
                    :class="{ 'photo-url': item[0].icon_url }"
                  >
                    <img
                      :src="item[0].icon_url || `/img/photo.png`"
                      class="photo"
                    />
                  </div>
                </div>
              </template>
            </app-error-popover>
            <template v-for="(children, idx) in item">
              <div class="widgets__content-text" :key="`children-${idx}`">
                <app-error-popover
                  :prename-validation="`data.body.${index}.${idx}.text`"
                  :prename-validation2="`data.body.${index}.${idx}.url`"
                  :validation-errors="validationErrors"
                >
                  <template v-slot:varName>
                    <a
                      href="#"
                      class="text"
                      @click.prevent="
                        $emit('edit:element', {
                          typeModal: 'modal-widget-title-link',
                          map: {
                            title: {
                              fieldName: `body[${index}][${idx}].text`,
                              value: children.text
                            },
                            link: {
                              fieldName: `body[${index}][${idx}].url`,
                              value: children.url
                            }
                          }
                        })
                      "
                      >{{ !!children.text ? children.text : "+ добавить" }}</a
                    >
                  </template>
                </app-error-popover>
              </div>
            </template>
          </div>
        </template>
      </draggable>
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
  data() {
    return {
      head: [],
      body: [],
      mapData: "",
      modal: "",
      other: null
    };
  },
  methods: {
    removeItem(index) {
      this.value.body.splice(index, 1);
    },
    clear() {
      this.mapData = "";
      this.modal = "";
    },
    handlerSaved(e) {
      this.$emit("input", e);
      console.log(e);
    }
  },
  mounted() {
    console.log(this.validationErrors);
    let self = this;
    this.$on("edit:element", e => {
      self.modal = e.typeModal;
      self.mapData = e.map;
      self.other = e.other || null;
    });
  },
  components: {
    AppModalWidgetTitleLink,
    AppModalWidgetUploadImage,
    AppModalWidgetText
  }
};
</script>
