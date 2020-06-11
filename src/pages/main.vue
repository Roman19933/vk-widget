<template>
  <div class="vidget-page">
    <app-navigation-menu />
    <div class="vidget-page__wrapper">
      <div class="vidget-page__head">
        <h1 class="vidget-page__title">Мои виджеты</h1>
        <nuxt-link to="/catalog/sales" class="vidget-page__add gen-btn">Создать виджет</nuxt-link>
      </div>
      <!-- <button @click="vidgets.splice(5, 1)">del</button> -->
      <div class="vidget-none" v-if="vidgets.length === 0 && vidgetLoad === false">
        <div class="vidget-none__wrapper">
          <img src="img/PIT.svg" alt="" class="vidget-none__img" />
          <p class="vidget-none__text">
            Дружище, у тебя еще нет виджетов. Не пора ли их создать?
          </p>
          <nuxt-link to="/catalog/sales" class="vidget-none__link gen-btn">Создать виджет</nuxt-link>
        </div>
      </div>
      <div class="home" v-else>
        <app-loader
          v-model="vidgetLoad"
          class="top-center"
        >
          <div class="home__wrapper">
            <!-- <ul class="home__blocks"> -->
            <draggable v-model="vidgets">
              <transition-group name="list-animation" tag="ul">
                <li
                  v-for="vidget in vidgets"
                  :key="vidget.id"
                  class="home-block" >
                  <div class="home-block__title">
                    <div
                      class="home-block__icon"
                    >
                      <!-- @mousedown="sortList"
                      @mousemove="sortListMove" -->
                      <div class="popover">
                        <div class="popover__wrapper">
                          <span>Сортировать</span>
                        </div>
                      </div>
                      <img src="img/home-sort.svg" alt />
                    </div>
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
                      <div
                        class="switch__disabled-wrapper"
                        v-if="disablePublick"
                        v-b-modal="'modal-timer'"
                      >
                        <app-switch/>
                      </div>
                      <app-switch
                        v-else
                        v-model="vidget.is_active"
                        @switch-val="
                          (switchActive = vidget.id),
                          (vidget.is_active = $event),
                          modalPublic($event)
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
                    <button
                      v-b-modal="'modal-wrapper'"
                      @click="deleteVidgetId = vidget.id, deleteVidgetName = vidget.name"
                      class="home-block__delete"
                    >
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
            </draggable>
            <!-- </ul> -->
          </div>
        </app-loader>
      </div>
    </div>
    <app-modal-wrapper
      title="Удаление виджета"
      :subtitle="`Виджет «${ deleteVidgetName }» будет удален, вы действительно этого хотите?`"
      @input="$bvModal.hide('modal-wrapper'), $event && remove(deleteVidgetId)"
    ></app-modal-wrapper>
    <app-modal-public @public="publicVidget($event)" />
    <app-modal-timer :timer-val="timerVal"/>
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
      deleteVidgetName: null,
      deleteVidgetId: null,
      vidgetLoad: true,
      switchActive: null,
      disablePublick: false,
      timerVal: null,
      groupId: this.$store.getters['server/token/vkQuery'].vk_group_id,
      vidgets: []
    };
  },
  methods: {
    // sortList(e) {
    //   console.log(e)
    // },
    // sortListMove(e) {
    //   console.log(e)
    // },
    startTimer(time) {
      localStorage.timer = new Date().getTime()
      this.timerVal = time
      let timer = setInterval(() => {
        this.timerVal--
        if (this.timerVal <= 0) {
          clearTimeout(timer)
          this.$bvModal.hide("modal-timer")
          this.disablePublick = false
        }
      }, 1000)
    },
    async publicVidget(e) {
      let sa = this.switchActive,
        index = this.vidgets.findIndex(e => e.id === sa),
        vid = this.vidgets[index]
      if (e && await this.validToken()) {
        let { data } = await this.$store.dispatch("server/sales/enable", { groupId:this.groupId, vidId: vid.id })
        if(data.response) {
          this.disablePublick = true
          this.startTimer(10)
        }
        this.$bvModal.hide("modal-public")
        vid.is_active = true
      } else {
        this.$bvModal.hide("modal-public")
        vid.is_active = false
      }
    },
    async updateTokenGroup () {
      try {
        await this.$store.dispatch('vk/bridge/updateTokenGroup', this.groupId)
      } catch(e) {
        console.log(e)
      }
    },
    async validToken() {
      const groupId = this.$store.getters["server/token/vkQuery"].vk_group_id
      let check = await this.$store.dispatch("server/token/checkToken", groupId)
      console.log(check)
      !check && this.updateTokenGroup()
      // if(!data.check) {
      //   this.updateTokenGroup()
      // }
      return check
    },
    async getVidget () {
      this.vidgetLoad = true
      try {
        let response = await this.$store.dispatch("server/sales/getItems", this.groupId)
        this.vidgets = JSON.parse(JSON.stringify(response))
      } catch(e) {
        console.log(e)
      } finally {
        this.vidgetLoad = false
      }
    },
    async modalPublic(e) {
      let sa = this.switchActive,
        index = this.vidgets.findIndex(e => e.id === sa),
        vid = this.vidgets[index]
      if (!e && await this.validToken()) {
        let { data } = await this.$store.dispatch("server/sales/disable", { groupId:this.groupId, vidId: vid.id })
        if(data.response) {
          this.disablePublick = true
          this.startTimer(10)
        }
      } else {
        this.$bvModal.show("modal-public")
      }
    },
    async clone(id) {
      await this.$store.dispatch("server/sales/clone",{group_id:this.groupId,id:id})
      this.getVidget()
    },
    async remove(id) {
      this.vidgetLoad = true
      try {
        await this.$store.dispatch("server/sales/remove", id)
        await this.getVidget()
        this.$bvToast.toast('Виджет успешно удален.', {
          title: 'Удаление',
          variant: 'primary',
          toaster: 'b-toaster-bottom-right',
          solid: true
        })
      } catch(e) {
        this.vidgetLoad = false
        console.log(e)
      }
    },
    async edit(id,route) {
      this.$store.dispatch('server/sales/edit1',id)
      this.$router.push(route)
    }
  },
  async mounted() {
    this.getVidget()
    let timerStore = (new Date().getTime() - localStorage.timer) / 1000
    if ( timerStore <= 10 ) {
      this.startTimer(Math.ceil(timerStore))
      this.disablePublick = true
    }
    // let timestamp = '1591524564',
    //   time = new Date(+timestamp * 1000)
    // this.$bvModal.show("modal-timer")
    if (!this.$store.getters['server/token/checkToken']) {
      this.updateTokenGroup()
    }
  },
  // watch: {
  //   switchActive: {
  //     handler(bef) {
  //       console.log(bef)
  //     }
  //   }
  // }
};
</script>
