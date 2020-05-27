<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__title">Мои виджеты</div>
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
  mounted() {
    console.log("ok");
  }
};
</script>

<style lang="scss" scoped>
</style>
