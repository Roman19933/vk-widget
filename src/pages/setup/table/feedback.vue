<template>
  <form action="#">
    <div class="widgets vidget-page">
      <div class="widgets__wrapper vidget-page__wrapper">
        <div class="widgets__left feedback">
          <div class="widgets__header vidget-page__head">
            <div class="widgets__header-title vidget-page__title">
              <img src alt />
              <h4>Виджет «отзывы»</h4>
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
                <a href="#" v-b-modal.default>Отзывы наших клиентов</a>
              </div>
              <div class="widgets__items widgets__items_product">
                <button class="add-item">+ Добавить элемент</button>
              </div>
              <button class="widgets__content-add">+ Добавить подвал виджета</button>
            </div>
            <div class="widgets__save">
              <button class="gen-btn">Сохранить</button>
            </div>
          </div>
          <div class="widgets__footer">
            <!-- <div class="widgets__save">
                            <button class="gen-btn">Сохранить</button>
            </div>-->
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
        <!-- <div class="widgets__right">
          <setup-form :formData="widget.segmentation" />
        </div> -->
      </div>
    </div>
  </form>
</template>

<script>
import AppWidgetForm from "@/components/setup/AppWidgetFormComponent";
import AppSwitch from "@/components/form/AppSwitch";
export default {
  data() {
    return {
      widget: {
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
        type: "table",
        sc_type: "feedback"
      }
    };
  },
  components: {
    AppWidgetForm,
    AppSwitch
  }
};
</script>

<style lang="scss" scoped>
</style>
