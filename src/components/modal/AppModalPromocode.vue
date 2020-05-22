<template>
    <b-modal
        id="modal-promocode"
        hide-header
        hide-footer
    >
        <div class="modal__wrapper promocode">
            <button
                class="modal__close"
                @click="$bvModal.hide('modal-promocode')"
            >
                <img src="img/modal-close.png" alt="">
                </button>
            <div class="widget-public">
                <div class="widget-public__wrapper">
                    <img src="img/PIT.svg" alt="" class="widget-public__img">
                    <div class="widget-public__info">
                      <h2 class="modal__title">У вас есть промокод?</h2>
                      <p class="modal__text">Введите промокод и получите дополнительные бонусы, которые начнут
                          действовать после оплаты</p>
                      <div class="widget-public__group">
                          <div class="form-group">
                              <input type="text" placeholder="Ваш промокод">
                              <button type="submit" class="gen-btn">Принять</button>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </b-modal>
</template>