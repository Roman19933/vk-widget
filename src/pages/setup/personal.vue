<template>
  <form action="#">
    <div class="widgets vidget-page">
      <div class="widgets__wrapper vidget-page__wrapper">
        <div class="widgets__left feedback">
          <div class="widgets__header vidget-page__head">
            <div class="widgets__header-title vidget-page__title">
              <img src alt />
              <h4>Виджет «важное сообщение»</h4>
            </div>
            <div class="widgets__switch">
              <span>Режим просмотра</span>
              <div class="widgets__switch-btn">
                <input id="switchcheckbox" type="checkbox" class="hidden switchcheckbox" />
                <label for="switchcheckbox" id="switch" class="switch"></label>
              </div>
            </div>
          </div>
          <div class="widgets__content">
            <div class="widgets__content-wrapper">
              <div class="widgets__content-title">
                <img src="img/fire.png" alt />
                <h4>{firstname}, у нас для тебя спецпредложение!</h4>
              </div>
              <div class="widgets__content-personal">
                <div class="widgets__content-avatar">
                  <img src="img/photo.png" alt />
                </div>
                <div class="widgets__content-text widgets__content-text_personal">
                  <h4 class="title">Получи бесплатную консультацию!</h4>
                  <p>
                    Все просто - жми на кнопку ниже, оставь заявку и мы свяжемся с тобой
                    в считанные
                    секунды!
                  </p>
                  <button class="gen-btn">+ добавить</button>
                </div>
              </div>
              <button class="widgets__content-add">+ Добавить подвал виджета</button>
            </div>
            <div class="widgets__save">
              <button class="gen-btn">Сохранить</button>
            </div>
          </div>
          <div class="widgets__footer">
            <!-- <div class="widgets__save">
                            <button class="gen-btn">Сохранить</button>
            </div>-->
            <div class="widgets__rules">
              <p>
                В виджетах запрещено размещение сторонней коммерческой и политической рекламы! Подробнее
                в п.5.13.4.1.
                <a
                  href="#"
                >правил ВКонтакте!</a>
              </p>
            </div>
          </div>
        </div>
        <div class="widgets__right">
          <setup-form />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import SetupForm from "@/components/setup/SetupForm";
export default {
  components: {
    SetupForm
  }
};
</script>

<style lang="scss" scoped>
</style>