<template>
  <header class="header">
    <div class="header__wrapper">
      <div
        v-if="headerTitle === 'back'"
        class="header__title"
        @click="$router.go(-1)"
      >
        Назад
      </div>
      <div v-else class="header__title">
        {{ headerTitle }}
      </div>
      <div class="header-user">
        <div class="header-user__info">
          <p class="header-user__name">Room Factory</p>
          <p class="header-user__text">Подписка закончилась</p>
        </div>
        <div class="header-user__photo">
          <img src="/img/user.svg" alt="">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        headerTitle: ''
      }
    },
    methods: {
      headerName (name) {
        console.log(name.indexOf('catalog'))
        if (name === 'index') {
          return 'Мои виджеты'
        } else if (name === 'tarif') {
          return 'Тарифы'
        } else if (name === 'faq') {
          return 'Помощь'
        } else if (~name.indexOf('catalog')) {
          return 'Тарифы'
        } else if (~name.indexOf('setup')) {
          return 'back'
        }
        return 'Мои виджеты'
      }
    },
    mounted() {
      this.headerTitle = this.headerName(this.$route.name)
    },
    watch: {
      $route: {
        handler(bef) {
          this.headerTitle = this.headerName(bef.name)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
