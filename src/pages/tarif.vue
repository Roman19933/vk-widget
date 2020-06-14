<template>
  <div class="vidget-page">
    <app-navigation-menu />
    <div class="vidget-page__wrapper">
      <div class="vidget-page__head">
        <h1 class="vidget-page__title">выберите подходящий тариф для сообщества</h1>
        <button
          v-b-modal="'modal-promocode'"
          class="vidget-page__promocode"
        >Ввести промокод</button>
      </div>
      <div class="tarif">
        <div class="tarif__wrapper">
          <div class="tarif__blocks">
            <div v-for="tarif in tarif" :key="tarif.id" class="tarif__block">
              <h3 class="tarif__name">Просто виджет</h3>
              <p class="tarif__text">
                Настройте стандартный виджет,
                чтобы просто приветствовать
                пользователей
              </p>
              <div class="tarif-price">
                <div class="tarif-price__left">
                  <span class="tarif-price__currency">₽</span>
                  <p
                    class="tarif-price__old active">
                    {{ tarif.old_price }}
                  </p>
                </div>
                <div class="tarif-price__right">
                  <div class="tarif-price__block">
                    <p class="tarif-price__price">{{ tarif.price }}</p>
                    <span class="tarif-price__house">/ {{ dateTarif ? 'год' : 'месяц' }}</span>
                  </div>
                  <span class="tarif-price__info">за 1 сообщество</span>
                </div>
              </div>
              <ul class="tarif__items">
                <li class="tarif__item">
                  <span class="tarif__icon">
                    <img src="img/tarif-ok.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
                <li class="tarif__item">
                  <span class="tarif__icon">
                    <img src="img/tarif-ok.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
                <li class="tarif__item">
                  <span class="tarif__icon">
                    <img src="img/tarif-ok.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
                <li class="tarif__item disable">
                  <span class="tarif__icon">
                    <img src="img/tarif-close.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
                <li class="tarif__item disable">
                  <span class="tarif__icon">
                    <img src="img/tarif-close.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
                <li class="tarif__item disable">
                  <span class="tarif__icon">
                    <img src="img/tarif-close.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
                <li class="tarif__item disable">
                  <span class="tarif__icon">
                    <img src="img/tarif-close.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
                <li class="tarif__item disable">
                  <span class="tarif__icon">
                    <img src="img/tarif-close.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
              </ul>
              <a :href="tarif.paymentLink" class="tarif__btn gen-btn">Оплатить</a>
            </div>
            <div class="tarif__block">
              <h3 class="tarif__name">Для бизнеса</h3>
              <p class="tarif__text">
                Экономьте на рекламе,
                повышайте эффективность
                SMM и конверсию сообщества
              </p>
              <div class="tarif-price">
                <div class="tarif-price__left">
                  <span class="tarif-price__currency">₽</span>
                  <p
                    class="tarif-price__old"
                  >10000</p>
                </div>
                <div class="tarif-price__right">
                  <div class="tarif-price__block">
                    <p
                      class="tarif-price__price"
                    >8000</p>
                    <span class="tarif-price__house">/ {{ dateTarif ? 'год' : 'месяц' }}</span>
                  </div>
                  <span class="tarif-price__info">за 1 сообщество</span>
                </div>
              </div>
              <ul class="tarif__items">
                <li class="tarif__item">
                  <span class="tarif__icon">
                    <img src="img/tarif-ok.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
                <li class="tarif__item">
                  <span class="tarif__icon">
                    <img src="img/tarif-ok.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
                <li class="tarif__item">
                  <span class="tarif__icon">
                    <img src="img/tarif-ok.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
                <li class="tarif__item disable">
                  <span class="tarif__icon">
                    <img src="img/tarif-close.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
                <li class="tarif__item disable">
                  <span class="tarif__icon">
                    <img src="img/tarif-close.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
                <li class="tarif__item disable">
                  <span class="tarif__icon">
                    <img src="img/tarif-close.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
                <li class="tarif__item disable">
                  <span class="tarif__icon">
                    <img src="img/tarif-close.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
                <li class="tarif__item disable">
                  <span class="tarif__icon">
                    <img src="img/tarif-close.png" alt />
                  </span>
                  <span class="tarif__item-text">12 шаблонов виджетов</span>
                </li>
              </ul>
              <button class="tarif__btn gen-btn">Оплатить</button>
            </div>
          </div>
          <div class="tarif-payment">
            <div class="tarif-payment__head">
              <div class="tarif-payment__switch">
                <span class="tarif-payment__switch-name">месяц</span>
                <app-switch @switch-val="dateTarifSwitch" />
                <span class="tarif-payment__switch-name active">год</span>
              </div>
              <nuxt-link to="/history" class="tarif-payment__history">история платежей</nuxt-link>
            </div>
            <p class="tarif-payment__info">
              * Чтобы получить счет для юридического лица, напишите нам в сообщения сообщества:
              <a href="#">vk.me/spycat</a>
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
                  <a
                    href="#"
                    rel="nofollow"
                    v-b-modal="'modal-contract'"
                  >договора</a>
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-modal-promocode/>
    <app-modal-contract/>
  </div>
</template>

<script>
import AppModalContract from "@/components/modal/AppModalContract.vue";
import AppModalPromocode from "@/components/modal/AppModalPromocode.vue";

export default {
  components: {
    AppModalContract,
    AppModalPromocode,
  },
  data() {
    return {
      dateTarif: false,
      val: false,
      groupId: this.$store.getters['server/token/vkQuery'].vk_group_id,
      tarif: [],
      tarifYear: [],
      tarifMoon: []
    };
  },
  methods: {
    async getTarif () {
      // this.vidgetLoad = true
      try {
        let { data } = await this.$store.dispatch("server/tarif/getTarif", this.groupId)
        console.log(data.data)
        data.data.forEach(e => {
          if (e.is_year) {
            this.tarifYear.push(e)
          } else {
            this.tarifMoon.push(e)
          }
        });
        // this.tarif = data.data
      } catch(e) {
        console.log(e)
      } finally {
        // this.vidgetLoad = false
      }
    },
    dateTarifSwitch (e) {
      if(e) {
        this.tarif = this.tarifYear
        this.dateTarif = e
      } else {
        this.tarif = this.tarifMoon
        this.dateTarif = e
      }
    }
  },
  mounted() {
    this.getTarif()
    this.dateTarifSwitch(this.dateTarif)
  }
};
</script>
