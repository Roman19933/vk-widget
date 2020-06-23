<template>
  <div class="widgets__content-personal item item__table">
    <div class="head">
      <template v-for="(item, index) in value.head">
        <div class="head__wrapper" :key="index">
          <div class="widgets__content-text">
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
                    },
                  }
                })
              "
              >{{ !!item.text ? item.text : "+ добавить" }}</a
            >
          </div>
        </div>
      </template>
    </div>
    <div class="body">
      <draggable v-model="body" group="table">
        <template v-for="(item, index) in value.body">
          <div class="body__wrapper" :key="`item-${index}`">
            <div class="item__menu">
              <a
                v-if="body.length >= 3"
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
            <div class="widgets__content-avatar">
              <img src="/img/photo.png" alt class="photo" />
            </div>
            <template v-for="(children, index) in item">
              <div class="widgets__content-text" :key="`children-${index}`">
                <a href="#" class="text">{{
                  !!children.text ? children.text : "+ добавить"
                }}</a>
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
import AppModalWidgetTitleLink from "@/components/modal/widgets/AppModalWidgetTitleLinkComponent.vue";
import AppModalWidgetText from "@/components/modal/widgets/AppModalWidgetTextComponent.vue";
import AppModalWidgetUploadImage from "@/components/modal/widgets/AppModalWidgetUploadImageComponent.vue";

export default {
  props: {
    value: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
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
      this.body.splice(index, 1);
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
    // this.head = this.value.head;
    // this.body = this.value.body;
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
