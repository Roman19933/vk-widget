<template>
  <main class="main">
    <div class="main__wrapper">
      <div class="main__head wrapper">
        <div class="main__head-title">
          <img src="/img/logo_widget.png" alt />
          <h4>
            Превращайте 30% посетителей сообщества
            <span>в заявки при помощи умных виджетов Spycat</span>
          </h4>
          <p>
            Умные виджеты подстраиваются под вашу аудиторию, привлекают внимание, собирают заявки и подписчиков
            в
            рассылки
          </p>
        </div>
        <div class="main__head-btn">
          <button class="gen-btn">Подключить себе</button>
          <button class="gen-btn">Подключить клиенту</button>
        </div>
        <div class="main__head-footer">
          <img src="/img/scroll.png" alt />
          <span>Сервис для предпринимателей и SMM-специалистов</span>
        </div>
      </div>
      <div class="main__info">
        <div class="main__info-wrapper wrapper">
          <h4>ДЛЯ ЧЕГО НУЖЕН SPYCAT?</h4>
          <div class="main__info-content">
            <img src="/img/logo_widgets.png" alt />
            <div class="main__info-p">
              <p>
                Вы сделали дизайн сообщества, публикуете посты, настроили рекламу, получаете переходы,а
                заказов мало или совсем нет?
              </p>
              <p>Spycat поможет получать в 2 раза больше клиентов из сообщества при помощи умных виджетов</p>
            </div>
          </div>
        </div>
      </div>
      <div class="main__options wrapper">
        <div class="main__options-title">
          <h4>ВОЗМОЖНОСТИ СЕРВИСА</h4>
          <p>Самый мощный и простой редактор виджетов ВКонтакте, нацеленный на повышение ваших продаж</p>
        </div>
        <div class="main__options-items">
          <div class="item">
            <app-svg-icon name="editor" class="editor" />
            <div class="item__content">
              <h4>Визуальный редактор</h4>
              <p>Легко и быстро редактируйте текст, картинки, ссылки и другие элементы виджета</p>
            </div>
          </div>
          <div class="item">
            <app-svg-icon name="calc" class="editor" />
            <div class="item__content">
              <h4>Готовые шаблоны</h4>
              <p>
                Экономьте время на обдумывание идеи виджета и настройте 1 из 12 готовых шаблонов для
                коммерции.
              </p>
            </div>
          </div>
          <div class="item">
            <app-svg-icon name="student" class="editor" />
            <div class="item__content">
              <h4>Выбор аудитории</h4>
              <p>
                Делайте разные предложения для разных групп аудиторий по полу, возрасту, городу, дню
                рождения, интересам, VK ID и другим параметрам.
              </p>
            </div>
          </div>
          <div class="item">
            <app-svg-icon name="browser" class="editor" />
            <div class="item__content">
              <h4>Статистика</h4>
              <p>
                Собирайте статистику по кликам в vk.cc и найдите лучший вариант виджета, который приносит
                больше результата.
              </p>
            </div>
          </div>
          <div class="item">
            <app-svg-icon name="wireframe" class="editor" />
            <div class="item__content">
              <h4>Клиентская поддержка</h4>
              <p>
                Если у вас появятся вопросы, то мы быстро поможем решить их и подскажем, как действовать
                дальше.
              </p>
            </div>
          </div>
          <div class="item">
            <app-svg-icon name="idea" class="editor" />
            <div class="item__content">
              <h4>Виджет «под ключ»</h4>
              <p>Придумаем эффективный виджет под ваши аудитории и настроим Spycat с гарантией результата.</p>
            </div>
          </div>
        </div>
        <div class="main__button">
          <button class="gen-btn">Подключить себе</button>
          <button class="gen-btn">Подключить клиенту</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AppSvgIcon from "@/components/AppSvgIcon.vue";
export default {
  components: {
    AppSvgIcon
  }
};
</script>

<style lang="scss" scoped>
</style>