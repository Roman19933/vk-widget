<template>
  <div class="vidget-page">
    <app-navigation-menu />
    <main class="catalog-sales">
      <div class="catalog-sales__bread-crumbs">
        КАТАЛОГ ВИДЖЕТОВ
        <span class="catalog-sales__bread-crumbs_dot"></span>
        информационные
      </div>
      <section class="catalog-sales__row">
        <div class="catalog-sales__content">
          <div class="catalog-sales__content-header">
            <app-svg-icon name="gift" class="catalog-sales__content-icon" />
            <h3 class="catalog-sales__content-text">Артем, хочешь купон на скидку в подарок?</h3>
          </div>
          <div class="stock-discounts">
            <div class="stock-discounts__item">
              <div class="stock-discounts__img-wrapper">
                <img class="stock-discounts__img" src="/img/catalog-sales-sale1.png" />
              </div>
              <div class="stock-discounts__header">Скидки до 70%</div>
              <a href="#" class="catalog-sales__link">Получить скидку</a>
            </div>
            <div class="stock-discounts__item">
              <div class="stock-discounts__img-wrapper">
                <img class="stock-discounts__img" src="/img/catalog-sales-sale2.png" />
              </div>
              <div class="stock-discounts__header">Только сегодня</div>
              <a href="#" class="catalog-sales__link">Получить скидку</a>
            </div>
            <div class="stock-discounts__item">
              <div class="stock-discounts__img-wrapper">
                <img class="stock-discounts__img" src="/img/catalog-sales-sale3.png" />
              </div>
              <div class="stock-discounts__header">Заполни анкету</div>
              <a href="#" class="catalog-sales__link">Получить скидку</a>
            </div>
          </div>
        </div>
        <div class="catalog-sales__settings">
          <h4 class="catalog-sales__settings-title">Акции и скидки</h4>
          <p class="catalog-sales__settings-text">
            Добавьте в сообщество от 3 до 10 баннеров, чтобы привлечь внимание к
            акциям и получить больше продажм
          </p>
          <nuxt-link class="gen-btn" tag="button" to="/setup/table/price?category=info">Выбрать</nuxt-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import AppNavigationMenu from "@/components/AppNavigationMenu.vue";
import AppSvgIcon from "@/components/AppSvgIcon.vue";

export default {
  components: {
    AppNavigationMenu,
    AppSvgIcon
  }
};
</script>
