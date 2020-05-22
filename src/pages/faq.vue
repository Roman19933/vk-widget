<template>
  <div class="vidget-page vidget-page_faq">
    <app-navigation-menu />
    <div class="vidget-page__wrapper">
      <div class="vidget-page__head">
        <h1 class="vidget-page__title">страница помощи</h1>
      </div>
      <div class="faq">
        <div class="faq__wrapper">
          <ul class="faq__blocks">
            <li
              v-for="(item, index) in faq"
              :key="index"
              class="faq__block"
            >
              <app-collaps
                wrap-class="faq__block"
              >
                <template v-slot:title>
                  <div class="faq__block-list">
                    <h3 class="faq__name">{{ item.title }}</h3>
                    <span class="faq__arrow">
                      <img src="img/arrow.png" alt />
                    </span>
                  </div>
                </template>
                <template v-slot:content>
                  <div class="faq__hidden">
                    <p class="faq__text">{{ item.content }}</p>
                  </div>
                </template>
              </app-collaps>
            </li>
            <!-- <li class="faq__block">
              <div class="faq__block-list">
                <h3 class="faq__name">Как включить виджет?</h3>
                <span class="faq__arrow">
                  <img src="img/arrow.png" alt />
                </span>
              </div>
              <div class="faq__hidden">
                <p
                  class="faq__text"
                >Нет, ссылки на внешние сайты использовать нельзя. Это ограничение на стороне ВКонтакте.</p>
              </div>
            </li>
            <li class="faq__block">
              <div class="faq__block-list">
                <h3 class="faq__name">Публикация виджета прошла успешна, но виджет не отображается</h3>
                <span class="faq__arrow">
                  <img src="img/arrow.png" alt />
                </span>
              </div>
              <div class="faq__hidden">
                <p
                  class="faq__text"
                >Нет, ссылки на внешние сайты использовать нельзя. Это ограничение на стороне ВКонтакте.</p>
              </div>
            </li>
            <li class="faq__block">
              <div class="faq__block-list">
                <h3 class="faq__name">Можно ли использовать ссылки на внешние сайты?</h3>
                <span class="faq__arrow">
                  <img src="img/arrow.png" alt />
                </span>
              </div>
              <div class="faq__hidden">
                <p
                  class="faq__text"
                >Нет, ссылки на внешние сайты использовать нельзя. Это ограничение на стороне ВКонтакте.</p>
              </div>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCollaps from "@/components/AppCollaps.vue";
import AppNavigationMenu from "@/components/AppNavigationMenu.vue";

export default {
  components: {
    AppCollaps,
    AppNavigationMenu
  },
  data() {
    return {
      faq: [
        {
          title: 'Как включить виджет?',
          content: 'Нет, ссылки на внешние сайты использовать нельзя. Это ограничение на стороне ВКонтакте.'
        },
        {
          title: 'Публикация виджета прошла успешна, но виджет не отображается',
          content: 'Нет, ссылки на внешние сайты использовать нельзя. Это ограничение на стороне ВКонтакте'
        },
        {
          title: 'Можно ли использовать ссылки на внешние сайты?',
          content: 'Нет, ссылки на внешние сайты использовать нельзя. Это ограничение на стороне ВКонтакте.'
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
