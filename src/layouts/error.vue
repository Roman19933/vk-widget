<template>
  <main class="main">
    <div class="widget-page">
      <app-navigation-menu />
      <div class="widget-page__wrapper">
        <div class="widget-none">
          <div class="widget-none__wrapper">
            <img src="/img/PIT.svg" alt class="widget-none__img" />
            <h1 v-if="error.statusCode === 404" class="widget-none__text">
              Страница не найдена
            </h1>
            <h1 v-if="error.statusCode === 403" class="widget-none__text">
              Доступ запрещен
            </h1>
            <h1 v-if="error.statusCode === 500" class="widget-none__text">
              Ошибка сервера
            </h1>
            <button @click="checkToken" class="widget-none__link gen-btn">
              Перейти на главною
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="main__wrapper"></div>
  </main>
</template>

<script>
export default {
  props: ["error"],
  methods: {
    async checkToken() {
      const groupId = this.$store.getters["server/token/vkQuery"].vk_group_id;
      await this.$store.dispatch("server/token/checkToken", groupId);
      this.$router.push("/main");
    }
  }
};
</script>
