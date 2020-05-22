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
      <b-modal id="bv-modal-example" hide-header hide-footer>
        <div class="d-block text-center">
          <h3>Hello From This Modal!</h3>
        </div>
      </b-modal>
      <div class="tarif">
        <div class="tarif__wrapper">
          <div class="tarif__blocks">
            <div class="tarif__block">
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
                    v-if="price.old"
                    class="tarif-price__old active">
                    {{ price.old }}
                  </p>
                </div>
                <div class="tarif-price__right">
                  <div class="tarif-price__block">
                    <p class="tarif-price__price">{{ price.price }}</p>
                    <span class="tarif-price__house">/ год</span>
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
                    v-if="price.priceBiz.old"
                    class="tarif-price__old"
                  >{{ price.priceBiz.old }}</p>
                </div>
                <div class="tarif-price__right">
                  <div class="tarif-price__block">
                    <p
                      class="tarif-price__price"
                    >{{ price.priceBiz.price }}</p>
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
                <app-switch @switch-val="dateTarif" />
                <!-- <input v-model="dateTarif" id="switchcheckbox3" type="checkbox" class="hidden switchcheckbox" />
                <label for="switchcheckbox3" id="switch" class="switch"></label>-->
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
                <input class="checkbox" type="checkbox" />
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
                  <a href="/policy.html" rel="nofollow" target="_blank">договора</a>
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-modal-promocode/>
  </div>
</template>

<script>
import AppNavigationMenu from "@/components/AppNavigationMenu.vue";
import AppModalPromocode from "@/components/modal/AppModalPromocode.vue";
import AppSwitch from "@/components/form/AppSwitch.vue";
import AppSvgIcon from "@/components/AppSvgIcon.vue";

export default {
  components: {
    AppNavigationMenu,
    AppModalPromocode,
    AppSwitch,
    AppSvgIcon
  },
  data() {
    return {
      priceMonth: {
        price: 490,
        priceBiz: {
          price: 990
        }
      },
      priceYear: {
        price: 4440,
        old: 5880,
        priceBiz: {
          price: 8880,
          old: 11880
        }
      },
      price: {
        price: 490,
        old: null,
        priceBiz: {
          price: 990,
          old: null
        }
      }
    };
  },
  methods: {
    dateTarif (e) {
      if(e) {
        this.price = this.priceYear
      } else {
        this.price = this.priceMonth
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
