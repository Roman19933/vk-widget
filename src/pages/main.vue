<template>
  <div class="vidget-page">
    <app-navigation-menu />
    <div class="vidget-page__wrapper">
      <div class="vidget-page__head">
        <h1 class="vidget-page__title">Мои виджеты</h1>
        <nuxt-link to="/catalog/sales" class="vidget-page__add gen-btn"
          >Создать виджет</nuxt-link
        >
      </div>
      <div
        class="vidget-none"
        v-if="vidgets.length === 0 && vidgetLoad === false"
      >
        <div class="vidget-none__wrapper">
          <img src="img/PIT.svg" alt class="vidget-none__img" />
          <p class="vidget-none__text">
            Дружище, у тебя еще нет виджетов. Не пора ли их создать?
          </p>
          <nuxt-link to="/catalog/sales" class="vidget-none__link gen-btn"
            >Создать виджет</nuxt-link
          >
        </div>
      </div>
      <div class="home" v-else>
        <app-loader v-model="vidgetLoad" class="top-center">
          <div class="home__wrapper">
            <draggable v-model="vidgets">
              <transition-group name="list-animation" tag="ul">
                <li
                  v-for="vidget in vidgets"
                  :key="vidget.id"
                  class="home-block"
                >
                  <div class="home-block__title">
                    <div class="home-block__icon">
                      <div class="popover">
                        <div class="popover__wrapper">
                          <span>Сортировать</span>
                        </div>
                      </div>
                      <img src="img/home-sort.svg" alt />
                    </div>
                    <div
                      class="home-block__name"
                      @click="
                        (modalEditMame = vidget.name),
                          (modalEditId = vidget.id),
                          $bvModal.show('modal-edit-name')
                      "
                    >
                      <span class="home-block__name-title">{{
                        vidget.name
                      }}</span>
                      <div class="home-block__name-edit">
                        <app-svg-icon
                          name="pencil-edit-button"
                          class="home-block__name-icon"
                        />
                        <div class="popover">
                          <div class="popover__wrapper">
                            <span>Переименовать Виджет</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
                        :class="'switch__disabled-wrapper'"
                        @click="
                          (switchActive = vidget.id),
                          subs.length === 0 ? modalVersion() :(
                            !disablePublick
                              ? vidget.is_active
                                ? disableVidget()
                                : modalPublic()
                              : null,
                            disablePublick && $bvModal.show('modal-timer'))
                        "
                      >
                        <app-switch
                          v-model="vidget.is_active"
                          @switch-val="
                            (switchActive = vidget.id),
                              (vidget.is_active = $event)
                          "
                        />
                      </div>
                    </div>
                    <a href="#" class="home-block__user">
                      <img src="img/home-user.svg" alt />
                      <div class="popover">
                        <div class="popover__wrapper">
                          <span>Аудитория</span>
                          <span>Возраст: от 15 до 66</span>
                          <span>Пол: женский</span>
                          <span>ДР: сегодня</span>
                          <span>Семейное положение: не женат/не замужем</span>
                        </div>
                      </div>
                    </a>
                    <button
                      @click="edit(vidget.id, vidget.type_link)"
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
                      @click="
                        (deleteVidgetId = vidget.id),
                          (deleteVidgetName = vidget.name)
                      "
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
          </div>
        </app-loader>
      </div>
    </div>
    <app-modal-edit-name
      :vidget-name="modalEditMame"
      :vidget-id="modalEditId"
      @rename="getVidget()"
    ></app-modal-edit-name>
    <app-modal-wrapper
      title="Удаление виджета"
      :subtitle="
        `Виджет «${deleteVidgetName}» будет удален, вы действительно этого хотите?`
      "
      @input="$bvModal.hide('modal-wrapper'), $event && remove(deleteVidgetId)"
    ></app-modal-wrapper>
    <app-modal-public @public="publicVidget($event)" />
    <app-modal-timer :timer-val="timerVal" />
    <app-modal-version />
  </div>
</template>

