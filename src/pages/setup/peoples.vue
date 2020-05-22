<template>
  <form action="#">
    <div class="widgets vidget-page">
      <div class="widgets__wrapper vidget-page__wrapper">
        <div class="widgets__left feedback">
          <div class="widgets__header vidget-page__head">
            <div class="widgets__header-title vidget-page__title">
              <img src alt />
              <h4>ВИДЖЕТ «меню сообщества»</h4>
            </div>
            <div class="widgets__switch">
              <span>Режим просмотра</span>
              <div class="widgets__switch-btn">
                <label class="switch">
                  <input type="checkbox" class="hidden switchcheckbox" />
                  <span class="switch__circle"></span>
                </label>
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
                  <setup-item-peoples
                    v-for="(item,index) in widget.data.rows"
                    :key="`item-${index}`"
                    :item="item"
                    @remove:item="removeItem(index)"
                  />
                  <button
                    class="add-item"
                    @click.prevent="addItem(widget.data.rows)"
                    v-if="widget.data.rows.length < 6"
                  >+ Добавить элемент</button>
                </draggable>
              </div>
              <!-- <button class="add-item">+ Добавить элемент</button> -->
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
        <div class="widgets__right">
          <setup-form :formData="widget.segmentation" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import SetupForm from "@/components/setup/SetupForm";
import SetupItemPeoples from "@/components/setup/SetupItemPeoples";
export default {
  data() {
    return {
      widget: {
        createdAt: "",
        data: {
          more: "",
          more_url: "",
          title: "Меню сообщества",
          title_counter: "",
          title_url: "",
          rows: [
            {
              address: null,
              button: "Записаться",
              button_url: "https://vk.com/apps?act=manage",
              descr: "Запишись на первую бесплатную тренировку!",
              icon_id: "",
              text: null,
              time: null,
              title: "Бесплатное занятие",
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
  methods: {
    onSubmit() {
      console.log("ok");
    },
    addItem(arr) {
      arr.push({
        address: "",
        button: "",
        button_url: "",
        descr: "",
        icon_id: "",
        text: null,
        time: "",
        title: "",
        title_url: ""
      });
    },
    removeItem(index) {
      this.widget.data.rows.splice(index, 1);
    }
  },
  components: {
    SetupForm,
    SetupItemPeoples
  }
};
</script>

<style lang="scss" scoped>
</style>