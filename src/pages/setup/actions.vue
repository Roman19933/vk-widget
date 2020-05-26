<template>
  <form action="#" @submit.prevent="onSubmit">
    <div class="widgets vidget-page">
      <div class="widgets__wrapper vidget-page__wrapper">
        <div class="widgets__left">
          <div class="widgets__header vidget-page__head">
            <div class="widgets__header-title vidget-page__title">
              <h4>Виджет «Акционные товары»</h4>
            </div>
            <div class="widgets__switch">
              <span>Режим просмотра</span>
              <div class="widgets__switch-btn">
                <app-switch />
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
                    :key="`item-${index}`"
                    :item="item"
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
              <button class="gen-btn" type="submit">Сохранить</button>
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
        </div>
        <div class="widgets__right">
          <setup-form :formData="widget.segmentation" />
        </div>
      </div>
    </div>
    <setup-modal-upload />
    <setup-modal-title />
    <setup-modal-sub />
  </form>
</template>

<script>
import SetupForm from "@/components/setup/SetupForm";
import SetupItemProduct from "@/components/setup/SetupItemProduct";
import SetupModalTitle from "@/components/modal/SetupModalTitle";
import SetupModalSub from "@/components/modal/SetupModalSub";
import SetupModalUpload from "@/components/modal/SetupModalUpload";
import AppSwitch from "@/components/form/AppSwitch";
import SetupDefault from "@/mixins/setupDefault";
export default {
  data() {
    return {
      widget: {
        createdAt: "",
        data: {
          more: "",
          more_url: "",
          title: "{firstname}, успей на распродажу!",
          title_counter: "",
          title_url: "",
          tiles: [
            {
              descr: "3 900 руб",
              icon_id: "5686299_1676309",
              icon_type: "160x160",
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
        name: "",
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
        type: "",
        updatedAt: ""
      }
    };
  },
  mixins: [SetupDefault],
  components: {
    SetupForm,
    AppSwitch,
    SetupItemProduct,
    SetupModalTitle,
    SetupModalSub,
    SetupModalUpload
  }
};
</script>

<style lang="scss" scoped>
</style>