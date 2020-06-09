<template>
  <client-only>
    <form action="#" @submit.prevent="create">
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
                    @switch-val="userInfo"
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
                      v-if="widget.data.tiles.length < 10 && !this.switch"
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
import {mapGetters} from "vuex"
export default {
  data() {
    return {
      widget: {
        is_active: false,
        type_name: "Акции и скидки",
        type_link: "/setup/sales",
        createdAt: "",
        data: {
          more: "",
          more_url: "",
          title: "{firstname}, хочешь купон на скидку в подарок?",
          title_counter: null,
          title_url: "",
          tiles: [
            {
              descr: "+ добавить",
              icon_id: "5686299_1676309",
              // icon_type: "160x160",
              link: "Получить скидку",
              // link_url: "https://vk.com/editapp?id=7467558&section=admins",
              link_url: "",
              title: "Скидки",
              url: ""
            }
          ]
        },
        id: null,
        name: "Акции и скидки2",
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
      },
      validFields: false,
    }
  },
  computed: {
    ...mapGetters({
      item:'server/sales/item'
    })
  },
  mounted() {
    Object.assign(this.widget,this.item)
    console.log(this.widget)
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
      let payload = this.widget
      const groupId = this.$store.getters['server/token/vkQuery'].vk_group_id
      payload.group_id = +groupId
      if (payload.id || false) {
        console.log("id");
        await this.$store.dispatch("server/sales/edit", payload);
        this.$router.push('/main')
      } else {
        console.log("no id");
        await this.$store.dispatch("server/sales/create", payload);
        this.$router.push('/main')
      }

    }
  }
}
</script>
