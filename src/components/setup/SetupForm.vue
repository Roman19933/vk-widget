<template>
  <div class="form">
    <h4 class="vidget-page__title">аудитория</h4>
    <p>Настройте показ виджета на свою целевую аудиторию, чтобы получить больше кликов по виджету и повысить конверсию</p>
    <div class="form__items">
      <div class="item">
        <div class="item__title">
          <span>Пол</span>
          <img src="/img/lock.png" alt />
        </div>
        <div class="form-group">
          <v-select :options="sexData" placeholder="Выберите пол" v-model="formData.sex"></v-select>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Возраст</span>
          <img src="/img/lock.png" alt />
        </div>
        <div class="item__double">
          <div class="form-group">
            <v-select :options="ageData" placeholder="От" v-model="formData.age.from"></v-select>
          </div>
          <div class="form-group">
            <v-select :options="ageData" placeholder="До" v-model="formData.age.to"></v-select>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>День рождения</span>
          <img src="/img/lock.png" alt />
        </div>
        <div class="item__double item__double_radio">
          <app-radio v-for="(item,index) in birthData" :key="index" :value="item" :data="formData" />
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Семейное положение</span>
          <img src="/img/lock.png" alt />
        </div>
        <div class="form-group">
          <v-select
            :options="statusData"
            placeholder="Выберите семейное положение"
            v-model="formData.relation"
          ></v-select>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Город</span>
          <img src="/img/lock.png" alt />
        </div>
        <div class="form-group">
          <v-select :options="cityData" placeholder="Выберите город" v-model="formData.city"></v-select>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Устройство</span>
          <img src="/img/lock.png" alt />
        </div>
        <div class="form-group">
          <v-select
            :options="deviceData"
            placeholder="Выберите устройство"
            v-model="formData.devices"
          ></v-select>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Состоит в сообществе</span>
          <img src="/img/lock.png" alt />
        </div>
        <div class="form-group form-group_textarea">
          <textarea name id placeholder="Введите ID сообществ" v-model="formData.groups"></textarea>
          <span>Каждый номер с новой строки</span>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Не состоит в сообществе</span>
          <img src="/img/lock.png" alt />
        </div>
        <div class="form-group form-group_textarea">
          <textarea name id placeholder="Введите ID сообществ" v-model="formData.groups_exclude"></textarea>
          <span>Каждый номер с новой строки</span>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>ID пользователей</span>
          <img src="/img/lock.png" alt />
        </div>
        <div class="form-group form-group_textarea">
          <textarea name id placeholder="Введите ID сообществ" v-model="formData.users"></textarea>
          <span>Каждый номер с новой строки</span>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Интересы второй половинки</span>
          <img src="/img/lock.png" alt />
        </div>
        <div class="form-group form-group_textarea">
          <textarea name id placeholder="Введите ID сообществ" v-model="formData.relationGroups"></textarea>
          <span>Каждый номер с новой строки</span>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Интересы пользователя</span>
          <img src="/img/lock.png" alt />
        </div>
        <div class="form-group form-group_textarea">
          <textarea name id placeholder="Введите ID сообществ" v-model="formData.userInterests"></textarea>
          <span>Каждый номер с новой строки</span>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Имя пользователя</span>
          <img src="/img/lock.png" alt />
        </div>
        <div class="form-group form-group_textarea">
          <textarea name id placeholder="Введите ID сообществ" v-model="formData.userName"></textarea>
          <span>Каждый номер с новой строки</span>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Фамилия пользователя</span>
          <img src="/img/lock.png" alt />
        </div>
        <div class="form-group form-group_textarea">
          <textarea name id placeholder="Введите ID сообществ" v-model="formData.userSurname"></textarea>
          <span>Каждый номер с новой строки</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppRadio from "@/components/form/AppRadio";
export default {
  props: {
    formData: {
      type: Object
    }
  },
  components: {
    AppRadio
  },
  data() {
    return {
      sexData: ["мужской", "женский", "любой"],
      ageData: [15, 25, 28, "любой"],
      statusData: ["женат", "не женат", "любой"],
      cityData: ["Москва", "Санкт-Петербург", "Казань"],
      deviceData: ["телефон", "планшет", "любой"],
      birthData: ["7 дней", "3 дня", "сегодня"]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>