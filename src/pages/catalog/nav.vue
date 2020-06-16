<template>
  <div class="vidget-page">
    <app-navigation-menu />
    <main class="catalog-nav">
      <div class="catalog-sales__bread-crumbs">
        КАТАЛОГ ВИДЖЕТОВ
        <span class="catalog-sales__bread-crumbs_dot"></span>
        ДЛЯ НАВИГАЦИИ
      </div>
      <section class="catalog-nav__row">
        <div class="catalog-nav__content point-sale">
          <div class="catalog-nav__content-header">
            <app-svg-icon name="basket" class="catalog-nav__content-icon" />
            <h3 class="catalog-nav__content-text">Артем, ближайшие к вам магазины сети</h3>
          </div>
          <div class="catalog-nav__item">
            <div class="catalog-nav__icon-wrapper">
              <app-svg-icon name="high-heel" class="catalog-nav__icon" />
            </div>
            <div class="catalog-nav__item-wrapper">
              <div class="catalog-nav__item-title">Магазин Дом обуви</div>
              <div class="catalog-nav__item-content">
                <div class="catalog-nav__item-text">
                  <p class="catalog-nav__text">Более 3 000 пар обуви в одном месте</p>
                  <p class="catalog-nav__text">
                    <app-svg-icon name="pin" class="catalog-nav__item-icon" />ул. Советская, 33
                  </p>
                  <p class="catalog-nav__text">
                    <app-svg-icon name="time" class="catalog-nav__item-icon" />8:00 - 20:00 (без выходных)
                  </p>
                </div>
                <button class="gen-btn">Связаться</button>
              </div>
            </div>
          </div>
          <div class="catalog-nav__item">
            <div class="catalog-nav__icon-wrapper">
              <app-svg-icon name="cubes" class="catalog-nav__icon" />
            </div>
            <div class="catalog-nav__item-wrapper">
              <div class="catalog-nav__item-title">Магазин Бэбишоп</div>
              <div class="catalog-nav__item-content">
                <div class="catalog-nav__item-text">
                  <p class="catalog-nav__text">Детские игрушки</p>
                  <p class="catalog-nav__text">
                    <app-svg-icon name="pin" class="catalog-nav__item-icon" />ул. Фрунзе, 17
                  </p>
                  <p class="catalog-nav__text">
                    <app-svg-icon name="time" class="catalog-nav__item-icon" />8:00 - 19:00 (без выходных)
                  </p>
                </div>
                <button class="gen-btn">Связаться</button>
              </div>
            </div>
          </div>
          <div class="catalog-nav__item">
            <div class="catalog-nav__icon-wrapper">
              <app-svg-icon name="parka" class="catalog-nav__icon" />
            </div>
            <div class="catalog-nav__item-wrapper">
              <div class="catalog-nav__item-title">Магазин Шуббервиль</div>
              <div class="catalog-nav__item-content">
                <div class="catalog-nav__item-text">
                  <p class="catalog-nav__text">Шубы, дубленки, пуховики</p>
                  <p class="catalog-nav__text">
                    <app-svg-icon name="pin" class="catalog-nav__item-icon" />ул. Пушкинская, 112
                  </p>
                  <p class="catalog-nav__text">
                    <app-svg-icon name="time" class="catalog-nav__item-icon" />8:00 - 20:00 (без выходных)
                  </p>
                </div>
                <button class="gen-btn">Связаться</button>
              </div>
            </div>
          </div>
        </div>
        <div class="catalog-nav__settings">
          <h4 class="catalog-nav__settings-title">Точки продаж</h4>
          <p
            class="catalog-nav__settings-text"
          >Сообщите посетителям сообщества о местоположении и времени работы ваших магазинов.</p>
          <nuxt-link class="gen-btn" tag="button" to="/setup/compactlist/places?category=nav">Выбрать</nuxt-link>
        </div>
      </section>
      <section class="catalog-nav__row">
        <div class="catalog-nav__content activity">
          <div class="catalog-nav__content-header">
            <app-svg-icon name="flag" class="catalog-nav__content-icon" />
            <h3 class="catalog-nav__content-text">Артем, время поднять навык в SMM!</h3>
          </div>
          <div class="catalog-nav__item">
            <div class="catalog-nav__icon-wrapper">
              <app-svg-icon name="image" class="catalog-nav__icon" />
            </div>
            <div class="catalog-nav__item-wrapper">
              <div class="catalog-nav__item-title">Контент-маркетинг для чайников</div>
              <div class="catalog-nav__item-content">
                <div class="catalog-nav__item-text">
                  <p class="catalog-nav__text">Продавайте при помощи уникального контента</p>
                  <p class="catalog-nav__text">
                    <app-svg-icon name="pin" class="catalog-nav__item-icon" />Онлайн
                  </p>
                  <p class="catalog-nav__text">
                    <app-svg-icon name="time" class="catalog-nav__item-icon" />14:00 - 17:00
                  </p>
                </div>
                <button class="gen-btn">Связаться</button>
              </div>
            </div>
          </div>
          <div class="catalog-nav__item">
            <div class="catalog-nav__icon-wrapper">
              <app-svg-icon name="cubes" class="catalog-nav__icon" />
            </div>
            <div class="catalog-nav__item-wrapper">
              <div class="catalog-nav__item-title">Таргетинг без правил</div>
              <div class="catalog-nav__item-content">
                <div class="catalog-nav__item-text">
                  <p class="catalog-nav__text">Создавайте объявления с CTR от 3%</p>
                  <p class="catalog-nav__text">
                    <app-svg-icon name="pin" class="catalog-nav__item-icon" />Онлайн
                  </p>
                  <p class="catalog-nav__text">
                    <app-svg-icon name="shooter1" class="catalog-nav__item-icon" />11:00 - 13:00
                  </p>
                </div>
                <button class="gen-btn">Связаться</button>
              </div>
            </div>
          </div>
        </div>
        <div class="catalog-nav__settings">
          <h4 class="catalog-nav__settings-title">Мероприятия</h4>
          <p
            class="catalog-nav__settings-text"
          >Расскажите аудитории про ваши мероприятия, времени начала и месте проведения.</p>
          <nuxt-link class="gen-btn" tag="button" to="/setup/compactlist/events?category=nav">Выбрать</nuxt-link>
        </div>
      </section>
      <section class="catalog-nav__row">
        <div class="catalog-nav__content">
          <div class="catalog-nav__content-header">
            <app-svg-icon name="star" class="catalog-nav__content-icon" />
            <h3 class="catalog-nav__content-text">Меню сообщества</h3>
          </div>
          <div class="community-menu">
            <div class="catalog-nav__item">
              <div class="catalog-nav__icon-wrapper">
                <img class="catalog-nav__icon" src="/img/one.png" />
              </div>
              <div class="catalog-nav__item-wrapper">
                <div class="catalog-nav__item-title">Бесплатное занятие</div>
                <div class="catalog-nav__item-content">
                  <div class="catalog-nav__item-text">
                    <p class="catalog-nav__text">Запишись на первую бесплатную тренировку</p>
                  </div>
                  <button class="gen-btn">Перейти</button>
                </div>
              </div>
            </div>
            <div class="catalog-nav__item">
              <div class="catalog-nav__icon-wrapper">
                <app-svg-icon name="calendar" class="catalog-nav__icon" />
              </div>
              <div class="catalog-nav__item-wrapper">
                <div class="catalog-nav__item-title">Расписание тренировок</div>
                <div class="catalog-nav__item-content">
                  <div class="catalog-nav__item-text">
                    <p class="catalog-nav__text">Выбери удобное время для занятий</p>
                  </div>
                  <button class="gen-btn">Перейти</button>
                </div>
              </div>
            </div>
            <div class="catalog-nav__item">
              <div class="catalog-nav__icon-wrapper">
                <app-svg-icon name="man" class="catalog-nav__icon" />
              </div>
              <div class="catalog-nav__item-wrapper">
                <div class="catalog-nav__item-title">Для чего нужен фитнес-инструктор</div>
                <div class="catalog-nav__item-content">
                  <div class="catalog-nav__item-text">
                    <p class="catalog-nav__text">Как достигнуть максимума!</p>
                  </div>
                  <button class="gen-btn">Перейти</button>
                </div>
              </div>
            </div>
            <div class="catalog-nav__item">
              <div class="catalog-nav__icon-wrapper">
                <app-svg-icon name="reviews" class="catalog-nav__icon" />
              </div>
              <div class="catalog-nav__item-wrapper">
                <div class="catalog-nav__item-title">Отзывы</div>
                <div class="catalog-nav__item-content">
                  <div class="catalog-nav__item-text">
                    <p class="catalog-nav__text">Более 150 отзывов довольных клиентов</p>
                  </div>
                  <button class="gen-btn">Перейти</button>
                </div>
              </div>
            </div>
          </div>
          <div class="catalog-nav__content-footer">
            <a class="catalog-sales__link" href="#">Подписаться</a>
          </div>
        </div>
        <div class="catalog-nav__settings">
          <h4 class="catalog-nav__settings-title">Меню сообщества</h4>
          <p
            class="catalog-nav__settings-text"
          >Опубликуйте самые важные разделы сообщества в виджете: расписания, статьи, обсуждения, лид-формы и т.д.</p>
          <nuxt-link class="gen-btn" tag="button" to="/setup/compactlist/groups?category=nav">Выбрать</nuxt-link>
        </div>
      </section>
      <section class="catalog-nav__row">
        <div class="catalog-nav__content">
          <div class="catalog-nav__content-header">
            <app-svg-icon name="paper-plane" class="catalog-nav__content-icon" />
            <h3 class="catalog-nav__content-text">Рассылки с акциями</h3>
          </div>
          <div class="subscription">
            <div class="catalog-nav__item">
              <app-svg-icon name="discount" class="catalog-nav__icon catalog-nav__icon_red" />
              <div class="catalog-nav__item-wrapper">
                <div class="catalog-nav__item-title">Распродажи</div>
                <div class="catalog-nav__item-content">
                  <div class="catalog-nav__item-text">
                    <p class="catalog-nav__text">Только самые горячие скидки до 60%</p>
                  </div>
                  <button class="gen-btn">Подписаться</button>
                </div>
              </div>
            </div>
            <div class="catalog-nav__item">
              <app-svg-icon name="new" class="catalog-nav__icon catalog-nav__icon_blue" />
              <div class="catalog-nav__item-wrapper">
                <div class="catalog-nav__item-title">Новые поступления</div>
                <div class="catalog-nav__item-content">
                  <div class="catalog-nav__item-text">
                    <p class="catalog-nav__text">Узнавай о новинках сезона первым!</p>
                  </div>
                  <button class="gen-btn">Подписаться</button>
                </div>
              </div>
            </div>
            <div class="catalog-nav__item">
              <app-svg-icon name="favorite" class="catalog-nav__icon catalog-nav__icon_green" />
              <div class="catalog-nav__item-wrapper">
                <div class="catalog-nav__item-title">Секретные акции</div>
                <div class="catalog-nav__item-content">
                  <div class="catalog-nav__item-text">
                    <p class="catalog-nav__text">Скидки, о которых знаешь только ты!</p>
                  </div>
                  <button class="gen-btn">Подписаться</button>
                </div>
              </div>
            </div>
          </div>
          <div class="catalog-nav__content-footer">
            <a class="catalog-sales__link" href="#">Подписаться</a>
          </div>
        </div>
        <div class="catalog-nav__settings">
          <h4 class="catalog-nav__settings-title">Подписка на рассылки</h4>
          <p
            class="catalog-nav__settings-text"
          >Используйте возможности Spycat для увеличения подписчиков в рассылки сторонних сервисов.</p>
          <p
            class="catalog-nav__settings-text"
          >Создайте рассылку в стороннем приложении и вставьте ссылку на подписку в виджет сообщества.</p>
          <nuxt-link class="gen-btn" tag="button" to="/setup/compactlist/subscriptions?category=nav">Выбрать</nuxt-link>
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

<style lang="scss" scoped>
</style>
