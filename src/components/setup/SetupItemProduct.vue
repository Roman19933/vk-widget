<template>
  <div class="item">
    <div class="item__menu">
      <a
        href="#"
        class="item__menu-close"
        @click.prevent="$emit('remove:item')"
        v-if="this.index > 3"
      >
        <img src="/img/close-error.png" alt />
      </a>
      <div class="item__menu-burger">
        <img src="/img/burger.png" alt />
      </div>
    </div>
    <div class="item__img" v-b-modal="`upload-${index}`">
      <img src="/img/photo.png" alt class="photo" v-if="!this.urlToFoto" />
      <img :src="urlToFoto" alt v-else />
    </div>
    <div class="item__info">
      <div class="item__popover">
        <div v-if="mapErros['title']" class="item__popover-info">
          <img src="/img/info.png" alt />
          <div class="popover popover_setup">
            <div class="popover__wrapper">
              <span v-for="(e, ind) in mapErros['title']" :key="ind">
                {{ e }}
              </span>
            </div>
          </div>
        </div>
        <a href="#" class="item__title" v-b-modal="`title-${index}`">{{
          !!item.title ? item.title : "+ добавить"
        }}</a>
      </div>
      <!-- <a href="#" class="item__title" v-b-modal="`title-${index}`">{{
        !!item.title ? item.title : "+ добавить"
      }}</a> -->
      <div class="item__popover">
        <div v-if="mapErros['descr']" class="item__popover-info">
          <img src="/img/info.png" alt />
          <div class="popover popover_setup">
            <div class="popover__wrapper">
              <span v-for="(e, ind) in mapErros['descr']" :key="ind">
                {{ e }}
              </span>
            </div>
          </div>
        </div>
        <a href="#" class="item__price" v-b-modal="`subs-${index}`">{{
          !!item.descr ? item.descr : "+ добавить"
        }}</a>
      </div>
      <!-- <a href="#" class="item__price" v-b-modal="`subs-${index}`">{{
        !!item.descr ? item.descr : "+ добавить"
      }}</a> -->
      <div class="item__popover">
        <div v-if="mapErros['link_url']" class="item__popover-info">
          <img src="/img/info.png" alt />
          <div class="popover popover_setup">
            <div class="popover__wrapper">
              <span v-for="(e, ind) in mapErros['link_url']" :key="ind">
                {{ e }}
              </span>
            </div>
          </div>
        </div>
        <a
          :href="item.link_url"
          class="item__sales"
          @click.prevent
          v-b-modal="`link-${index}`"
          >{{ !!item.link ? item.link : "+ добавить" }}</a
        >
      </div>
      <!-- <span>{{ this.error }}</span> -->
      <!-- <span>{{this.er}}</span> -->
      <!-- <span>{{this.e('link_url')}}</span> -->
    </div>
    <setup-modal-title itemTitle :data="item" :id="`title-${index}`" />
    <setup-modal-title itemLink :data="item" :id="`link-${index}`" />
    <setup-modal-sub text :data="item" :id="`subs-${index}`" />
    <setup-modal-upload
      :data="item"
      :id="`upload-${index}`"
      :type="type"
      @url="fotoUrl"
    />
  </div>
</template>

<script>
import SetupModalTitle from "@/components/modal/SetupModalTitle";
import SetupModalSub from "@/components/modal/SetupModalSub";
import SetupModalUpload from "@/components/modal/SetupModalUpload";
import _ from "lodash";
export default {
  props: {
    item: {
      type: Object,
      default: function() {
        return {};
      }
    },
    validationErrors: {
      type: Object,
      default: () => {
        return [];
      }
    },
    prenameValidation: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: ""
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      urlToFoto: ""
    };
  },
  computed: {
    mapErros() {
      let obj = {};
      _.forEach(this.item, (el, key) => {
        obj = Object.assign(obj, {
          [key]:
            this.validationErrors[`${this.prenameValidation}${key}`] || null
        });
      });
      return obj;
    }
  },
  methods: {
    fotoUrl(val) {
      this.urlToFoto = val;
    }
  },
  components: {
    SetupModalTitle,
    SetupModalSub,
    SetupModalUpload
  }
};
</script>
