<template>
  <div class="widget-page">
    <app-navigation-menu />
    <div class="widget-page__wrapper">
      <div class="widget-page__head">
        <h1 class="widget-page__title">Мои виджеты</h1>
        <nuxt-link to="/catalog/sales" class="widget-page__add gen-btn"
          >Создать виджет</nuxt-link
        >
      </div>
      <div
        class="widget-none"
        v-if="widgets.length === 0 && widgetLoad === false"
      >
        <div class="widget-none__wrapper">
          <img src="img/PIT.svg" alt class="widget-none__img" />
          <p class="widget-none__text">
            Шкипер, у тебя еще нет виджетов. Не пора ли их создать?
          </p>
          <nuxt-link to="/catalog/sales" class="widget-none__link gen-btn"
            >Создать виджет</nuxt-link
          >
        </div>
      </div>
      <div class="home" v-else>
        <app-loader v-model="widgetLoad" class="top-center">
          <div class="home__wrapper">
            <draggable v-model="widgets">
              <transition-group name="list-animation" tag="ul">
                <li
                  v-for="widget in widgets"
                  :key="widget.id"
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
                        (modalEditMame = widget.name),
                          (modalEditId = widget.id),
                          $bvModal.show('modal-edit-name')
                      "
                    >
                      <span class="home-block__name-title">{{
                        widget.name
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
                  <p class="home-block__text">{{ widget.type_name }}</p>
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
                          (switchActive = widget.id),
                            !subs
                              ? modalVersion()
                              : (!disablePublick
                                  ? widget.is_active
                                    ? disablewidget()
                                    : modalPublic()
                                  : null,
                                disablePublick && $bvModal.show('modal-timer'))
                        "
                      >
                        <app-switch
                          v-model="widget.is_active"
                          @switch-val="
                            (switchActive = widget.id),
                              (widget.is_active = $event)
                          "
                          :sw="widget.is_active"
                        />
                      </div>
                    </div>
                    <a href="#" class="home-block__user">
                      <img src="img/home-user.svg" alt />
                      <div v-if="widget.segmentation && widget.segmentation.other || null" class="popover">
                        <div class="popover__wrapper">
                          <span>Аудитория</span>
                          <span>Возраст: от {{widget.segmentation.age.from}} до {{widget.segmentation.age.to}}</span>
                          <span>Пол: {{widget.segmentation.sex ? widget.segmentation.other.sex.title : null}}</span>
                          <span>ДР: {{widget.segmentation.bdate ? widget.segmentation.other.bdate.title : null}}</span>
                          <span>Семейное положение: {{widget.segmentation.relation ? widget.segmentation.other.relation.title : null}}</span>
                        </div>
                      </div>
                    </a>
                    <button
                      @click="edit(widget.id, widget.type_link)"
                      class="home-block__edit"
                    >
                      <img src="img/home-register.png" alt />
                      <div class="popover">
                        <div class="popover__wrapper">
                          <span>Редактировать виджет</span>
                        </div>
                      </div>
                    </button>
                    <button @click="clone(widget.id)" class="home-block__look">
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
                        (deletewidgetId = widget.id),
                          (deletewidgetName = widget.name)
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
      :widget-name="modalEditMame"
      :widget-id="modalEditId"
      @rename="getwidget()"
    ></app-modal-edit-name>
    <app-modal-wrapper
      title="Удаление виджета"
      :subtitle="
        `Виджет «${deletewidgetName}» будет удален, вы действительно этого хотите?`
      "
      @input="$bvModal.hide('modal-wrapper'), $event && remove(deletewidgetId)"
    ></app-modal-wrapper>
    <app-modal-public @public="publicwidget($event)" />
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
      deletewidgetName: null,
      deletewidgetId: null,
      widgetLoad: true,
      switchActive: null,
      disablePublick: false,
      timerVal: null,
      groupId: this.$store.getters["server/token/vkQuery"].vk_group_id,
      widgets: []
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
    async publicwidget(e) {
      let sa = this.switchActive,
        index = this.widgets.findIndex(e => e.id === sa),
        vid = this.widgets[index];
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
        this.getwidget();
        this.$bvModal.hide("modal-public");
      } else {
        this.$bvModal.hide("modal-public");
      }
    },
    async disablewidget() {
      let sa = this.switchActive,
        index = this.widgets.findIndex(e => e.id === sa),
        vid = this.widgets[index];
      let { data } = await this.$store.dispatch("server/sales/disable", {
        groupId: this.groupId,
        vidId: vid.id
      });
      if (data.response) {
        this.disablePublick = true;
        this.startTimer(10);
      }
      this.getwidget();
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
    async getwidget() {
      this.widgetLoad = true;
      try {
        let response = await this.$store.dispatch(
          "server/sales/getItems",
          this.groupId
        );
        this.widgets = JSON.parse(JSON.stringify(response));
      } catch (e) {
        console.log(e);
      } finally {
        this.widgetLoad = false;
      }
    },
    async clone(id) {
      await this.$store.dispatch("server/sales/clone", {
        group_id: this.groupId,
        id: id
      });
      this.getwidget();
    },
    async remove(id) {
      this.widgetLoad = true;
      try {
        await this.$store.dispatch("server/sales/remove", id);
        await this.getwidget();
        this.$bvToast.toast("Виджет успешно удален.", {
          title: "Удаление",
          variant: "primary",
          toaster: "b-toaster-bottom-right",
          solid: true
        });
      } catch (e) {
        this.widgetLoad = false;
        console.log(e);
      }
    },
    async edit(id, route) {
      this.$store.dispatch("server/sales/edit1", id);
      this.$router.push(route);
    }
  },
  async mounted() {
    this.getwidget();
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