<script>
import AppModalVersion from "@/components/modal/AppModalVersion.vue";
import AppModalEditName from "@/components/modal/AppModalEditName.vue";
import AppModalPublic from "@/components/modal/AppModalPublic.vue";
import AppModalTimer from "@/components/modal/AppModalTimer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    AppModalVersion,
    AppModalEditName,
    AppModalPublic,
    AppModalTimer
  },
  computed: {
    ...mapGetters({
      subs: "server/payments/subs"
    })
  },
  data() {
    return {
      appId: process.env.APP_ID,
      modalEditMame: null,
      modalEditId: null,
      deleteVidgetName: null,
      deleteVidgetId: null,
      vidgetLoad: true,
      switchActive: null,
      disablePublick: false,
      timerVal: null,
      groupId: this.$store.getters["server/token/vkQuery"].vk_group_id,
      vidgets: []
    };
  },
  methods: {
    startTimer(time) {
      localStorage.timer = new Date().getTime();
      this.timerVal = time;
      let timer = setInterval(() => {
        this.timerVal--;
        if (this.timerVal <= 0) {
          clearTimeout(timer);
          this.$bvModal.hide("modal-timer");
          this.disablePublick = false;
        }
      }, 1000);
    },
    async modalPublic() {
      this.$bvModal.show("modal-public");
    },
    async modalVersion() {
      this.$bvModal.show("modal-version");
    },
    async publicVidget(e) {
      let sa = this.switchActive,
        index = this.vidgets.findIndex(e => e.id === sa),
        vid = this.vidgets[index];
      if (e && (await this.validToken())) {
        console.log("publick true");
        let { data } = await this.$store.dispatch("server/sales/enable", {
          groupId: this.groupId,
          vidId: vid.id
        });
        if (data.response || null) {
          this.disablePublick = true;
          this.startTimer(10);
        }
        this.getVidget();
        this.$bvModal.hide("modal-public");
      } else {
        this.$bvModal.hide("modal-public");
      }
    },
    async disableVidget() {
      let sa = this.switchActive,
        index = this.vidgets.findIndex(e => e.id === sa),
        vid = this.vidgets[index];
      let { data } = await this.$store.dispatch("server/sales/disable", {
        groupId: this.groupId,
        vidId: vid.id
      });
      if (data.response) {
        this.disablePublick = true;
        this.startTimer(10);
      }
      this.getVidget();
    },
    async updateTokenGroup() {
      try {
        await this.$store.dispatch("vk/bridge/updateTokenGroup", this.groupId);
      } catch (e) {
        console.log(e);
      }
    },
    async validToken() {
      const groupId = this.$store.getters["server/token/vkQuery"].vk_group_id;
      let check = await this.$store.dispatch(
        "server/token/checkToken",
        groupId
      );
      !check && this.updateTokenGroup();
      return check;
    },
    async getVidget() {
      this.vidgetLoad = true;
      try {
        let response = await this.$store.dispatch(
          "server/sales/getItems",
          this.groupId
        );
        this.vidgets = JSON.parse(JSON.stringify(response));
      } catch (e) {
        console.log(e);
      } finally {
        this.vidgetLoad = false;
      }
    },
    async clone(id) {
      await this.$store.dispatch("server/sales/clone", {
        group_id: this.groupId,
        id: id
      });
      this.getVidget();
    },
    async remove(id) {
      this.vidgetLoad = true;
      try {
        await this.$store.dispatch("server/sales/remove", id);
        await this.getVidget();
        this.$bvToast.toast("Виджет успешно удален.", {
          title: "Удаление",
          variant: "primary",
          toaster: "b-toaster-bottom-right",
          solid: true
        });
      } catch (e) {
        this.vidgetLoad = false;
        console.log(e);
      }
    },
    async edit(id, route) {
      this.$store.dispatch("server/sales/edit1", id);
      this.$router.push(route);
    }
  },
  async mounted() {
    this.getVidget();
    let timerStore = (new Date().getTime() - localStorage.timer) / 1000;
    if (timerStore <= 10) {
      this.startTimer(Math.ceil(timerStore));
      this.disablePublick = true;
    }
    if (!this.$store.getters["server/token/checkToken"]) {
      this.updateTokenGroup();
    }
  }
  // }
};
</script>
