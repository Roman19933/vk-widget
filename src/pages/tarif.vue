<template>
  <div class="vidget-page">
    <app-navigation-menu />
    <div class="vidget-page__wrapper">
      <div class="vidget-page__head">
        <h1 class="vidget-page__title">
          выберите подходящий тариф для сообщества
        </h1>
        <button v-b-modal="'modal-promocode'" class="vidget-page__promocode">
          Ввести промокод
        </button>
      </div>
      <div class="tarif">
        <div class="tarif__wrapper">
          <form action="https://vkwb.demka.online/api/v1/subscription" method="POST" target="_blank">
            <div class="tarif__blocks">
              <div v-for="item in tarif" :key="item.id" class="tarif__block">
                <h3 class="tarif__name">{{ item.title }}</h3>
                <p class="tarif__text">{{ item.descr }}</p>
                <div class="tarif-price">
                  <div class="tarif-price__left">
                    <span class="tarif-price__currency">₽</span>
                    <p class="tarif-price__old active">
                      {{
                        dateTarif
                          ? item.tariff_periods[1].old_price
                          : item.tariff_periods[0].old_price
                      }}
                    </p>
                  </div>
                  <div class="tarif-price__right">
                    <div class="tarif-price__block">
                      <p class="tarif-price__price">
                        {{
                          dateTarif
                            ? item.tariff_periods[1].price
                            : item.tariff_periods[0].price
                        }}
                      </p>
                      <span class="tarif-price__house"
                        >/ {{ dateTarif ? "год" : "месяц" }}</span
                      >
                    </div>
                    <span class="tarif-price__info">за 1 сообщество</span>
                  </div>
                </div>
                <ul
                  v-for="(a, index) in item.tariff_items"
                  :key="index"
                  class="tarif__items"
                >
                  <li class="tarif__item">
                    <span class="tarif__icon">
                      <img
                        :src="
                          a.enable ? 'img/tarif-ok.png' : 'img/tarif-close.png'
                        "
                        alt
                      />
                    </span>
                    <span class="tarif__item-text">{{ a.desc }}</span>
                  </li>
                </ul>
                <div>
                  <input
                    type="hidden"
                    name="group_id"
                    :value="
                      dateTarif
                        ? item.tariff_periods[1].payment_data.group_id
                        : item.tariff_periods[0].payment_data.group_id
                    "
                  />
                  <input
                    type="hidden"
                    name="tariff"
                    :value="
                      dateTarif
                        ? item.tariff_periods[1].payment_data.tariff
                        : item.tariff_periods[0].payment_data.tariff
                    "
                  />
                  <input
                    type="hidden"
                    name="day"
                    :value="
                      dateTarif
                        ? item.tariff_periods[1].payment_data.day
                        : item.tariff_periods[0].payment_data.day
                    "
                  />
                  <input
                    type="hidden"
                    name="price"
                    :value="
                      dateTarif
                        ? item.tariff_periods[1].payment_data.price
                        : item.tariff_periods[0].payment_data.price
                    "
                  />
                  <input
                    type="hidden"
                    name="recurrent"
                    :value="auto"
                  />
                </div>
                <div class="btn-wrapper">
                  <button :class="{ pen: !agree }" class="tarif__btn gen-btn" type="submit">
                    Оплатить
                  </button>
                  <span v-show="!agree" class="popover"
                    >Сначала нужно принять условия договора!</span
                  >
                </div>
              </div>
            </div>
          </form>
          <div class="tarif-payment">
            <div class="tarif-payment__head">
              <div class="tarif-payment__switch">
                <span class="tarif-payment__switch-name">месяц</span>
                <app-switch @switch-val="dateTarifSwitch" />
                <span class="tarif-payment__switch-name active">год</span>
              </div>
              <nuxt-link to="/history" class="tarif-payment__history"
                >история платежей</nuxt-link
              >
            </div>
            <p class="tarif-payment__info">
              * Чтобы получить счет для юридического лица, напишите нам в
              сообщения сообщества:
              <a href="https://vk.com/kowalskiwidget" target="_blank"
                >vk.com/kowalskiwidget</a
              >
            </p>
            <div class="tarif-payment__checkbox">
              <label>
                <input class="checkbox" type="checkbox" v-model="auto" />
                <span class="checkbox-custom"></span>
                <p class="label">Автоматический платеж</p>
              </label>
            </div>
            <div class="tarif-payment__checkbox">
              <label>
                <input
                  class="checkbox"
                  type="checkbox"
                  name="policy"
                  v-model="agree"
                />
                <span class="checkbox-custom"></span>
                <p class="label">
                  Я принимаю условия
                  <a href="#" rel="nofollow" v-b-modal="'modal-contract'"
                    >договора</a
                  >
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-modal-promocode />
    <app-modal-contract />
  </div>
</template>

<script>
import AppModalContract from "@/components/modal/AppModalContract.vue";
import AppModalPromocode from "@/components/modal/AppModalPromocode.vue";

export default {
  components: {
    AppModalContract,
    AppModalPromocode
  },
  data() {
    return {
      dateTarif: false,
      val: false,
      auto: true,
      agree: false,
      groupId: this.$store.getters["server/token/vkQuery"].vk_group_id,
      tarif: [],
      tarifYear: [],
      tarifMoon: []
    };
  },
  methods: {
    async getTarif() {
      try {
        let { data } = await this.$store.dispatch(
          "server/tarif/getTarif",
          this.groupId
        );
        this.tarif = data.data;
      } catch (e) {
        console.log(e);
      }
    },
    dateTarifSwitch(e) {
      this.dateTarif = e;
    }
  },
  mounted() {
    this.getTarif();
    this.dateTarifSwitch(this.dateTarif);
  }
};
</script>
<style lang="scss">
.pen {
  pointer-events: none;
  background-color: #a2a2ad;
}
.btn-wrapper {
  position: relative;
  &:hover {
    .popover {
      display: flex;
    }
  }
  .popover {
    top: -45px;
    right: -3px;
    font-size: 12px;
    &:before {
      bottom: -22px;
      top: initial;
      transform: translateY(-84%);
      right: initial;
      border: 5px solid transparent;
      border-top: 7px solid #21203d;
      left: 50%;
    }
  }
}
</style>
