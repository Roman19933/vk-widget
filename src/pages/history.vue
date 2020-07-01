<template>
  <div class="widget-page">
    <app-navigation-menu />
    <div class="widget-page__wrapper">
      <div class="widget-page__head">
        <h1 class="widget-page__title">история платежей</h1>
        <div class="history__payment-wrapper">
          <p class="history__payment">Автоплатеж {{ selfPayment ? 'включен' : 'отключен'}}</p>
          <app-switch @switch-val="selfPayment = $event" />
        </div>
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
            <template v-for="(item, index) in historyData">
              <li
                v-if="historyData.length"
                :key="index"
                class="history__block"
                :class="{ history__block_inner: !(index % 2) }"
              >
                <p class="history__info">{{ item.created_at | dateFilter }}</p>
                <p class="history__info">{{ item.amounth }}</p>
                <p class="history__info">{{ item.subscribe_title.tariff }}</p>
                <p class="history__info">
                  <span>{{ item.started_at | dateFilter }}</span>
                  <span>{{ item.expired_at | dateFilter }}</span>
                </p>
                <p class="history__info">
                  <img v-if="item.status === 2" src="img/tarif-ok-yellow.png" alt />
                  <img v-else src="img/tarif-close.png" alt />
                </p>
                <p class="history__info">{{ item.options.curr_label }}</p>
              </li>
            </template>
          </ul>
          <nuxt-link to="/tarif" class="history__link gen-btn">Назад к тарифам</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavigationMenu from "@/components/AppNavigationMenu.vue";

export default {
  components: {
    AppNavigationMenu
  },
  data() {
    return {
      selfPayment: false,
      historyData: [],
      groupId: this.$store.getters["server/token/vkQuery"].vk_group_id
    };
  },
  methods: {
    async getHistory() {
      try {
        let { data } = await this.$store.dispatch(
          "server/payments/getHistory",
          this.groupId
        );
        this.historyData = data.data;
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    this.getHistory();
  },
  filters: {
    dateFilter(val) {
      let date = new Date(val);
      return date.toLocaleDateString("ru-Ru");
    }
  }
};
</script>
