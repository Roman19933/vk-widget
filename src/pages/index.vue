<template>
  <main class="main">
    <div class="main__wrapper">
      <div class="main__head wrapper">
        <div class="main__head-title">
          <img src="/img/logo.png" class="main__head-logo" alt />
          <h4>
            ПРЕВРАЩАЙТЕ 50% ПОСЕТИТЕЛЕЙ СООБЩЕСТВА
            <span>В ЗАЯВКИ ПРИ ПОМОЩИ УМНЫХ ВИДЖЕТОВ КОВАЛЬСКИЙ</span>
          </h4>
          <p>
            Умные виджеты подстраиваются под вашу аудиторию, привлекают  внимание, собирают заявки и подписчиков в рассылки
          </p>
        </div>
        <div class="main__head-btn">
          <button @click="toPlug" class="gen-btn">Подключить себе</button>
          <button @click="toPlug" class="gen-btn">Подключить клиенту</button>
          <!-- <nuxt-link to="/catalog/sales" class="gen-btn">Подключить себе</nuxt-link>
          <nuxt-link to="/catalog/sales" class="gen-btn">Подключить клиенту</nuxt-link>-->
        </div>
        <div class="main__head-footer">
          <img src="/img/scroll.png" alt />
          <span>Сервис для предпринимателей и SMM-специалистов</span>
        </div>
      </div>
      <div class="main__info">
        <div class="main__info-wrapper wrapper">
          <h4>ДЛЯ ЧЕГО НУЖЕН Ковальский?</h4>
          <div class="main__info-content">
            <img src="/img/logo_a.gif" alt />
            <div class="main__info-p">
              <p>
                Вы сделали дизайн сообщества, публикуете посты, настроили  рекламу, получаете переходы,а заказов мало или совсем нет?
              </p>
              <p>
                Ковальский поможет получать в 2 раза больше клиентов из сообщества при помощи умных виджетов
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="main__options wrapper">
        <div class="main__options-title">
          <h4>ВОЗМОЖНОСТИ СЕРВИСА</h4>
          <p>
            Самый мощный и простой редактор виджетов ВКонтакте,  нацеленный на повышение ваших продаж
          </p>
        </div>
        <div class="main__options-items">
          <div class="item">
            <app-svg-icon name="editor" class="editor" />
            <div class="item__content">
              <h4>Визуальный редактор</h4>
              <p>
                Легко и быстро редактируйте текст, картинки, ссылки и другие
                элементы виджета
              </p>
            </div>
          </div>
          <div class="item">
            <app-svg-icon name="calc" class="editor" />
            <div class="item__content">
              <h4>Готовые шаблоны</h4>
              <p>
                Экономьте время на обдумывание идеи виджета и настройте 1 из 14 готовых шаблонов для коммерции.
              </p>
            </div>
          </div>
          <div class="item">
            <app-svg-icon name="student" class="editor" />
            <div class="item__content">
              <h4>Выбор аудитории</h4>
              <p>
                Делайте разные предложения для разных групп аудиторий по полу, возрасту, городу, дню рождения, интересам, VK ID и другим параметрам.
              </p>
            </div>
          </div>
          <div class="item">
            <app-svg-icon name="browser" class="editor" />
            <div class="item__content">
              <h4>Статистика</h4>
              <p>
                Собирайте статистику по кликам в vk.cc и найдите лучший вариант виджета, который приносит больше результата.
              </p>
            </div>
          </div>
          <div class="item">
            <app-svg-icon name="wireframe" class="editor" />
            <div class="item__content">
              <h4>Клиентская поддержка</h4>
              <p>
                Если у вас появятся вопросы, то мы быстро поможем решить их и подскажем, как действовать дальше.
              </p>
            </div>
          </div>
          <div class="item">
            <app-svg-icon name="idea" class="editor" />
            <div class="item__content">
              <h4>Виджет «под ключ»</h4>
              <p>
                Придумаем эффективный виджет под ваши аудитории и настроим с гарантией результата.
              </p>
            </div>
          </div>
        </div>
        <div class="main__button">
          <button @click="toPlug" class="gen-btn">Подключить себе</button>
          <button @click="toPlug" class="gen-btn">Подключить клиенту</button>
          <!-- <nuxt-link to="/catalog/sales" tag="button" class="gen-btn">Подключить себе</nuxt-link>
          <nuxt-link to="/catalog/sales" tag="button" class="gen-btn">Подключить клиенту</nuxt-link>-->
        </div>
        <div class="main__options-items" style="width: 100%">
          <div id="vk_groups"></div>
        </div>
      </div>

      <footer class="main__footer">
        <div class="main__footer-left"><a href="#" rel="nofollow" v-b-modal="'modal-contract'">Пользовательское соглашение</a> action@mykowalski.ru</div>
        <div class="main__footer-right">ИП Романов Сергей Евгеньевич, ИНН 344691287230</div>
      </footer>
    </div>

    <img class="main__cloudlet" src="img/cloudlet.svg" alt />
    <img class="main__cloudlet1" src="img/cloudlet8.svg" alt />
    <img class="main__cloudlet2" src="img/cloudlet1.svg" alt />
    <img class="main__cloudlet3" src="img/cloudlet2.svg" alt />
    <img class="main__cloudlet4" src="img/cloudlet3.svg" alt />
    <img class="main__cloudlet5" src="img/cloudlet4.svg" alt />
    <img class="main__cloudlet6" src="img/cloudlet5.svg" alt />
    <img class="main__cloudlet7" src="img/cloudlet6.svg" alt />
    <img class="main__cloudlet8" src="img/cloudlet7.svg" alt />
    <img class="main__cloudlet9" src="img/cloudlet8.svg" alt />

    <app-modal-contract />
  </main>
</template>

<script>
import AppModalContract from "@/components/modal/AppModalContract.vue";
export default {
  components: {
    AppModalContract
  },
  mounted() {
    const groupId = this.$store.getters["server/token/vkQuery"].vk_group_id;
    this.$store.dispatch("vk/bridge/updateTokenGroup", groupId);
  },
  created() {
    if (typeof VK === "object") {
      VK.Widgets.Group(
        "vk_groups",
        {
          mode: 3,
          width: "900px",
          no_cover: 1,
          color1: "21203D",
          color2: "FFFFFF",
          color3: "F53180"
        },
        182894787
      );
    }
  },
  layout: "main",
  methods: {
    async toPlug() {
      try {
        let { group_id } = await this.$vkBridge.send("VKWebAppAddToCommunity");
        window.open(
          `https://vk.com/app${process.env.NUXT_VK_APP_ID}_-${group_id}`,
          "_blank"
        );
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
