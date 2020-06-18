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
                  <img
                    v-if="item.status === 2"
                    src="img/tarif-ok-yellow.png"
                    alt
                  />
                  <img v-else src="img/tarif-close.png" alt />
                </p>
                <p class="history__info">{{ item.options.curr_label }}</p>
              </li>
            </template>
          </ul>
          <nuxt-link to="/tarif" class="history__link gen-btn"
            >Назад к тарифам</nuxt-link
          >
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
      historyData: [
        {
          amounth: 2500,
          status: 2,
          options: {
            days: "360",
            group: "195259137",
            price: "2500",
            tariff: "1",
            curr_label: "BANKOCEAN3R"
          },
          created_at: "2020-06-18T10:12:02+00:00",
          started_at: "2020-06-18T10:12:02+00:00",
          expired_at: "2021-06-13T10:12:02+00:00",
          subscribe_title: {
            tariff: "ПРОСТО ВИДЖЕТ"
          }
        },
        {
          amounth: 2500,
          status: 2,
          options: {
            days: "360",
            group: "195259137",
            price: "2500",
            tariff: "1",
            curr_label: "BANKOCEAN3R"
          },
          created_at: "2020-06-18T10:12:21+00:00",
          started_at: "2020-06-18T10:12:02+00:00",
          expired_at: "2022-06-08T10:12:02+00:00",
          subscribe_title: {
            tariff: "ПРОСТО ВИДЖЕТ"
          }
        }
      ],
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
