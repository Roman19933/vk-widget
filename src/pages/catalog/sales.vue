<template>
  <div class="vidget-page">
    <app-navigation-menu />
    <main class="catalog-sales">
      <div class="catalog-sales__bread-crumbs">
        КАТАЛОГ ВИДЖЕТОВ
        <span class="catalog-sales__bread-crumbs_dot"></span>
        ДЛЯ ПРОДАЖ
      </div>
      <section class="catalog-sales__row">
        <div class="catalog-sales__content">
          <div class="catalog-sales__content-header">
            <app-svg-icon name="gift" class="catalog-sales__content-icon" />
            <h3 class="catalog-sales__content-text">
              Виктория, как на счет скидки?
            </h3>
          </div>
          <div class="stock-discounts">
            <div class="stock-discounts__item">
              <div class="stock-discounts__img-wrapper">
                <img
                  class="stock-discounts__img"
                  src="/img/catalog-sales-sale1.png"
                />
              </div>
              <div class="stock-discounts__header">Скидки до 70%</div>
              <a href="#" class="catalog-sales__link">Получить скидку</a>
            </div>
            <div class="stock-discounts__item">
              <div class="stock-discounts__img-wrapper">
                <img
                  class="stock-discounts__img"
                  src="/img/catalog-sales-sale2.png"
                />
              </div>
              <div class="stock-discounts__header">Только сегодня</div>
              <a href="#" class="catalog-sales__link">Получить скидку</a>
            </div>
            <div class="stock-discounts__item">
              <div class="stock-discounts__img-wrapper">
                <img
                  class="stock-discounts__img"
                  src="/img/catalog-sales-sale3.png"
                />
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
          <nuxt-link
            class="gen-btn"
            tag="button"
            to="/setup/tiles/sales?category=sale"
            >Выбрать</nuxt-link
          >
        </div>
      </section>
      <section class="catalog-sales__row">
        <div class="catalog-sales__content">
          <div class="catalog-sales__content-header">
            <app-svg-icon
              name="coconut-tree"
              class="catalog-sales__content-icon"
            />
            <h3 class="catalog-sales__content-text">
              Виктория, может пора расслабится?
            </h3>
          </div>
          <div class="stock-promotions">
            <div
              class="stock-promotions__item"
              style="background-image: url(/img/stock-promotions-item1.png)"
            >
              <div class="stock-promotions__rating">
                <span class="stock-promotions__star active"></span>
                <span class="stock-promotions__star active"></span>
                <span class="stock-promotions__star active"></span>
                <span class="stock-promotions__star active"></span>
                <span class="stock-promotions__star"></span>
              </div>
              <div class="stock-promotions__wrapper">
                <h3 class="stock-promotions__title">
                  Экзотический отдых в ОАЭ
                </h3>
                <p class="stock-promotions__discount">30% скидка, 4 звезды</p>
              </div>
              <button class="gen-btn">Забронировать</button>
            </div>
            <div
              class="stock-promotions__item"
              style="background-image: url(/img/stock-promotions-item2.png)"
            >
              <div class="stock-promotions__rating">
                <span class="stock-promotions__star active"></span>
                <span class="stock-promotions__star active"></span>
                <span class="stock-promotions__star active"></span>
                <span class="stock-promotions__star"></span>
                <span class="stock-promotions__star"></span>
              </div>
              <div class="stock-promotions__wrapper">
                <h3 class="stock-promotions__title">Загадочный Египет</h3>
                <p class="stock-promotions__discount">5% скидка, 3 звезды</p>
              </div>
              <button class="gen-btn">Забронировать</button>
            </div>
            <div
              class="stock-promotions__item"
              style="background-image: url(/img/stock-promotions-item3.png)"
            >
              <div class="stock-promotions__rating">
                <span class="stock-promotions__star active"></span>
                <span class="stock-promotions__star active"></span>
                <span class="stock-promotions__star active"></span>
                <span class="stock-promotions__star active"></span>
                <span class="stock-promotions__star active"></span>
              </div>
              <div class="stock-promotions__wrapper">
                <h3 class="stock-promotions__title">Пляжи на Бора-Бора</h3>
                <p class="stock-promotions__discount">22 % скидка, 5 звезд</p>
              </div>
              <button class="gen-btn">Забронировать</button>
            </div>
          </div>
        </div>
        <div class="catalog-sales__settings">
          <h4 class="catalog-sales__settings-title">Акции в обложках</h4>
          <p class="catalog-sales__settings-text">
            Привлекайте внимание к акциям при помощи 3 больших баннеров с
            кнопками
          </p>
          <nuxt-link
            class="gen-btn"
            tag="button"
            to="/setup/coverlist/cover?category=sale"
            >Выбрать</nuxt-link
          >
        </div>
        <div class="catalog-sales__settings">
          asdasdasd
          <nuxt-link class="gen-btn" tag="button" to="/setup/table/price"
            >Выбрать</nuxt-link
          >
        </div>
      </section>
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
            to="/setup/text/messages?category=sale"
            >Выбрать</nuxt-link
          >
        </div>
      </section>
      <section class="catalog-sales__row">
        <div class="catalog-sales__content catalog-sales__content_wFull">
          <div class="catalog-sales__content-header">
            <app-svg-icon name="fire" class="catalog-sales__content-icon" />
            <h3 class="catalog-sales__content-text">
              Иван, у нас для тебя спецпредложение!
            </h3>
          </div>
          <div class="personal-offer">
            <div class="personal-offer__img-wrapper">
              <img src="/img/personal-offer-img.png" />
            </div>
            <div class="personal-offer__wrapper">
              <h3 class="personal-offer__title">
                Получи бесплатную консультацию!
              </h3>
              <p class="personal-offer__text">
                Все просто - жми на кнопку ниже, оставь заявку и мы свяжемся с
                тобой в считанные секунды!
              </p>
              <button class="gen-btn">Оставить заявку</button>
            </div>
          </div>
          <div class="catalog-sales__content-footer">
            <a class="catalog-sales__link" href="#">Узнать подробнее</a>
          </div>
        </div>
        <div class="catalog-sales__settings">
          <h4 class="catalog-sales__settings-title">
            Персональное предложение
          </h4>
          <p class="catalog-sales__settings-text">
            Сделайте персональное предложение посетителю сообщества. В виджет
            автоматически добавится его аватарка
          </p>
          <nuxt-link
            class="gen-btn"
            tag="button"
            to="/setup/list/personal?category=sale"
            >Выбрать</nuxt-link
          >
        </div>
      </section>
      <section class="catalog-sales__row">
        <div class="catalog-sales__content catalog-sales__content_wFull">
          <div class="catalog-sales__content-header">
            <app-svg-icon name="heart" class="catalog-sales__content-icon" />
            <h3 class="catalog-sales__content-text">
              Виктория, успей на распродажу!
            </h3>
          </div>
          <div class="promotional-products">
            <div class="promotional-products__item">
              <div class="promotional-products__img-wrapper">
                <img
                  class="promotional-products__img"
                  src="/img/promotional-products-img1.png"
                />
                <span class="promotional-products__img-sales">
                  -15
                  <span class="promotional-products__procent">%</span>
                </span>
              </div>
              <h4 class="promotional-products__name">Кольцо</h4>
              <h3 class="promotional-products__price">7 300 руб.</h3>
              <a href="#" class="promotional-products__link">Написать</a>
            </div>
            <div class="promotional-products__item">
              <div class="promotional-products__img-wrapper">
                <img
                  class="promotional-products__img"
                  src="/img/promotional-products-img2.png"
                />
                <span class="promotional-products__img-sales">
                  -20
                  <span class="promotional-products__procent">%</span>
                </span>
              </div>
              <h4 class="promotional-products__name">Браслет</h4>
              <h3 class="promotional-products__price">4 999 руб.</h3>
              <a href="#" class="promotional-products__link">Написать</a>
            </div>
            <div class="promotional-products__item">
              <div class="promotional-products__img-wrapper">
                <img
                  class="promotional-products__img"
                  src="/img/promotional-products-img3.png"
                />
                <span class="promotional-products__img-sales">
                  -12
                  <span class="promotional-products__procent">%</span>
                </span>
              </div>
              <h4 class="promotional-products__name">Серьги</h4>
              <h3 class="promotional-products__price">5 100 руб.</h3>
              <a href="#" class="promotional-products__link">Написать</a>
            </div>
          </div>
          <div class="catalog-sales__content-footer">
            <a class="catalog-sales__link" href="#">Другие акции</a>
          </div>
        </div>
        <div class="catalog-sales__settings">
          <h4 class="catalog-sales__settings-title">Акционные товары</h4>
          <p class="catalog-sales__settings-text">
            Сделайте распродажу более эффективной со вторым товарным блоком в
            сообществе
          </p>
          <nuxt-link
            class="gen-btn"
            tag="button"
            to="/setup/tiles/actions?category=sale"
            >Выбрать</nuxt-link
          >
        </div>
      </section>
      <section class="catalog-sales__row">
        <div class="catalog-sales__content catalog-sales__content_wFull">
          <div class="catalog-sales__content-header">
            <app-svg-icon name="like" class="catalog-sales__content-icon" />
            <h3 class="catalog-sales__content-text">
              Виктория, эти товары для вас!
            </h3>
          </div>
          <div class="featured-products">
            <div class="promotional-products__item">
              <div class="promotional-products__img-wrapper">
                <img src="/img/featured-products-img1.png" />
              </div>
              <h4 class="promotional-products__name">Gucci</h4>
              <a href="#" class="promotional-products__link">Узнать цену</a>
            </div>
            <div class="promotional-products__item">
              <div class="promotional-products__img-wrapper">
                <img src="/img/featured-products-img2.png" />
              </div>
              <h4 class="promotional-products__name">Louis Vuitton</h4>
              <a href="#" class="promotional-products__link">Узнать цену</a>
            </div>
            <div class="promotional-products__item">
              <div class="promotional-products__img-wrapper">
                <img src="/img/featured-products-img3.png" />
              </div>
              <h4 class="promotional-products__name">Swarovski</h4>
              <a href="#" class="promotional-products__link">Узнать цену</a>
            </div>
          </div>
        </div>
        <div class="catalog-sales__settings">
          <h4 class="catalog-sales__settings-title">Рекомендованные товары</h4>
          <p class="catalog-sales__settings-text">
            Составляйте индивидуальные подборки товаров для пользователей по их
            интересам
          </p>
          <nuxt-link
            class="gen-btn"
            tag="button"
            to="/setup/tiles/recomended?category=sale"
            >Выбрать</nuxt-link
          >
        </div>
      </section>
      <section class="catalog-sales__row">
        <div class="catalog-sales__content catalog-sales__content_wFull">
          <div class="catalog-sales__content-header">
            <app-svg-icon name="message" class="catalog-sales__content-icon" />
            <h3 class="catalog-sales__content-text">Отзывы наших клиентов</h3>
          </div>
          <div class="reviews">
            <div class="personal-offer">
              <div class="personal-offer__img-wrapper">
                <img src="/img/reviews-img1.png" />
              </div>
              <div class="personal-offer__wrapper">
                <h3 class="personal-offer__title">Екатерина Леснова</h3>
                <p class="personal-offer__text">
                  Ходим вместе с мамой уже года полтора, а может и больше.
                  Попала по рекомендации. ОЧЕНЬ ХОРОШО носится покрытие, ничего
                  не отходит и не отсливается...
                </p>
                <button class="gen-btn">Читать отзыв</button>
              </div>
            </div>
            <div class="personal-offer">
              <div class="personal-offer__img-wrapper">
                <img src="/img/reviews-img2.png" />
              </div>
              <div class="personal-offer__wrapper">
                <h3 class="personal-offer__title">Полинка Смирнова</h3>
                <p class="personal-offer__text">
                  С мастером Викторией знакома уже больше 4х лет!Ни разу в жизни
                  не встречала более аккуратного,внимательного и настолько
                  любящего свое дело мастера!
                </p>
                <button class="gen-btn">Читать отзыв</button>
              </div>
            </div>
            <div class="personal-offer">
              <div class="personal-offer__img-wrapper">
                <img src="/img/reviews-img3.png" />
              </div>
              <div class="personal-offer__wrapper">
                <h3 class="personal-offer__title">Марина Терешкова</h3>
                <p class="personal-offer__text">
                  Здравствуйте)) хожу к Виктории уже больше двух лет)) если не
                  больше)) но лучшего мастера своего дела не встречала )))сразу
                  чувствуется любит свою работу))
                </p>
                <button class="gen-btn">Читать отзыв</button>
              </div>
            </div>
          </div>
          <div class="catalog-sales__content-footer">
            <a class="catalog-sales__link" href="#">Все отзывы</a>
          </div>
        </div>
        <div class="catalog-sales__settings">
          <h4 class="catalog-sales__settings-title">Отзывы</h4>
          <p class="catalog-sales__settings-text">
            Опубликуйте лучшие отзывы клиентов на самом видном месте сообщества
            и повышайте доверие аудитории
          </p>
          <nuxt-link
            class="gen-btn"
            tag="button"
            to="/setup/list/feedback?category=sale"
            >Выбрать</nuxt-link
          >
        </div>
      </section>
      <section class="catalog-sales__row">
        <div class="catalog-sales__content">
          <div class="catalog-sales__content-header">
            <app-svg-icon name="star" class="catalog-sales__content-icon" />
            <h3 class="catalog-sales__content-text">
              Иван, среди наших клиентов:
            </h3>
          </div>
          <div class="our-clients">
            <div class="our-clients__item">
              <img class="our-clients__img" src="/img/our-clients-img1.png" />
              <h4 class="our-clients__title">МТС</h4>
            </div>
            <div class="our-clients__item">
              <img class="our-clients__img" src="/img/our-clients-img2.png" />
              <h4 class="our-clients__title">Word of Tanks Blitz</h4>
            </div>
            <div class="our-clients__item">
              <img class="our-clients__img" src="/img/our-clients-img3.png" />
              <h4 class="our-clients__title">Читай-город</h4>
            </div>
            <div class="our-clients__item">
              <img class="our-clients__img" src="/img/our-clients-img4.png" />
              <h4 class="our-clients__title">
                EVA Коврики, Автоковрики ЕВА/Эва
              </h4>
            </div>
            <div class="our-clients__item">
              <img class="our-clients__img" src="/img/our-clients-img5.png" />
              <h4 class="our-clients__title">
                Школо танцев Social Dance Studio
              </h4>
            </div>
            <div class="our-clients__item">
              <img class="our-clients__img" src="/img/our-clients-img6.png" />
              <h4 class="our-clients__title">BBR Factory</h4>
            </div>
            <div class="our-clients__item">
              <img class="our-clients__img" src="/img/our-clients-img7.png" />
              <h4 class="our-clients__title">Турмания | Горящие туры Минск</h4>
            </div>
            <div class="our-clients__item">
              <img class="our-clients__img" src="/img/our-clients-img8.png" />
              <h4 class="our-clients__title">Fallout</h4>
            </div>
            <div class="our-clients__item">
              <img class="our-clients__img" src="/img/our-clients-img9.png" />
              <h4 class="our-clients__title">Путевка | Распродажа туров</h4>
            </div>
          </div>
        </div>
        <div class="catalog-sales__settings">
          <h4 class="catalog-sales__settings-title">Наши клиенты</h4>
          <p class="catalog-sales__settings-text">
            Продемонстрируйте опыт работы с корпоративными клиентами в новом
            формате
          </p>
          <nuxt-link
            class="gen-btn"
            tag="button"
            to="/setup/table/clients?category=sale"
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
