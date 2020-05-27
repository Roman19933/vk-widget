<template>
  <form action="#" @submit.prevent="onSubmit">
    <div class="widgets vidget-page">
      <div class="widgets__wrapper vidget-page__wrapper">
        <div class="widgets__left feedback">
          <div class="widgets__header vidget-page__head">
            <div class="widgets__header-title vidget-page__title">
              <img src alt />
              <h4>ВИДЖЕТ «ТОЧКИ ПРОДАЖ»</h4>
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
                <img src="/img/fire.png" alt />
                <a href="#">{{this.widget.data.title}}</a>
              </div>
              <div class="widgets__items widgets__items_places">
                <draggable
                  v-model="widget.data.rows"
                  group="product"
                  class="widgets__items_draggable"
                >
                  <setup-item-places
                    v-for="(item,index) in widget.data.rows"
                    :key="`item-${index}`"
                    :item="item"
                    @remove:item="removeItem(widget.data.rows,index)"
                  />
                  <button
                    class="add-item"
                    @click.prevent="addItem(widget.data.rows)"
                    v-if="widget.data.rows.length < 6"
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
        </div>
        <div class="widgets__right">
          <setup-form :formData="widget.segmentation" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import SetupForm from "@/components/setup/SetupForm";
import SetupItemPlaces from "@/components/setup/SetupItemPlaces";
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
          title: "{firstname}, ближайшие к вам магазины сети",
          title_counter: "",
          title_url: "",
          rows: [
            {
              address: "ул. Советская, 33",
              button: "Связаться",
              button_url: "https://vk.com/apps?act=manage",
              descr: "Более 3000 пар обуви в одном месте",
              icon_id: "",
              text: null,
              time: "8:00-20:00(без выходных)",
              title: "Магазин «Дом обуви»",
              title_url: ""
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
    SetupItemPlaces
  }
};
</script>

<style lang="scss" scoped>
</style>