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
                    <p class="faq__text">{{ item.descr }}</p>
                    <a v-if="item.link" href="#" class="catalog-sales__link">{{ item.link }}</a>
                    <button v-if="item.btn" class="gen-btn" >{{ item.btn }}</button>
                  </div>
                </template>
              </app-collaps>
            </li>
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
      faq: ""
    }
  },
  async mounted() {
    try {
      let response = await this.$store.dispatch("server/faq/getFaq");
      this.faq = response
    } catch(e) {
      console.log(e)
    }
  },
};
</script>
