<template>
  <main class="main">
    <div class="vidget-page">
      <app-navigation-menu />
      <div class="vidget-page__wrapper">
        <div class="vidget-none">
          <div class="vidget-none__wrapper">
            <img src="/img/PIT.svg" alt="" class="vidget-none__img" />
            <p class="vidget-none__text">
              Дружище, произошла ошибка, сделка не состоялась!
            </p>
            <p class="vidget-none__text">
              Попробуй ещо
              раз=)
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
  // layout: 'main',
};
</script>
