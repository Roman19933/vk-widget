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
                <p class="home-block__name">{{ vidget.name }} </p>
              </div>
              <p class="home-block__text">{{ vidget.type_name }}</p>
              <div class="home-block__events">
                <div class="home-block__switch">
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Опубликовать виджет</span>
                    </div>
                  </div>
                  <app-switch
                    v-model="vidget.is_active"
                    @switch-val="
                      modalPublic($event),
                        (vidget.is_active = $event),
                        (switchActive = vidget.id)
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
                <button

                  @click="edit(vidget.id,vidget.type_link)"
                  class="home-block__edit"
                >
                  <img src="img/home-register.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Редактировать виджет</span>
                    </div>
                  </div>
                </button>
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
    <app-modal-timer :timer-val="10"/>
    <app-modal-version />
  </div>
</template>

<script>
import AppModalVersion from "@/components/modal/AppModalVersion.vue";
import AppModalPublic from "@/components/modal/AppModalPublic.vue";
import AppModalTimer from "@/components/modal/AppModalTimer.vue";
import AppNavigationMenu from "@/components/AppNavigationMenu.vue";

export default {
  components: {
    AppModalVersion,
    AppModalPublic,
    AppModalTimer,
    AppNavigationMenu
  },
  data() {
    return {
      appId: process.env.APP_ID,
      switchActive: null,
      groupId: this.$store.getters['server/token/vkQuery'].vk_group_id,
      vidgets: []
    };
  },
  methods: {
    async publicVidget(e) {
      let sa = this.switchActive,
        index = this.vidgets.findIndex(e => e.id === sa),
        vid = this.vidgets[index]

      // console.log(vid)
      if (e) {
        let response = await this.$store.dispatch("server/sales/enable",
          '?group_id='+ this.groupId +'&widget_id='+ vid.id +''
        )
        // console.log(response)
        this.$bvModal.hide("modal-public")
        vid.is_active = true
      } else {
        this.$bvModal.hide("modal-public")
        vid.is_active = false;
      }
    },
    async updateTokenGroup () {
      try {
        await this.$store.dispatch('vk/bridge/updateTokenGroup', this.groupId)
      } catch(e) {
        console.log(e)
      }
    },
    async getVidget () {
      try {
        let response = await this.$store.dispatch("server/sales/getItems", this.groupId)
        this.vidgets = response
      } catch(e) {
        console.log(e)
      }
    },
    modalPublic(e) {
      if (e) {
        this.$bvModal.show("modal-public")
      }
    },
    async clone(id) {
      await this.$store.dispatch("server/sales/clone",{group_id:this.groupId,id:id})
      this.getVidget()
    },
    async remove(id) {
      await this.$store.dispatch("server/sales/remove", id)
    },
    async edit(id,route) {
      this.$store.dispatch('server/sales/edit1',id)
      this.$router.push(route)
    }
  },
  async mounted() {
    // let timestamp = '1591524564',
    //   time = new Date(+timestamp * 1000)
    // this.$bvModal.show("modal-timer")
    console.log(this.$store.getters['server/token/checkToken'])
    if (!this.$store.getters['server/token/checkToken']) {
      this.updateTokenGroup()
    }
    this.getVidget()
  }
};
</script>
