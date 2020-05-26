<template>
  <b-modal id="modal-public" hide-header hide-footer>
    <div class="modal__wrapper public">
      <button class="modal__close" @click="$bvModal.hide('modal-public')">
        <img src="img/modal-close.png" alt />
      </button>
      <div class="widget-public">
        <div class="widget-public__wrapper">
          <img src="img/PIT.svg" alt class="widget-public__img" />
          <div class="widget-public__info">
            <h2 class="modal__title">публикация виджета</h2>
            <p class="modal__text">
              Вы создали свой первый виджет в сообществе.
              Хотите опубликовать?
            </p>
            <div class="widget-public__group">
              <button
                @click="$bvModal.hide('modal-public')"
                class="widget-public__btn gen-btn disable"
              >Нет</button>
              <button class="widget-public__btn gen-btn">Да</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>