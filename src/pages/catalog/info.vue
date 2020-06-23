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
        <div class="catalog-sales__content catalog-sales__content_wFull">
          <div class="catalog-sales__content-header">
            <app-svg-icon name="idea" class="catalog-sales__content-icon" />
            <h3 class="catalog-sales__content-text">Важное сообщение!</h3>
          </div>
          <div class="mportant-message">
            <h3 class="mportant-message__title">
              Каждый подписчик сообщества получает скидку 50% на все товары до
              конка недели
            </h3>
            <p class="mportant-message__text">
              Подпишитесь на сообщество и напишите нам
            </p>
          </div>
          <div class="catalog-sales__content-footer">
            <a class="catalog-sales__link" href="#">Подписаться</a>
          </div>
        </div>
        <div class="catalog-sales__settings">
          <h4 class="catalog-sales__settings-title">Важное сообщение</h4>
          <p class="catalog-sales__settings-text">
            Привлекайте внимание к акциям при помощи 3 больших баннеров с
            кнопками
          </p>
          <nuxt-link
            class="gen-btn"
            tag="button"
            to="/setup/text/messages?category=info"
            >Выбрать</nuxt-link
          >
        </div>
      </section>
      <section class="catalog-sales__row">
        <div class="catalog-sales__content">
          <div class="catalog-sales__content-header">
            <app-svg-icon name="gift" class="catalog-sales__content-icon" />
            <h3 class="catalog-sales__content-text">
              Артем, Спасибо, что подписался! Твои друзья уже с нами!
            </h3>
          </div>
          <div class="catalog-sales__table">
            <div class="head">
              <div class="head__item">Страна</div>
              <div class="head__item">Золото</div>
              <div class="head__item">Серебро</div>
              <div class="head__item">Бронза</div>
            </div>
            <div class="body">
              <div class="body__item">
                <div class="body__item-avatar">
                  <img src="/img/rus.svg" alt="" />
                </div>
                <div class="body__item-info">Россия</div>
                <div class="body__item-info">12</div>
                <div class="body__item-info">3</div>
                <div class="body__item-info">5</div>
              </div>
              <div class="body__item">
                <div class="body__item-avatar">
                  <img src="/img/canada.svg" alt="" />
                </div>
                <div class="body__item-info">Канада</div>
                <div class="body__item-info">9</div>
                <div class="body__item-info">7</div>
                <div class="body__item-info">3</div>
              </div>
              <div class="body__item">
                <div class="body__item-avatar">
                  <img src="/img/norw.jpg" alt="" />
                </div>
                <div class="body__item-info">Норвегия</div>
                <div class="body__item-info">5</div>
                <div class="body__item-info">4</div>
                <div class="body__item-info">2</div>
              </div>
            </div>
          </div>
        </div>
        <div class="catalog-sales__settings">
          <h4 class="catalog-sales__settings-title">Таблица</h4>
          <p class="catalog-sales__settings-text">
            Добавьте в сообщество от 3 до 10 баннеров, чтобы привлечь внимание к
            акциям и получить больше продажм
          </p>
          <nuxt-link
            class="gen-btn"
            tag="button"
            to="/setup/table/table?category=info"
            >Выбрать</nuxt-link
          >
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
