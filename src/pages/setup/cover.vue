<template>
  <form action="#">
    <div class="widgets vidget-page">
      <div class="widgets__wrapper vidget-page__wrapper">
        <div class="widgets__left">
          <div class="widgets__header vidget-page__head">
            <div class="widgets__header-title vidget-page__title">
              <img src alt />
              <h4>Виджет «Акции в обложках»</h4>
            </div>
            <div class="widgets__switch">
              <span>Режим просмотра</span>
              <div class="widgets__switch-btn">
                <input id="switchcheckbox" type="checkbox" class="hidden switchcheckbox" />
                <label for="switchcheckbox" id="switch" class="switch"></label>
              </div>
            </div>
          </div>
          <div class="widgets__content">
            <div class="widgets__content-wrapper">
              <div class="widgets__content-title">
                <img src="img/box.png" alt />
                <h4>{firstname}, хочешь купон на скидку в подарок?</h4>
              </div>
              <div class="widgets__items widgets__items_cover">
                <div class="item">
                  <div class="item__img">
                    <input id="file" type="file" class="hidden" />
                    <label for="file" id="upload"></label>
                    <img src="img/photo.png" alt class="photo" />
                  </div>
                  <div class="item__info">
                    <div class="item__info-cover">
                      <a href="#">Жаркое солнце в Майами</a>
                      <span>30% скидка, 4 звезды</span>
                    </div>
                    <button class="gen-btn">Забронировать</button>
                  </div>
                </div>
                <div class="item">
                  <div class="item__img">
                    <input id="file" type="file" class="hidden" />
                    <label for="file" id="upload"></label>
                    <img src="img/photo.png" alt class="photo" />
                  </div>
                  <div class="item__info">
                    <div class="item__info-cover">
                      <a href="#">Загадочный Египет</a>
                      <span>5% скидка, 3 звезды</span>
                    </div>
                    <button class="gen-btn">Забронировать</button>
                  </div>
                </div>
                <button class="add-item">+ Добавить элемент</button>
              </div>
              <button class="widgets__content-add">+ Добавить подвал виджета</button>
            </div>
            <div class="widgets__save">
              <button class="gen-btn">Сохранить</button>
            </div>
          </div>
          <div class="widgets__footer">
            <!-- <div class="widgets__save">
                            <button class="gen-btn">Сохранить</button>
            </div>-->
            <div class="widgets__rules">
              <p>
                В виджетах запрещено размещение сторонней коммерческой и политической рекламы! Подробнее
                в п.5.13.4.1.
                <a
                  href="#"
                >правил ВКонтакте!</a>
              </p>
            </div>
            <!-- <div class="widgets__error">
                            <p>Некоторые поля заполнены неверно. Внесите изменения и попробуйте снова.</p>
                            <button>
                                <img src="img/close-error.png" alt="">
                            </button>
            </div>-->
          </div>
        </div>
        <div class="widgets__right">
          <setup-form />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import SetupForm from "@/components/setup/SetupForm";
export default {
  components: {
    SetupForm
  }
};
</script>

<style lang="scss" scoped>
</style>