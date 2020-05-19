<template>
  <div class="main-menu">
    <div class="main-menu__wrapper">
      <h2 class="main-menu__title">
        Меню
      </h2>
      <nav class="main-menu__menu">
        <ul class="main-menu__items">
          <li class="main-menu__item active">
            <a href="#" class="main-menu__link">
              <img class="main-menu__icon" src="img/menu-1.png" alt="">
              <span class="main-menu__link-text">Мои виджеты</span>
            </a>
          </li>
          <li class="main-menu__item show">
            <a href="#" class="main-menu__link">
              <img class="main-menu__icon" src="img/menu-2.png" alt="">
              <span class="main-menu__link-text">Каталог виджетов</span>
            </a>
            <div class="main-menu__arrow"><img src="img/arrow.png" alt=""></div>
            <div class="main-menu__arrow main-menu__arrow_inner"><img src="img/arrow-yellow.png" alt=""></div>
            <ul class="main-menu__subitems">
              <li class="main-menu__subitem active"><a href="#" class="main-menu__sublink">Для продаж</a></li>
              <li class="main-menu__subitem"><a href="#" class="main-menu__sublink">Для навигации</a></li>
            </ul>
          </li>
          <li class="main-menu__item">
            <a href="#" class="main-menu__link">
              <img class="main-menu__icon" src="img/menu-3.png" alt="">
              <span class="main-menu__link-text">Тарифы</span>
            </a>
          </li>
          <li class="main-menu__item">
            <a href="#" class="main-menu__link">
              <img class="main-menu__icon" src="img/menu-4.png" alt="">
              <span class="main-menu__link-text">Помощь</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
