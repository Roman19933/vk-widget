<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__title">
        <nuxt-link
          tag="a"
          v-if="this.$route.query.category"
          :to="this.$route.query.category === 'nav' ? '/catalog/nav' : '/catalog/sales'"
        >
          <img src="/img/arrow.png" alt />
          Назад
        </nuxt-link>
        <span v-else>{{ headerTitle }}</span>
      </div>
      <div class="header-user">
        <div class="header-user__info">
          <p class="header-user__name">{{ groupInfo.name }}</p>
          <p class="header-user__text">Подписка закончилась</p>
        </div>
        <div class="header-user__photo">
          <img :src="groupInfo.photo_50" alt />
        </div>
      </div>
    </div>
    <b-toast id="update-toast" variant="primary" toaster="b-toaster-bottom-right" class="toast-all-app" solid>
      <template v-slot:toast-title>
        Обновление виджета
      </template>
        Виджет успешно оновлен
    </b-toast>
    <b-toast id="create-toast" variant="primary" toaster="b-toaster-bottom-right" class="toast-all-app" solid>
      <template v-slot:toast-title>
        Создание виджета
      </template>
        Виджет успешно добавлен
    </b-toast>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerTitle: "",
      groupInfo: ""
    };
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
        default:
          return "Мои виджеты";
      }
    }
  },
  async mounted() {
    this.headerTitle = this.headerName(this.$route.name);
    try {
      const group_id = this.$store.getters['server/token/vkQuery'].vk_group_id
      let response = await this.$store.dispatch("server/group/getGroup", group_id);
      this.groupInfo = response[0]
    } catch(e) {
      console.log(e)
    }
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
