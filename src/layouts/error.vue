<template>
  <main class="main">
    <div class="vidget-page">
      <app-navigation-menu />
      <div class="vidget-page__wrapper">
        <div class="vidget-none">
          <div class="vidget-none__wrapper">
            <img src="/img/PIT.svg" alt class="vidget-none__img" />
            <h1 v-if="error.statusCode === 404" class="vidget-none__text">
              Страница не найдена
            </h1>
            <h1 v-if="error.statusCode === 403" class="vidget-none__text">
              Доступ запрещен
            </h1>
            <h1 v-if="error.statusCode === 500" class="vidget-none__text">
              Ошибка сервера
            </h1>
            <button @click="checkToken" class="vidget-none__link gen-btn">
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
