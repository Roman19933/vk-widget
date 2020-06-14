<template>
  <form action="#" @submit.prevent="create">
    <div class="widgets vidget-page">
      <div class="widgets__wrapper vidget-page__wrapper">
        <div class="widgets__left">
          <app-loader v-model="loading">
            <div class="widgets__header vidget-page__head">
              <div class="widgets__header-title vidget-page__title">
                <!-- <h4>{{ this.widget.name }}</h4> -->
                <a href="#" v-b-modal="`header-${widget.id}`">{{ this.widget.name }}</a>
                <!-- <a href="#" v-b-modal.header>{{ this.widget.name }}</a> -->
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
                  <a href="#" v-b-modal.default>{{ this.widget.data.title }}</a>
                  <!-- <a href="#" >{{ this.user.first_name }}</a> -->
                </div>
                <div class="widgets__items widgets__items_product">
                  <draggable
                    v-model="widget.data.tiles"
                    group="product"
                    class="widgets__items_draggable"
                  >
                    <setup-item-product
                      v-for="(item, index) in widget.data.tiles"
                      :key="`${ item.title + index }`"
                      :item="item"
                      :lenghtWidget="widget.data.tiles.length"
                      :index="index"
                      :prename-validation="`data.tiles.${ index }.`"
                      :validation-errors="validationErrors"
                      type="tilesSquare"
                      @remove:item="removeItem(widget.data.tiles, index)"
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
                <button class="gen-btn" type="submit">Сохранить</button>
              </div>
            </div>
            <div class="widgets__footer">
              <div class="widgets__rules">
                <p>
                  В виджетах запрещено размещение сторонней коммерческой и
                  политической рекламы! Подробнее в п.5.13.4.1.
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
import SetupModalTitle from "@/components/modal/SetupModalTitle";
import SetupModalSub from "@/components/modal/SetupModalSub";
import AppSwitch from "@/components/form/AppSwitch";
import SetupDefault from "@/mixins/setupDefault";
// import {mapGetters} from "vuex"
export default {
  data() {
    return {
      widgetEdit: null,
      validationErrors: {},
      loading: false,
      widget: {
        type_name: "Акционные товары32",
        type_link: "/setup/actions?category=sales&edit=true",
        data: {
          more: "",
          more_url: "",
          title: "{firstname}, успей на распродажу!",
          title_counter: "",
          title_url: "",
          tiles: [
            {
              descr: "3 900 руб",
              icon_id: "",
              // icon_type: "160x160",
              link: "Написать",
              link_url: "https://vk.com/editapp?id=7467558&section=admins",
              title: "Кольцо",
              url: ""
            },
            {
              descr: "3 900 руб",
              icon_id: "",
              // icon_type: "160x160",
              link: "Написать",
              link_url: "https://vk.com/editapp?id=7467558&section=admins",
              title: "Кольцо",
              url: ""
            },
            {
              descr: "3 900 руб",
              icon_id: "",
              // icon_type: "160x160",
              link: "Написать",
              link_url: "https://vk.com/editapp?id=7467558&section=admins",
              title: "Кольцо",
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
        sc_type: "sales"
      }
      // switch:false
    };
  },
  mounted() {
    // console.log(this.$route.query.edit);
    if (this.$route.query.edit) {
      this.widgetEdit = JSON.parse(
        JSON.stringify(this.$store.getters["server/sales/item"])
      );
      Object.assign(this.widget, this.widgetEdit);
    }
    // if (this.widgetEdit.length !== 0) {
    // }
  },
  mixins: [SetupDefault],
  components: {
    SetupForm,
    AppSwitch,
    SetupItemProduct,
    SetupModalTitle,
    SetupModalSub
  },
  // computed:{
  //   ...mapGetters({
  //     user:'vk/bridge/user'
  //   })
  // },
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
    // userInfo(val) {
    //   this.switch = val
    //   console.log(this.switch)
    //   if(val) {
    //     this.widget.data.title = this.widget.data.title.replace("{firstname}",this.user.first_name)
    //   } else {
    //     this.widget.data.title = this.widget.data.title.replace(this.user.first_name,"{firstname}")
    //   }
    // }
  }
  // async mounted() {
  //   await this.$store.dispatch('vk/bridge/getUser')
  //   console.log(this.user);
  // }
};
</script>

<style lang="scss" scoped></style>
