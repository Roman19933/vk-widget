<template>
  <client-only>
    <form action="#" @submit.prevent="onSubmit">
      <div class="widgets vidget-page">
        <div class="widgets__wrapper vidget-page__wrapper">
          <div class="widgets__left">
            <div class="widgets__header vidget-page__head">
              <div class="widgets__header-title vidget-page__title">
                <img src alt />
                <h4>Виджет «Акции и скидки»</h4>
              </div>
              <div class="widgets__switch">
                <span>Режим просмотра</span>
                <div class="widgets__switch-btn">
                  <app-switch
                    v-model="widget.isActive"
                    @switch-val="widget.isActive = !widget.isActive"
                  />
                </div>
              </div>
            </div>
            <div class="widgets__content">
              <div class="widgets__content-wrapper">
                <div class="widgets__content-title">
                  <img src="/img/heart.png" alt />
                  <a href="#" v-b-modal.default>{{this.widget.data.title}}</a>
                </div>
                <div class="widgets__items">
                  <draggable
                    v-model="widget.data.tiles"
                    group="product"
                    class="widgets__items_draggable"
                  >
                    <setup-item-product
                      v-for="(item,index) in widget.data.tiles"
                      :key="`item-${index}`"
                      :item="item"
                      :index="index"
                      type="tilesLarge"
                      @remove:item="removeItem(widget.data.tiles,index)"
                    />
                    <button
                      class="add-item"
                      @click.prevent="addItem(widget.data.tiles)"
                      v-if="widget.data.tiles.length < 10"
                    >+ Добавить элемент</button>
                  </draggable>
                </div>
                <button class="widgets__content-add" @click.prevent>+ Добавить подвал виджета</button>
              </div>
              <div class="widgets__save">
                <button type="submit" class="gen-btn">Сохранить</button>
              </div>
            </div>
            <div class="widgets__footer">
              <div class="widgets__rules">
                <p>
                  В виджетах запрещено размещение сторонней коммерческой и политической рекламы! Подробнее
                  в п.5.13.4.1.
                  <a
                    href="#"
                  >правил ВКонтакте!</a>
                </p>
              </div>
              <div class="widgets__error">
                <p>Некоторые поля заполнены неверно. Внесите изменения и попробуйте снова.</p>
                <button>
                  <img src="/img/close-error.png" alt />
                </button>
              </div>
            </div>
          </div>
          <div class="widgets__right">
            <setup-form :formData="widget.segmentation" />
          </div>
        </div>
      </div>
      <setup-modal-title mainTitle :data="widget.data" />
    </form>
  </client-only>
</template>

<script>
import SetupForm from "@/components/setup/SetupForm";
import SetupItemProduct from "@/components/setup/SetupItemProduct";
import AppSwitch from "@/components/form/AppSwitch";
import SetupDefault from "@/mixins/setupDefault";
import SetupModalTitle from "@/components/modal/SetupModalTitle";
import bridge from '@vkontakte/vk-bridge';
export default {
  data() {
    return {
      widget: {
        createdAt: "",
        data: {
          more: "",
          more_url: "",
          title: "{firstname}, хочешь купон на скидку в подарок?",
          title_counter: "",
          title_url: "",
          tiles: [
            {
              descr: "5 500 руб",
              icon_id: "5686299_1676309",
              // icon_type: "160x160",
              link: "Узнать цену",
              link_url: "https://vk.com/editapp?id=7467558&section=admins",
              title: "Шорти2",
              url: ""
            }
          ]
        },
        groupId: null,
        id: null,
        isActive: false,
        name: "Виджет 1",
        position: 0,
        segmentation: {
          sex: [],
          age: { from: "", to: "" },
          bdate: [],
          relation: [],
          city: [],
          devices: [],
          userSurname: [],
          userName: [],
          userInterests: [],
          relationGroups: [],
          users: [],
          groups_exclude: [],
          groups: []
        },
        type: "tiles",
        updatedAt: ""
      }
    };
  },
  mixins: [SetupDefault],
  components: {
    SetupForm,
    AppSwitch,
    SetupItemProduct,
    SetupModalTitle
  },
  methods: {
    async create () {
      this.$store.dispatch("server/sales/create", this.widget);
      console.log(this.widget)
    },
    async onSubmit () {
      this.getGroupId(this.payloadId)
      let payload = this.widget
      payload.groupId = this.payloadId


      this.create(payload)
    },
    async getGroupId() {
      const APP_ID = +process.env.APP_ID
      bridge
        .send('VKWebAppGetCommunityToken', {
          "app_id": APP_ID,
          "group_id": payloadId,
          "scope": "app_widget"
        })
        .then( data => {
          console.log(payloadId)
          let payloadId = {
            group_id: payloadId
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
