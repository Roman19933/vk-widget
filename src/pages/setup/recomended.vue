<template>
  <form action="#">
    <div class="widgets vidget-page">
      <div class="widgets__wrapper vidget-page__wrapper">
        <div class="widgets__left">
          <div class="widgets__header vidget-page__head">
            <div class="widgets__header-title vidget-page__title">
              <img src alt />
              <h4>Виджет «Акционные товары»</h4>
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
                <img src="img/heart.png" alt />
                <h4>{firstname}, успей на распродажу!</h4>
              </div>
              <div class="widgets__items widgets__items_product">
                <div class="item">
                  <div class="item__menu">
                    <button class="item__menu-close">
                      <img src="img/close-error.png" alt />
                    </button>
                    <a href="#" class="item__menu-burger">
                      <img src="img/burger.png" alt />
                    </a>
                  </div>
                  <div class="item__img">
                    <input id="file" type="file" class="hidden" />
                    <label for="file" id="upload"></label>
                    <img src="img/photo.png" alt class="photo" />
                  </div>
                  <div class="item__info">
                    <span class="item__title">Red T-shirt</span>
                    <button class="item__add">+ добавить</button>
                    <a href="#" class="item__sales">Узнать цену</a>
                  </div>
                </div>
                <div class="item">
                  <div class="item__menu">
                    <button class="item__menu-close">
                      <img src="img/close-error.png" alt />
                    </button>
                    <a href="#" class="item__menu-burger">
                      <img src="img/burger.png" alt />
                    </a>
                  </div>
                  <div class="item__img">
                    <input id="file" type="file" class="hidden" />
                    <label for="file" id="upload"></label>
                    <img src="img/photo.png" alt class="photo" />
                  </div>
                  <div class="item__info">
                    <span class="item__title">Red T-shirt</span>
                    <button class="item__add">+ добавить</button>
                    <a href="#" class="item__sales">Узнать цену</a>
                  </div>
                </div>
                <div class="item">
                  <div class="item__menu">
                    <button class="item__menu-close">
                      <img src="img/close-error.png" alt />
                    </button>
                    <a href="#" class="item__menu-burger">
                      <img src="img/burger.png" alt />
                    </a>
                  </div>
                  <div class="item__img">
                    <input id="file" type="file" class="hidden" />
                    <label for="file" id="upload"></label>
                    <img src="img/photo.png" alt class="photo" />
                  </div>
                  <div class="item__info">
                    <span class="item__title">Red T-shirt</span>
                    <button class="item__add">+ добавить</button>
                    <a href="#" class="item__sales">Узнать цену</a>
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