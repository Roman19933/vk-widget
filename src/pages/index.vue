<template>
  <section class="container">
    <div>
      <ul>
        <li>
          <nuxt-link class="def-menu" target="_blank" to="/home">Главная</nuxt-link>
        </li>
        <li>
          <nuxt-link class="def-menu" target="_blank" to="/catalog/sales">Каталог для продаж</nuxt-link>
        </li>
        <li>
          <nuxt-link class="def-menu" target="_blank" to="/catalog/nav">Каталог навигации</nuxt-link>
        </li>
        <li>
          <nuxt-link class="def-menu" target="_blank" to="/setup/actions">Виджет «Акционные товары»</nuxt-link>
          <nuxt-link class="def-menu" target="_blank" to="/setup/clients">Виджет «наши клиенты»</nuxt-link>
          <nuxt-link class="def-menu" target="_blank" to="/setup/cover">Виджет «Акции в обложках»</nuxt-link>
          <nuxt-link class="def-menu" target="_blank" to="/setup/events">Виджет «Мероприятие»</nuxt-link>
          <nuxt-link class="def-menu" target="_blank" to="/setup/feedback">Виджет «отзывы»</nuxt-link>
          <nuxt-link class="def-menu" target="_blank" to="/setup/messages">Виджет «важное сообщение»</nuxt-link>
          <nuxt-link class="def-menu" target="_blank" to="/setup/peoples">Виджет «меню сообщества»</nuxt-link>
          <nuxt-link
            class="def-menu"
            target="_blank"
            to="/setup/personal"
          >Виджет «Персональное предложение»</nuxt-link>
          <nuxt-link class="def-menu" target="_blank" to="/setup/places">Виджет «Точки продаж»</nuxt-link>
          <nuxt-link
            class="def-menu"
            target="_blank"
            to="/setup/recomended"
          >Виджет «Рекомендованные товары»</nuxt-link>
          <nuxt-link class="def-menu" target="_blank" to="/setup/sales">Виджет "Акция и роспродажа"</nuxt-link>
          <nuxt-link
            class="def-menu"
            target="_blank"
            to="/setup/subscriptions"
          >Виджет «подписка на рассылки»</nuxt-link>
        </li>
        <li>
          <nuxt-link class="def-menu" target="_blank" to="#">Помощь</nuxt-link>
        </li>
        <li>
          <nuxt-link class="def-menu" target="_blank" to="/tarif">Тарифы</nuxt-link>
        </li>
        <li>
          <nuxt-link class="def-menu" target="_blank" to="/history">История платежей</nuxt-link>
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

