<template>
  <main class="main">
    <div class="vidget-page">
      <app-navigation-menu />
      <div class="vidget-page__wrapper">
        <div class="vidget-none">
          <div class="vidget-none__wrapper">
            <img src="/img/PIT.svg" alt="" class="vidget-none__img" />
            <p class="vidget-none__text">
              Дружище, оплата прошла успешно!
              Благодарим за осознаность=)
            </p>
            <nuxt-link to="/main" class="vidget-none__link gen-btn"
              >Перейти на главною</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="main__wrapper"></div>
  </main>
</template>

<script>
export default {
  //  data() {
  //   return {
  //     groupId: this.$store.getters["server/token/vkQuery"].vk_group_id
  //   }
  // },
  // mounted() {
  //   console.log(this.groupId)
  // }
};
</script>
