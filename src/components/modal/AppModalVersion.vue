<template>
  <b-modal id="modal-version" hide-header hide-footer>
    <div class="modal__wrapper version">
      <button class="modal__close" @click="$bvModal.hide('modal-version')">
        <img src="img/modal-close.png" alt />
      </button>
      <div class="widget-version">
        <div class="widget-version__wrapper">
          <h2 class="modal__title">Приобретите полную версию приложения</h2>
          <p class="modal__text">3 причины по которым Spycat уже выбрало более 10 000 сообществ</p>
          <div class="widget-version__blocks">
            <div class="widget-version__block">
              <img src="img/modal-rich.png" alt class="widget-version__img" />
              <h3 class="widget-version__name">
                Экономия рекламного
                бюджета до 35%
              </h3>
              <p class="widget-version__text">
                Виджет Spycat привлекает
                больше внимания и повышает
                конверсию сообщества. Это
                позволяет снизить стоимость
                целевого действия и экономить на рекламе.
              </p>
            </div>
            <div class="widget-version__block">
              <img src="img/modal--ship.png" alt class="widget-version__img" />
              <h3 class="widget-version__name">
                Упрощение
                и ускорение продаж
              </h3>
              <p class="widget-version__text">
                Для старта продаж не нужно
                тратить время и деньги на статьи, дизайн и другую SMM-рутину. Чтобы получить результат
                достаточно настроить виджет и рекламу.
              </p>
            </div>
            <div class="widget-version__block">
              <img src="img/modal-shield.png" alt class="widget-version__img" />
              <h3 class="widget-version__name">
                14 дней гарантия
                возврата денег
              </h3>
              <p class="widget-version__text">
                Если по каким-либо причинам
                инструмент вам не подойдет, то
                мы вернем вам деньги. Для нас
                важно, чтобы вы получали
                результат от вложений.
              </p>
            </div>
          </div>
          <img src="img/modal-bg.png" alt class="widget-version__bg" />
          <nuxt-link class="widget-version__btn gen-btn" to="/tarif">Выбрать тариф</nuxt-link>
        </div>
      </div>
    </div>
  </b-modal>
</template>