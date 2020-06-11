<template>
  <div class="vidget-page">
    <app-navigation-menu />
    <div class="vidget-page__wrapper">
      <div class="vidget-page__head">
        <h1 class="vidget-page__title">история платежей</h1>
        <p class="history__payment">Автоплатеж отключен</p>
      </div>
      <div class="history">
        <div class="history__wrapper">
          <ul class="history__blocks">
            <li class="history__block history__block_head">
              <p class="history__title">Дата платежа</p>
              <p class="history__title">Сумма, руб.</p>
              <p class="history__title">Тариф</p>
              <p class="history__title">Период</p>
              <p class="history__title">Статус</p>
              <p class="history__title">Тип платежа</p>
            </li>
            <li
              v-for="(his, index) in historyData"
              :key="index"
              class="history__block"
              :class="{ history__block_inner: !(index % 2) }"
            >
              <p class="history__info">{{ his.date }}</p>
              <p class="history__info">{{ his.price }}</p>
              <p class="history__info">{{ his.rate }}</p>
              <p class="history__info">
                <span>{{ his.period }}</span>
                <span>{{ his.periodTo }}</span>
              </p>
              <p class="history__info">
                <img
                  v-if="his.status"
                  src="img/tarif-ok-yellow.png" alt />
                <img
                  v-else
                  src="img/tarif-close.png" alt />
              </p>
              <p class="history__info">{{ his.payment }}</p>
            </li>
            <!-- <li class="history__block">
              <p class="history__info">26.11.2019</p>
              <p class="history__info">8880</p>
              <p class="history__info">Для бизнеса</p>
              <p class="history__info">
                <span>26.11.2019</span>
                <span>26.11.2020</span>
              </p>
              <p class="history__info">
                <img src="img/tarif-ok-yellow.png" alt />
              </p>
              <p class="history__info">Наличные</p>
            </li>
            <li class="history__block history__block_inner">
              <p class="history__info">26.11.2019</p>
              <p class="history__info">8880</p>
              <p class="history__info">Для бизнеса</p>
              <p class="history__info">
                <span>26.11.2019</span>
                <span>26.11.2020</span>
              </p>
              <p class="history__info">
                <img src="img/tarif-close.png" alt />
              </p>
              <p class="history__info">Банк</p>
            </li> -->
          </ul>
          <nuxt-link to="/tarif" class="history__link gen-btn">Назад к тарифам</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavigationMenu from "@/components/AppNavigationMenu.vue"

export default {
  components: {
    AppNavigationMenu
  },
  data() {
    return {
      historyData: [
        {
          date: '26.11.2019',
          price: 8880,
          rate: 'Для бизнеса',
          period: '26.11.2019',
          periodTo: '26.11.2020',
          status: true,
          payment: 'Банк'
        },
        {
          date: '26.11.2019',
          price: 8880,
          rate: 'Для бизнеса',
          period: '26.11.2019',
          periodTo: '26.11.2020',
          status: true,
          payment: 'Банк'
        },
        {
          date: '26.11.2019',
          price: 8880,
          rate: 'Для бизнеса',
          period: '26.11.2019',
          periodTo: '26.11.2020',
          status: true,
          payment: 'Банк'
        },
        {
          date: '26.11.2019',
          price: 8880,
          rate: 'Для бизнеса',
          period: '26.11.2019',
          periodTo: '26.11.2020',
          status: true,
          payment: 'Банк'
        },
        {
          date: '26.11.2019',
          price: 8880,
          rate: 'Для бизнеса',
          period: '26.11.2019',
          periodTo: '26.11.2020',
          status: true,
          payment: 'Банк'
        },
        {
          date: '26.11.2019',
          price: 8880,
          rate: 'Для бизнеса',
          period: '26.11.2019',
          periodTo: '26.11.2020',
          status: false,
          payment: 'Банк'
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
