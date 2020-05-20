<template>
  <div class="main-menu">
    <div class="main-menu__wrapper">
      <h2 class="main-menu__title">
        Меню
      </h2>
      <nav class="main-menu__menu">
        <ul class="main-menu__items">
          <template v-for="item in items">
            <li class="main-menu__item"
              v-if="item.children"
              :key="item.text"
              @click="isShow=!isShow"
              :class="{'show': isShow}"
            >
              <a href="#" class="main-menu__link">
                <img class="main-menu__icon" :src="item.icon" alt="">
                <span class="main-menu__link-text">{{ item.text }}</span>
              </a>
              <div class="main-menu__arrow"><img src="img/arrow.png" alt=""></div>
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
            </li>
            <nuxt-link
              v-else
              :to="item.to"
              :key="item.text"
              class="main-menu__item"
            >
              <p class="main-menu__link">
                <img class="main-menu__icon" :src="item.icon" alt="">
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
  export default {
    data() {
      return {
        isShow: false,
        items: [
          {
            icon: 'img/menu-1.png',
            text: 'Мои виджеты',
            to: '/home'
          },
          {
            to: '/home',
            icon: 'img/menu-2.png',
            text: 'Каталог виджетов',
            model: false,
            children: [
              {
                text: 'Для продаж',
                to: '/new'
              },
              {
                text: 'Для навигации',
                to: '/new1'
              }
            ],
          },
          {
            icon: 'img/menu-3.png',
            text: 'Тарифы',
            to: '/tarif'
          },
          {
            icon: 'img/menu-4.png',
            text: 'Помощь',
            to: '/faq'
          }
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
