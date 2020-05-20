<template>
  <form action="#">
    <div class="widgets vidget-page">
      <div class="widgets__wrapper vidget-page__wrapper">
        <div class="widgets__left feedback">
          <div class="widgets__header vidget-page__head">
            <div class="widgets__header-title vidget-page__title">
              <img src alt />
              <h4>ВИДЖЕТ «мероприятия»</h4>
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
                <img src="img/fire.png" alt />
                <h4>{firstname}, Время поднять навык в SMM</h4>
              </div>
              <div class="widgets__items widgets__items_places">
                <div class="widgets__content-places">
                  <div class="widgets__content-avatar">
                    <img src="img/photo.png" alt />
                  </div>
                  <div class="widgets__content-text widgets__content-text_places">
                    <div class="places-content">
                      <h4>Магазин Дом обуви</h4>
                      <span class="places-content__text">
                        Более 3 000 пар обуви в одном
                        месте
                      </span>
                      <div class="places-content__info">
                        <div class="places-content__location">
                          <img src="img/marker.png" alt />
                          <span>Онлайн</span>
                        </div>
                        <div class="places-content__location">
                          <img src="img/time.png" alt />
                          <span>14:00 - 17:00</span>
                        </div>
                      </div>
                    </div>
                    <button class="gen-btn">Связаться</button>
                  </div>
                </div>
                <div class="widgets__content-places">
                  <div class="widgets__content-avatar">
                    <img src="img/photo.png" alt />
                  </div>
                  <div class="widgets__content-text widgets__content-text_places">
                    <div class="places-content">
                      <h4>Магазин Дом обуви</h4>
                      <span class="places-content__text">
                        Более 3 000 пар обуви в одном
                        месте
                      </span>
                      <div class="places-content__info">
                        <div class="places-content__location">
                          <img src="img/marker.png" alt />
                          <span>Онлайн</span>
                        </div>
                        <div class="places-content__location">
                          <img src="img/time.png" alt />
                          <span>14:00 - 17:00</span>
                        </div>
                      </div>
                    </div>
                    <button class="gen-btn">Связаться</button>
                  </div>
                </div>
                <div class="widgets__content-places">
                  <div class="widgets__content-avatar">
                    <img src="img/photo.png" alt />
                  </div>
                  <div class="widgets__content-text widgets__content-text_places">
                    <div class="places-content">
                      <h4>Магазин Дом обуви</h4>
                      <span class="places-content__text">
                        Более 3 000 пар обуви в одном
                        месте
                      </span>
                      <div class="places-content__info">
                        <div class="places-content__location">
                          <img src="img/marker.png" alt />
                          <span>Онлайн</span>
                        </div>
                        <div class="places-content__location">
                          <img src="img/time.png" alt />
                          <span>14:00 - 17:00</span>
                        </div>
                      </div>
                    </div>
                    <button class="gen-btn">Связаться</button>
                  </div>
                </div>
                <div class="widgets__content-places">
                  <div class="widgets__content-avatar">
                    <img src="img/photo.png" alt />
                  </div>
                  <div class="widgets__content-text widgets__content-text_places">
                    <div class="places-content">
                      <!-- <h4>Магазин Дом обуви</h4> -->
                      <button class="item__add places-content__title">+ добавить</button>
                      <!-- <span class="places-content__text">Более 3 000 пар обуви в одном
                      месте</span>-->
                      <button class="item__add">+ добавить</button>
                      <div class="places-content__info">
                        <div class="places-content__location">
                          <img src="img/marker.png" alt />
                          <!-- <span>ул. Советская, 33</span> -->
                          <button class="item__add">+ добавить</button>
                        </div>
                        <div class="places-content__location">
                          <img src="img/time.png" alt />
                          <!-- <span>8:00 - 20:00 (без выходных)</span> -->
                          <button class="item__add">+ добавить</button>
                        </div>
                      </div>
                    </div>
                    <button class="gen-btn">Связаться</button>
                  </div>
                </div>
                <button class="add-item">+ Добавить элемент</button>
              </div>
              <!-- <button class="add-item">+ Добавить элемент</button> -->
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