<template>
  <div class="vidget-page">
    <app-navigation-menu />
    <div class="vidget-page__wrapper">
      <div class="vidget-page__head">
        <h1 class="vidget-page__title">Мои виджеты</h1>
        <button class="vidget-page__add gen-btn">Создать виджет</button>
      </div>
      <div
        class="vidget-none"
        v-if="widgetNone"
      >
        <div class="vidget-none__wrapper">
          <img src="img/PIT.svg" alt="" class="vidget-none__img">
          <p class="vidget-none__text">
            Дружище, у тебя еще нет виджетов.
            Не пора ли их создать?
          </p>
          <a href="#" class="vidget-none__link gen-btn">Создать виджет</a>
        </div>
      </div>
      <div
        class="home"
        v-else
      >
        <div class="home__wrapper">
          <ul class="home__blocks">
            <li class="home-block">
              <div class="home-block__title">
                <p class="home-block__icon">
                  <img src="img/home-sort.svg" alt />
                </p>
                <p class="home-block__name">Скидки!</p>
              </div>
              <p class="home-block__text">Акции и скидки</p>
              <div class="home-block__events">
                <div class="home-block__switch">
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Опубликовать виджет</span>
                    </div>
                  </div>
                  <input id="switchcheckbox1" type="checkbox" class="hidden switchcheckbox" />
                  <label for="switchcheckbox1" id="switch" class="switch"></label>
                </div>
                <a href="#" class="home-block__user">
                  <img src="img/home-user.svg" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Аудитория</span>
                      <span>Возраст: от 15 до 66</span>
                      <span>Пол: женский</span>
                      <span>ДР: сегодня</span>
                      <span>
                        Семейное положение: не
                        женат/не замужем
                      </span>
                    </div>
                  </div>
                </a>
                <a href="#" class="home-block__edit">
                  <img src="img/home-register.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Редактировать виджет</span>
                    </div>
                  </div>
                </a>
                <a href="#" class="home-block__look">
                  <img src="img/home-sheet.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Создать копию</span>
                    </div>
                  </div>
                </a>
                <button class="home-block__delete">
                  <img src="img/home-trash.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Удалить виджет</span>
                    </div>
                  </div>
                </button>
              </div>
            </li>
            <li class="home-block">
              <div class="home-block__title">
                <p class="home-block__icon">
                  <img src="img/home-sort.svg" alt />
                </p>
                <p class="home-block__name">Скидки!</p>
              </div>
              <p class="home-block__text">Акции и скидки</p>
              <div class="home-block__events">
                <div class="home-block__switch">
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Опубликовать виджет</span>
                    </div>
                  </div>
                  <input id="switchcheckbox2" type="checkbox" class="hidden switchcheckbox" />
                  <label for="switchcheckbox2" id="switch" class="switch"></label>
                </div>
                <a href="#" class="home-block__user">
                  <img src="img/home-user.svg" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Аудитория</span>
                      <span>Возраст: от 15 до 66</span>
                      <span>Пол: женский</span>
                      <span>ДР: сегодня</span>
                      <span>
                        Семейное положение: не
                        женат/не замужем
                      </span>
                    </div>
                  </div>
                </a>
                <a href="#" class="home-block__edit">
                  <img src="img/home-register.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Редактировать виджет</span>
                    </div>
                  </div>
                </a>
                <a href="#" class="home-block__look">
                  <img src="img/home-sheet.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Создать копию</span>
                    </div>
                  </div>
                </a>
                <button class="home-block__delete">
                  <img src="img/home-trash.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Удалить виджет</span>
                    </div>
                  </div>
                </button>
              </div>
            </li>
            <li class="home-block">
              <div class="home-block__title">
                <p class="home-block__icon">
                  <img src="img/home-sort.svg" alt />
                </p>
                <p class="home-block__name">Скидки!</p>
              </div>
              <p class="home-block__text">Акции и скидки</p>
              <div class="home-block__events">
                <div class="home-block__switch">
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Опубликовать виджет</span>
                    </div>
                  </div>
                  <input id="switchcheckbox3" type="checkbox" class="hidden switchcheckbox" />
                  <label for="switchcheckbox3" id="switch" class="switch"></label>
                </div>
                <a href="#" class="home-block__user">
                  <img src="img/home-user.svg" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Аудитория</span>
                      <span>Возраст: от 15 до 66</span>
                      <span>Пол: женский</span>
                      <span>ДР: сегодня</span>
                      <span>
                        Семейное положение: не
                        женат/не замужем
                      </span>
                    </div>
                  </div>
                </a>
                <a href="#" class="home-block__edit">
                  <img src="img/home-register.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Редактировать виджет</span>
                    </div>
                  </div>
                </a>
                <a href="#" class="home-block__look">
                  <img src="img/home-sheet.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Создать копию</span>
                    </div>
                  </div>
                </a>
                <button class="home-block__delete">
                  <img src="img/home-trash.png" alt />
                  <div class="popover">
                    <div class="popover__wrapper">
                      <span>Удалить виджет</span>
                    </div>
                  </div>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavigationMenu from "@/components/AppNavigationMenu.vue";

export default {
  data() {
    return {
      widgetNone: false
    }
  },
  components: {
    AppNavigationMenu
  }
};
</script>

<style lang="scss" scoped>
</style>
