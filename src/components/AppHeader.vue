<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__title">
        <a
          href="#"
          v-if="this.$route.query.category"
          v-b-modal="'modal-wrapper'"
        >
          <!-- :to="this.$route.query.category === 'nav' ? '/catalog/nav' : '/catalog/sales'" -->
          <img src="/img/arrow.png" alt />
          Назад
        </a>
        <span v-else>{{ headerTitle }}</span>
      </div>
      <div class="header-user">
        <div class="header-user__info">
          <a :href="`http://vk.com/${groupInfo.screen_name}`" class="header-user__name">{{ groupInfo.name }}</a>
          <p class="header-user__text">{{subs ? subs.title : 'Подписка закончилась'}}</p>
        </div>
        <div class="header-user__photo">
          <img :src="groupInfo.photo_50" alt />
        </div>
      </div>
    </div>
    <b-toast
      id="update-toast"
      variant="primary"
      toaster="b-toaster-bottom-right"
      class="toast-all-app"
      solid
    >
      <template v-slot:toast-title>Обновление виджета</template>
      Виджет успешно оновлен
    </b-toast>
    <b-toast
      id="create-toast"
      variant="primary"
      toaster="b-toaster-bottom-right"
      class="toast-all-app"
      solid
    >
      <template v-slot:toast-title>Создание виджета</template>
      Виджет успешно добавлен
    </b-toast>
    <app-modal-wrapper
      title="Выйти без сохранения?"
      @input="$bvModal.hide('modal-wrapper'), $event && linkBack()"
    ></app-modal-wrapper>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      headerTitle: "",
      groupInfo: "",
      groupId: this.$store.getters["server/token/vkQuery"].vk_group_id
    };
  },
  computed:{
    ...mapGetters({
      subs: 'server/payments/subs'
    })
  },
  methods: {
    headerName(name) {
      switch (name) {
        case "main":
          return "Мои виджеты";
          break;
        case "tarif":
          return "Тарифы";
          break;
        case "faq":
          return "Помощь";
          break;
        case "catalog-nav":
          return 'Каталог "для навигации"';
          break;
        case "catalog-sales":
          return 'Каталог "для продаж"';
          break;
        case "catalog-info":
          return 'Каталог "информационные"';
          break;
        default:
          return "Мои виджеты";
      }
    },
    linkBack() {
      console.log(this.$route.query);
      if (this.$route.query.edit) {
        this.$router.push("/main");
      } else {
        this.$router.push(
          this.$route.query.category === "nav"
            ? "/catalog/nav"
            : "/catalog/sales"
        );
      }
    }
  },
  async mounted() {
    this.headerTitle = this.headerName(this.$route.name);
    try {
      const group_id = this.$store.getters["server/token/vkQuery"].vk_group_id;
      let response = await this.$store.dispatch(
        "server/group/getGroup",
        group_id
      );
      this.groupInfo = response[0];
    } catch (e) {
      console.log(e);
    }
    await this.$store.dispatch("server/payments/getSubs", this.groupId);
  },
  watch: {
    $route: {
      handler(bef) {
        this.headerTitle = this.headerName(bef.name);
      }
    }
  }
};
</script>
