<template>
  <form action="#" @submit.prevent="create">
    <div class="widgets vidget-page">
      <div class="widgets__wrapper vidget-page__wrapper">
        <div class="widgets__left">
          <app-loader v-model="loading">
            <div class="widgets__header vidget-page__head">
              <div class="widgets__header-title vidget-page__title">
                <img src alt />
                <a href="#" v-b-modal="`header-${widget.id}`">{{ this.widget.name }}</a>
                <!-- <h4>Виджет «Акционные товары»</h4> -->
              </div>
              <div class="widgets__switch">
                <span>Режим просмотра</span>
                <div class="widgets__switch-btn">
                  <app-switch @switch-val="userInfo" />
                </div>
              </div>
            </div>
            <div class="widgets__content">
              <div class="widgets__content-wrapper">
                <div class="widgets__content-title">
                  <img src="/img/heart.png" alt />
                  <a href="#" v-b-modal.default>{{this.widget.data.title}}</a>
                </div>
                <div class="widgets__items widgets__items_product">
                  <draggable
                    v-model="widget.data.tiles"
                    group="product"
                    class="widgets__items_draggable"
                  >
                    <setup-item-product
                      v-for="(item,index) in widget.data.tiles"
                      :key="`${ item.title + index }`"
                      :index="index"
                      :lenghtWidget="widget.data.tiles.length"
                      :item="item"
                      :prename-validation="`data.tiles.${ index }.`"
                      :validation-errors="validationErrors"
                      type="tilesSquare"
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
                <button class="gen-btn">Сохранить</button>
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
            </div>
          </app-loader>
        </div>
        <!-- <div class="widgets__right">
          <setup-form :formData="widget.segmentation" />
        </div>-->
      </div>
    </div>
    <setup-modal-title mainTitle :data="widget.data" />
    <setup-modal-sub headerTitle :data="widget" :id="`header-${widget.id}`" />
  </form>
</template>

<script>
import SetupForm from "@/components/setup/SetupForm";
import SetupItemProduct from "@/components/setup/SetupItemProduct";
import AppSwitch from "@/components/form/AppSwitch";
import SetupDefault from "@/mixins/setupDefault";
import SetupModalTitle from "@/components/modal/SetupModalTitle";
import SetupModalSub from "@/components/modal/SetupModalSub";
export default {
  data() {
    return {
      widgetEdit: null,
      validationErrors: {},
      loading: false,
      widget: {
        type_name: "Рекомендование товари",
        type_link: "/setup/recomended?category=sales&edit=true",
        data: {
          more: "",
          more_url: "",
          title: "{firstname}, успей на распродажу!",
          title_counter: "",
          title_url: "",
          tiles: [
            {
              descr: "5 500 руб",
              icon_id: "",
              // icon_type: "160x160",
              link: "Узнать цену",
              link_url: "https://vk.com/editapp?id=7467558&section=admins",
              title: "Шорти",
              url: ""
            },
            {
              descr: "5 500 руб",
              icon_id: "",
              // icon_type: "160x160",
              link: "Узнать цену",
              link_url: "https://vk.com/editapp?id=7467558&section=admins",
              title: "Шорти2",
              url: ""
            },
            {
              descr: "5 500 руб",
              icon_id: "",
              // icon_type: "160x160",
              link: "Узнать цену",
              link_url: "https://vk.com/editapp?id=7467558&section=admins",
              title: "Шорти1",
              url: ""
            }
          ]
        },
        groupId: null,
        id: null,
        isActive: false,
        name: "Виджет «Акционные товары»",
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
        sc_type: "recomended"
      }
    };
  },
  mounted() {
    console.log(this.$route.query);
    console.log(this.$route);
    if (this.$route.query.edit) {
      this.widgetEdit = JSON.parse(
        JSON.stringify(this.$store.getters["server/sales/item"])
      );
      Object.assign(this.widget, this.widgetEdit);
      console.log(this.widgetEdit);
    }
    // if (this.widgetEdit.length !== 0) {
    // }
  },
  mixins: [SetupDefault],
  components: {
    SetupForm,
    AppSwitch,
    SetupItemProduct,
    SetupModalSub,
    SetupModalTitle
  },
  methods: {
    async create() {
      this.loading = true;
      try {
        let payload = this.widget;
        const groupId = this.$store.getters["server/token/vkQuery"].vk_group_id;
        payload.group_id = +groupId;
        if (payload.id || false) {
          console.log("id");
          await this.$store.dispatch("server/sales/edit", payload);
          this.$bvToast.show("update-toast");
          // this.$router.push('/main')
        } else {
          console.log("no id");
          await this.$store.dispatch("server/sales/create", payload);
          this.$bvToast.show("create-toast");
          // this.$router.push('/main')
        }
      } catch ({ data }) {
        this.validationErrors = data;
        console.log(data);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
