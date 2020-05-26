<template>
  <form action="#" @submit.prevent="onSubmit">
    <div class="widgets vidget-page">
      <div class="widgets__wrapper vidget-page__wrapper">
        <div class="widgets__left feedback">
          <div class="widgets__header vidget-page__head">
            <div class="widgets__header-title vidget-page__title">
              <img src alt />
              <h4>Виджет «важное сообщение»</h4>
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
                <img src="img/fire.png" alt />
                <a href="#">{firstname}, у нас для тебя спецпредложение!</a>
              </div>
              <setup-item-personal
                v-for="(item,index) in widget.data.rows"
                :key="`item-${index}`"
                :item="item"
              />
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
import SetupItemPersonal from "@/components/setup/SetupItemPersonal";
import AppSwitch from "@/components/form/AppSwitch";
export default {
  data() {
    return {
      widget: {
        createdAt: "",
        data: {
          more: "",
          more_url: "",
          title: "{firstname}, Время поднять навык в SMM",
          title_counter: "",
          title_url: "",
          rows: [
            {
              address: "",
              button: "Оставить заявку",
              button_url: "vk.me/club195259137",
              descr: "",
              icon_id: "{userAvatar}",
              text:
                "Все просто, жми на кнопку ниже, оставь заявку и мы свяжемся с тобой в считанные секунды",
              time: "",
              title: "Получи бесплатную консультацию!",
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
  components: {
    SetupForm,
    AppSwitch,
    SetupItemPersonal
  }
};
</script>

<style lang="scss" scoped>
</style>