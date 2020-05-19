<template>
  <section class="container">
    <div>
      <ul>
        <li>
          <nuxt-link class="def-menu" target="_blank" to="/home">Главная</nuxt-link>
        </li>
        <li>
          <nuxt-link class="def-menu" target="_blank"  to="#">Каталог для продаж</nuxt-link>
        </li>
        <li>
          <nuxt-link class="def-menu" target="_blank"  to="#">Каталог навигации</nuxt-link>
        </li>
        <li>
          <nuxt-link class="def-menu" target="_blank"  to="#">Виджет "Акция и роспродажа"</nuxt-link>
        </li>
        <li>
          <nuxt-link class="def-menu" target="_blank" to="#">Помощь</nuxt-link>
        </li>
        <li>
          <nuxt-link class="def-menu" target="_blank" to="#">Тарифы</nuxt-link>
        </li>
        <li>
          <nuxt-link class="def-menu" target="_blank" to="#">История платежей</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  ul {
    margin: 30px auto;
    width: 300px;
    list-style: none;
  }
  .def-menu {
    padding: 15px 20px;
    width: 300px;
    text-align: center;
    display: block;
    background-color: #3a3b5e;
    margin-bottom: 10px;
    border-radius: 15px;
  }
</style>

