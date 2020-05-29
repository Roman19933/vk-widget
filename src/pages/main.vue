<template>
  <div class="vidget-page">
    <app-navigation-menu />
    <div class="vidget-page__wrapper">
      <div class="vidget-page__head">
        <h1 class="vidget-page__title">Мои виджеты</h1>
        <button class="vidget-page__add gen-btn">Создать виджет</button>
      </div>
      <div
        class="vidget-none"
        v-if="vidgets.length == 0"
      >
        <div class="vidget-none__wrapper">
          <img src="img/PIT.svg" alt="" class="vidget-none__img">
          <p class="vidget-none__text">
            Дружище, у тебя еще нет виджетов.
            Не пора ли их создать?
          </p>
          <a href="#" class="vidget-none__link gen-btn">Создать виджет</a>
        </div>
      </div>
      <div
        class="home"
        v-else
      >
        <div class="home__wrapper">
          <!-- <ul class="home__blocks"> -->
          <transition-group
            name="flip-list"
            tag="ul"
          >
            <li
              v-for="(vidget) in vidgets"
              :key="vidget.name"
              class="home-block"
            >
              <div class="home-block__title">
                <p class="home-block__icon">
                  <img src="img/home-sort.svg" alt />
                </p>
                <p class="home-block__name">Скидки!</p>
              </div>
              <p class="home-block__text">Акции и скидки</p>
              <div class="home-block__events">
                <div class="home-block__switch">
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Опубликовать виджет</span>
                    </div>
                  </div>
                  <app-switch v-model="vidget.switch" @switch-val="modalPublic($event), vidget.switch = !vidget.switch"/>
                </div>
                <a href="#" class="home-block__user">
                  <img src="img/home-user.svg" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Аудитория</span>
                      <span>Возраст: от 15 до 66</span>
                      <span>Пол: женский</span>
                      <span>ДР: сегодня</span>
                      <span>
                        Семейное положение: не
                        женат/не замужем
                      </span>
                    </div>
                  </div>
                </a>
                <a href="#" class="home-block__edit">
                  <img src="img/home-register.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Редактировать виджет</span>
                    </div>
                  </div>
                </a>
                <a href="#" class="home-block__look">
                  <img src="img/home-sheet.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Создать копию</span>
                    </div>
                  </div>
                </a>
                <button class="home-block__delete">
                  <img src="img/home-trash.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Удалить виджет</span>
                    </div>
                  </div>
                </button>
              </div>
            </li>
          </transition-group>
          <!-- </ul> -->
        </div>
      </div>
    </div>
    <app-modal-public/>
    <app-modal-version/>
  </div>
</template>

<script>
  import bridge from '@vkontakte/vk-bridge';
  import AppModalVersion from "@/components/modal/AppModalVersion.vue";
  import AppModalPublic from "@/components/modal/AppModalPublic.vue";
  import AppSwitch from "@/components/form/AppSwitch.vue";
  import AppNavigationMenu from "@/components/AppNavigationMenu.vue";

  export default {
    components: {
      AppModalVersion,
      AppModalPublic,
      AppSwitch,
      AppNavigationMenu
    },
    data() {
      return {
        appId: process.env.APP_ID,
        vidgets: [
          {
            switch: false
          },
          {
            switch: true
          }
        ]
      }
    },
    methods: {
      modalPublic (e) {
        if (e) {
          this.$bvModal.show('modal-public')
        }
      }
    },
    mounted() {
      bridge.send("VKWebAppInit", {});
      this.$bvModal.show('modal-version')
      bridge
        .send('VKWebAppGetCommunityToken', {
          "app_id": this.appId,
          "group_id": 7474103,
          "scope": "app_widget"
        })
        .then(data => {
          // Обработка события в случае успеха
          console.log(data);
        })
        .catch(error => {
          console.log('error')
          // Обработка события в случае ошибки
        });
    }
  };
</script>

<style lang="scss" scoped>
</style>
