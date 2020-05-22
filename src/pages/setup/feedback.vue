<template>
  <form action="#">
    <div class="widgets vidget-page">
      <div class="widgets__wrapper vidget-page__wrapper">
        <div class="widgets__left feedback">
          <div class="widgets__header vidget-page__head">
            <div class="widgets__header-title vidget-page__title">
              <img src alt />
              <h4>Виджет «отзывы»</h4>
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
                <img src="img/heart.png" alt />
                <h4>Отзывы наших клиентов</h4>
              </div>
              <div class="widgets__items widgets__items_product">
                <button class="add-item">+ Добавить элемент</button>
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
          <!-- <setup-form /> -->
        </div>
      </div>
    </div>
  </form>
</template>

<script>
// import SetupForm from "@/components/setup/SetupForm";
export default {
  components: {
    // SetupForm
  }
};
</script>

<style lang="scss" scoped>
</style>