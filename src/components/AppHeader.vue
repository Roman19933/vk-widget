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
          <p class="header-user__name">Room Factory</p>
          <p class="header-user__text">Подписка закончилась</p>
        </div>
        <div class="header-user__photo">
          <img src="/img/user.svg" alt />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerTitle: ""
    };
  },
  methods: {
    headerName(name) {
      switch (name) {
        case "index":
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
      // if (name === "index") {
      //   return "Мои виджеты";
      // } else if (name === "tarif") {
      //   return "Тарифы";
      // } else if (name === "faq") {
      //   return "Помощь";
      // } else if (~name.indexOf("catalog")) {
      //   return "Каталог";
      // }
      // return "Мои виджеты";
    }
  },
  mounted() {
    this.headerTitle = this.headerName(this.$route.name);
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

<style lang="scss" scoped>
</style>
