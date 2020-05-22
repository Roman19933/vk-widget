<template>
  <form action="#">
    <div class="widgets vidget-page">
      <div class="widgets__wrapper vidget-page__wrapper">
        <div class="widgets__left">
          <div class="widgets__header vidget-page__head">
            <div class="widgets__header-title vidget-page__title">
              <img src alt />
              <h4>Виджет «Акции в обложках»</h4>
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
                <img src="/img/box.png" alt />
                <a href="#">{{this.widget.data.title}}</a>
              </div>
              <div class="widgets__items widgets__items_cover">
                <draggable
                  v-model="widget.data.rows"
                  group="product"
                  class="widgets__items_draggable"
                >
                  <setup-item-cover
                    v-for="(item,index) in widget.data.rows"
                    :key="`item-${index}`"
                    :item="item"
                    @remove:item="removeItem(index)"
                  />
                  <button
                    class="add-item"
                    @click.prevent="addItem(widget.data.rows)"
                    v-if="widget.data.rows.length < 3"
                  >+ Добавить элемент</button>
                </draggable>
              </div>
              <button class="widgets__content-add">+ Добавить подвал виджета</button>
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
            <!-- <div class="widgets__error">
                            <p>Некоторые поля заполнены неверно. Внесите изменения и попробуйте снова.</p>
                            <button>
                                <img src="/img/close-error.png" alt="">
                            </button>
            </div>-->
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
import SetupItemCover from "@/components/setup/SetupItemCover";

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
          rows: [
            {
              button: "Забронировать",
              button_url: "https://vk.com/apps?act=manage",
              cover_id: "5686299_1676775",
              descr: "30% скидка, 4 звезды",
              title: "Жаркое солнце в Майами",
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
  methods: {
    onSubmit() {
      console.log("ok");
    },
    addItem(arr) {
      arr.push({
        button: "",
        button_url: "",
        cover_id: "",
        descr: "",
        title: "",
        url: ""
      });
    },
    removeItem(index) {
      this.widget.data.rows.splice(index, 1);
    }
  },
  components: {
    SetupForm,
    SetupItemCover
  }
};
</script>

<style lang="scss" scoped>
</style>