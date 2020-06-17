<template>
  <div class="main-menu">
    <div class="main-menu__wrapper">
      <h2 class="main-menu__title">Меню</h2>
      <nav class="main-menu__menu">
        <ul class="main-menu__items">
          <template v-for="item in items">
            <app-collaps
              :col="collaps"
              class="main-menu__item"
              v-if="item.children"
              title-class="main-menu__item_col"
              :key="item.text"
            >
              <template v-slot:title>
                <a href="#" class="main-menu__link">
                  <img class="main-menu__icon" :src="item.icon" alt />
                  <span class="main-menu__link-text">{{ item.text }}</span>
                </a>
                <div class="main-menu__arrow">
                  <img src="/img/arrow.png" alt />
                </div>
                <div class="main-menu__arrow main-menu__arrow_inner">
                  <img src="/img/arrow-yellow.png" alt />
                </div>
              </template>
              <template v-slot:content>
                <ul class="main-menu__subitems">
                  <nuxt-link
                    class="main-menu__subitem"
                    v-for="(child, i) in item.children"
                    :key="i"
                    :to="child.to"
                  >
                    <p class="main-menu__sublink">{{ child.text }}</p>
                  </nuxt-link>
                </ul>
              </template>
            </app-collaps>
            <!-- <li class="main-menu__item"
              v-if="item.children"
              :key="item.text"
              @click="isShow=!isShow"
              :class="{'show': isShow}"
            >
              <a href="#" class="main-menu__link">
                <img class="main-menu__icon" :src="item.icon" alt="">
                <span class="main-menu__link-text">{{ item.text }}</span>
              </a>
              <div class="main-menu__arrow"><img src="/img/arrow.png" alt=""></div>
              <div class="main-menu__arrow main-menu__arrow_inner"><img src="img/arrow-yellow.png" alt=""></div>
              <ul class="main-menu__subitems">
                <nuxt-link
                  class="main-menu__subitem"
                   v-for="(child, i) in item.children"
                  :key="i"
                  :to="child.to"
                >
                  <p class="main-menu__sublink">
                    {{ child.text }}
                  </p>
                </nuxt-link>
              </ul>
            </li>-->
            <nuxt-link
              v-else
              exact
              :tag="'li'"
              :to="item.to"
              :key="item.text"
              class="main-menu__item"
            >
              <p class="main-menu__link">
                <img class="main-menu__icon" :src="item.icon" alt />
                <span class="main-menu__link-text">{{ item.text }}</span>
              </p>
            </nuxt-link>
          </template>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import AppCollaps from "@/components/AppCollaps.vue";

export default {
  components: {
    AppCollaps
  },
  data() {
    return {
      collaps: false,
      isShow: false,
      items: [
        {
          icon: "/img/menu-1.png",
          text: "Мои виджеты",
          to: "/main"
        },
        {
          to: "/home",
          icon: "/img/menu-2.png",
          text: "Каталог виджетов",
          model: false,
          children: [
            {
              text: "Для продаж",
              to: "/catalog/sales"
            },
            {
              text: "Для навигации",
              to: "/catalog/nav"
            },
            {
              text: "Информационные",
              to: "/catalog/info"
            }
          ]
        },
        {
          icon: "/img/menu-3.png",
          text: "Тарифы",
          to: "/tarif"
        },
        {
          icon: "/img/menu-4.png",
          text: "Помощь",
          to: "/faq"
        }
      ]
    };
  },
  mounted() {
    if (
      this.$route.name === "catalog-sales" ||
      this.$route.name === "catalog-nav" ||
      this.$route.name === "catalog-info"
    ) {
      this.collaps = true;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
