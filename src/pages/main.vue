<template>
  <div class="vidget-page">
    <app-navigation-menu />
    <div class="vidget-page__wrapper">
      <div class="vidget-page__head">
        <h1 class="vidget-page__title">Мои виджеты</h1>
        <nuxt-link to="/catalog/sales" class="vidget-page__add gen-btn">Создать виджет</nuxt-link>
      </div>
      <div class="vidget-none" v-if="vidgets.length == 0">
        <div class="vidget-none__wrapper">
          <img src="img/PIT.svg" alt="" class="vidget-none__img" />
          <p class="vidget-none__text">
            Дружище, у тебя еще нет виджетов. Не пора ли их создать?
          </p>
          <nuxt-link to="/catalog/sales" class="vidget-none__link gen-btn">Создать виджет</nuxt-link>
        </div>
      </div>
      <div class="home" v-else>
        <div class="home__wrapper">
          <!-- <ul class="home__blocks"> -->
          <transition-group name="flip-list" tag="ul">
            <li class="home-block" v-for="vidget in vidgets" :key="vidget.id">
              <div class="home-block__title">
                <p class="home-block__icon">
                  <img src="img/home-sort.svg" alt />
                </p>
                <p class="home-block__name">Виджет </p>
              </div>
              <p class="home-block__text">{{ vidget.name }}</p>
              <div class="home-block__events">
                <div class="home-block__switch">
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Опубликовать виджет</span>
                    </div>
                  </div>
                  <app-switch
                    v-model="vidget.switch"
                    @switch-val="
                      modalPublic($event),
                        (vidget.switch = $event),
                        (switchActive = vidget.name)
                    "
                  />
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
                        Семейное положение: не женат/не замужем
                      </span>
                    </div>
                  </div>
                </a>
                <nuxt-link to="setup/sales" @click="edit(vidget.id)" class="home-block__edit">
                  <img src="img/home-register.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Редактировать виджет</span>
                    </div>
                  </div>
                </nuxt-link>
                <button @click="clone(vidget.id)" class="home-block__look">
                  <img src="img/home-sheet.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Создать копию</span>
                    </div>
                  </div>
                </button>
                <button @click="remove(vidget.id)" class="home-block__delete">
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
    <app-modal-public @public="publicVidget($event)" />
    <app-modal-version />
  </div>
</template>

<script>
import bridge from "@vkontakte/vk-bridge";
import AppModalVersion from "@/components/modal/AppModalVersion.vue";
import AppModalPublic from "@/components/modal/AppModalPublic.vue";
import AppSwitch from "@/components/form/AppSwitch.vue";
import AppNavigationMenu from "@/components/AppNavigationMenu.vue";
import { mapGetters } from "vuex";

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
      switchActive: null,
      // vidgets: []
    };
  },
  methods: {
    publicVidget(e) {
      let vid = this.vidgets,
        sa = this.switchActive;
      if (e) {
        this.checkTokenGroup();
        this.$bvModal.hide("modal-public");
        let index = vid.findIndex(e => e.name === sa);
        vid[index].switch = true;
      } else {
        this.$bvModal.hide("modal-public");
        let index = vid.findIndex(e => e.name === sa);
        vid[index].switch = false;
      }
    },
    async updateTokenGroup (groupId) {
      try {
        await this.$store.dispatch('vk/bridge/updateTokenGroup', groupId)
      } catch(e) {
        console.log(e)
      }
    },
    modalPublic(e) {
      if (e) {
        this.$bvModal.show("modal-public");
      }
    },
    async clone(id) {
      let payload = this.vidgets
      const groupId = this.$store.getters['server/token/vkQuery'].vk_group_id
      payload.group_id = +groupId
      payload.id = id
      console.log( payload.id)
      await this.$store.dispatch("server/sales/clone", {
        group_id : payload.group_id,
        id : id
      })
    },
    async remove(id) {
      await this.$store.dispatch("server/sales/remove", id)
    }
  },
  computed: {
    ...mapGetters({
      vidgets: "server/sales/items",
    })
  },
  async mounted() {
    const groupId = this.$store.getters['server/token/vkQuery'].vk_group_id
    if (!this.$store.getters['server/token/checkToken']) {
      this.updateTokenGroup(groupId)
    }
    await this.$store.dispatch("server/sales/getItems", groupId)
  }
};
</script>
