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
          <div class="tarif__blocks">
            <div v-for="item in tarif" :key="item.id" class="tarif__block">
              <h3 class="tarif__name">{{ item.title }}</h3>
              <p class="tarif__text">
                {{ item.descr }}
              </p>
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
              <a
                :href="
                  dateTarif
                    ? item.tariff_periods[1].payment_link
                    : item.tariff_periods[0].payment_link
                "
                class="tarif__btn gen-btn"
                >Оплатить</a
              >
            </div>
          </div>
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
              <a href="#">vk.me/Ковальский Виджет</a>
            </p>
            <div class="tarif-payment__checkbox">
              <label>
                <input class="checkbox" type="checkbox" checked />
                <span class="checkbox-custom"></span>
                <p class="label">Автоматический платеж</p>
              </label>
            </div>
            <div class="tarif-payment__checkbox">
              <label>
                <input class="checkbox" type="checkbox" name="policy" />
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
        console.log(data.data);
        this.tarif = data.data;
        // data.data.forEach(e => {
        //   if (e.is_year) {
        //     this.tarifYear.push(e)
        //   } else {
        //     this.tarifMoon.push(e)
        //   }
        // });
        // this.tarif = data.data
      } catch (e) {
        console.log(e);
      } finally {
        // this.vidgetLoad = false
      }
    },
    dateTarifSwitch(e) {
      console.log(e);
      this.dateTarif = e;
      // if(e) {
      //   this.tarif = this.tarifYear
      //   this.dateTarif = e
      // } else {
      //   this.tarif = this.tarifMoon
      //   this.dateTarif = e
      // }
    }
  },
  mounted() {
    this.getTarif();
    this.dateTarifSwitch(this.dateTarif);
  }
};
</script>
