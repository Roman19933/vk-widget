<template>
  <div class="form">
    <h4 class="vidget-page__title">аудитория</h4>
    <p>
      Настройте показ виджета на свою целевую аудиторию, чтобы получить больше
      кликов по виджету и повысить конверсию
    </p>
    <div class="form__items">
      <div class="item">
        <div class="item__title">
          <span>Пол</span>
          <div
            class="item__img-wrapper"
            v-if="!subs || subs.sys_name !== 'business'"
          >
            <img src="/img/lock.png" alt />
            <div class="popover">
              <div class="popover__wrapper">
                <span>Не доступно на Вашем тарифе!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <v-select
            :options="sexData"
            placeholder="Выберите пол"
            :value="value.sex"
            label="title"
            :disabled="!subs || subs.sys_name !== 'business'"
            @input="changeData('sex', $event)"
          ></v-select>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Возраст</span>
          <div
            class="item__img-wrapper"
            v-if="!subs || subs.sys_name !== 'business'"
          >
            <img src="/img/lock.png" alt />
            <div class="popover">
              <div class="popover__wrapper">
                <span>Не доступно на Вашем тарифе!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item__double">
          <div class="form-group">
            <v-select
              :options="ageData"
              placeholder="От"
              :value="value.age.from"
              @input="changeData('age.from', $event)"
              :disabled="!subs || subs.sys_name !== 'business'"
            ></v-select>
          </div>
          <div class="form-group">
            <v-select
              :options="ageData"
              placeholder="До"
              :value="value.age.to"
              @input="changeData('age.to', $event)"
              :disabled="!subs || subs.sys_name !== 'business'"
            ></v-select>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>День рождения</span>
          <div
            class="item__img-wrapper"
            v-if="!subs || subs.sys_name !== 'business'"
          >
            <img src="/img/lock.png" alt />
            <div class="popover">
              <div class="popover__wrapper">
                <span>Не доступно на Вашем тарифе!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item__double item__double_radio">
          <app-radio
            v-for="(item, index) in birthData"
            :key="index"
            :item="item"
            :data="value"
            :value="value.bdate"
            :disabled="!subs || subs.sys_name !== 'business'"
            @input="changeData('bdate', $event)"
          />
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Семейное положение</span>
          <div
            class="item__img-wrapper"
            v-if="!subs || subs.sys_name !== 'business'"
          >
            <img src="/img/lock.png" alt />
            <div class="popover">
              <div class="popover__wrapper">
                <span>Не доступно на Вашем тарифе!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <v-select
            :options="relationData"
            placeholder="Выберите семейное положение"
            label="title"
            :value="value.relation"
            @input="changeData('relation', $event)"
            :disabled="!subs || subs.sys_name !== 'business'"
          ></v-select>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Город</span>
          <div
            class="item__img-wrapper"
            v-if="!subs || subs.sys_name !== 'business'"
          >
            <img src="/img/lock.png" alt />
            <div class="popover">
              <div class="popover__wrapper">
                <span>Не доступно на Вашем тарифе!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <v-select
            :options="cityData"
            :value="value.city"
            @input="changeData('city', $event)"
            :filterable="false"
            label="title"
            @search="onSearch"
            placeholder="Выберите город"
            :disabled="!subs || subs.sys_name !== 'business'"
          >
            <template slot="no-options"
              >Начните вводить название города</template
            >
            <template slot="option" slot-scope="option">
              <div class="d-center">{{ option.title }}</div>
            </template>
          </v-select>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Устройство</span>
          <div
            class="item__img-wrapper"
            v-if="!subs || subs.sys_name !== 'business'"
          >
            <img src="/img/lock.png" alt />
            <div class="popover">
              <div class="popover__wrapper">
                <span>Не доступно на Вашем тарифе!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <v-select
            :options="deviceData"
            placeholder="Выберите устройство"
            :value="value.devices"
            label="title"
            @input="changeData('devices', $event)"
            :disabled="!subs || subs.sys_name !== 'business'"
          ></v-select>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Состоит в сообществе</span>
          <div
            class="item__img-wrapper"
            v-if="!subs || subs.sys_name !== 'business'"
          >
            <img src="/img/lock.png" alt />
            <div class="popover">
              <div class="popover__wrapper">
                <span>Не доступно на Вашем тарифе!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group form-group_textarea">
          <textarea
            placeholder="Введите ID сообществ"
            :value="value.groups"
            @input="changeData('groups', $event.target.value)"
            :disabled="!subs || subs.sys_name !== 'business'"
          ></textarea>
          <span>Каждый номер с новой строки</span>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Не состоит в сообществе</span>
          <div
            class="item__img-wrapper"
            v-if="!subs || subs.sys_name !== 'business'"
          >
            <img src="/img/lock.png" alt />
            <div class="popover">
              <div class="popover__wrapper">
                <span>Не доступно на Вашем тарифе!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group form-group_textarea">
          <textarea
            placeholder="Введите ID сообществ"
            :value="value.groups_exclude"
            @input="changeData('groups_exclude', $event.target.value)"
            :disabled="!subs || subs.sys_name !== 'business'"
          ></textarea>
          <span>Каждый номер с новой строки</span>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>ID пользователей</span>
          <div
            class="item__img-wrapper"
            v-if="!subs || subs.sys_name !== 'business'"
          >
            <img src="/img/lock.png" alt />
            <div class="popover">
              <div class="popover__wrapper">
                <span>Не доступно на Вашем тарифе!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group form-group_textarea">
          <textarea
            placeholder="Введите ID пользователя"
            :value="value.users"
            @input="changeData('users', $event.target.value)"
            :disabled="!subs || subs.sys_name !== 'business'"
          ></textarea>
          <span>Каждый номер с новой строки</span>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Интересы второй половинки</span>
          <div
            class="item__img-wrapper"
            v-if="!subs || subs.sys_name !== 'business'"
          >
            <img src="/img/lock.png" alt />
            <div class="popover">
              <div class="popover__wrapper">
                <span>Не доступно на Вашем тарифе!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group form-group_textarea">
          <textarea
            placeholder="Введите интересы второй половинки"
            :value="value.relation_groups"
            @input="changeData('relation_groups', $event.target.value)"
            :disabled="!subs || subs.sys_name !== 'business'"
          ></textarea>
          <span>Каждое названия с новой строки</span>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Интересы пользователя</span>
          <div
            class="item__img-wrapper"
            v-if="!subs || subs.sys_name !== 'business'"
          >
            <img src="/img/lock.png" alt />
            <div class="popover">
              <div class="popover__wrapper">
                <span>Не доступно на Вашем тарифе!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group form-group_textarea">
          <textarea
            placeholder="Введите интересы пользователя"
            :value="value.user_interests"
            @input="changeData('user_interests', $event.target.value)"
            :disabled="!subs || subs.sys_name !== 'business'"
          ></textarea>
          <span>Каждое название с новой строки</span>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Имя пользователя</span>
          <div
            class="item__img-wrapper"
            v-if="!subs || subs.sys_name !== 'business'"
          >
            <img src="/img/lock.png" alt />
            <div class="popover">
              <div class="popover__wrapper">
                <span>Не доступно на Вашем тарифе!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group form-group_textarea">
          <textarea
            placeholder="Введите имя пользователя"
            :value="value.user_name"
            @input="changeData('user_name', $event.target.value)"
            :disabled="!subs || subs.sys_name !== 'business'"
          ></textarea>
          <span>Каждое Имя с новой строки</span>
        </div>
      </div>
      <div class="item">
        <div class="item__title">
          <span>Фамилия пользователя</span>
          <div
            class="item__img-wrapper"
            v-if="!subs || subs.sys_name !== 'business'"
          >
            <img src="/img/lock.png" alt />
            <div class="popover">
              <div class="popover__wrapper">
                <span>Не доступно на Вашем тарифе!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group form-group_textarea">
          <textarea
            placeholder="Введите фамилию пользователя"
            :value="value.user_surname"
            @input="changeData('user_surname', $event.target.value)"
            :disabled="!subs || subs.sys_name !== 'business'"
          ></textarea>
          <span>Каждая Фамилия с новой строки</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppRadio from "@/components/form/AppRadio";
import { mapGetters } from "vuex";
import _ from "lodash";
export default {
  data() {
    return {
      sexData: [
        {
          title: "мужской",
          id: 2
        },
        {
          title: "женский",
          id: 1
        },
        {
          title: "любой",
          id: 0
        }
      ],
      ageData: [
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99
      ],
      relationData: [
        {
          title: "Не выбрано",
          id: 0
        },
        {
          title: "Не женат",
          id: 1
        },
        {
          title: "Встречаюсь",
          id: 2
        },
        {
          title: "Помолвлен(а)",
          id: 3
        },
        {
          title: "В гражданском браке",
          id: 8
        },
        {
          title: "Влюблен",
          id: 7
        },
        {
          title: "Все сложно",
          id: 5
        },
        {
          title: "В активном поиске",
          id: 6
        }
      ],
      cityData: [],
      deviceData: [
        {
          title: "Веб-приложения",
          screen_name: "web"
        },
        {
          title: "Мобильные устройства",
          screen_name: "mobile"
        },
        {
          title: "Андроид устройства",
          screen_name: "android"
        },
        {
          title: "Apple устройства",
          screen_name: "iphone"
        }
      ],
      birthData: [
        {
          title: "7 дней",
          id: 2
        },
        {
          title: "3 дня",
          id: 1
        },
        {
          title: "сегодня",
          id: 0
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      subs: "server/payments/subs"
    })
  },
  mounted(){
    // this.value.groups.join("\n")
    // console.log(this.value.groups.join("\n"))
  },
  methods: {
    // joinStr(str) {
    //   if(str) {
    //     return str.join("\n");
    //   }
    // },
    changeData(name, event) {
      console.log(event.split(",").join("\n"));
      let data = JSON.parse(JSON.stringify(this.value));
      if (name === "age.from") {
        data.age.from = event;
      } else if (name === "age.to") {
        data.age.to = event;
      } else {
        data[name] = event;
      }
      this.$emit("input", data);
    },
    onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: _.debounce(async (loading, search, vm) => {
      vm.cityData = [];
      if (search) {
        try {
          let { data } = await vm.$store.dispatch(
            "server/city/getCity",
            search
          );
          console.log(data.items);
          vm.cityData = data.items;
        } catch (e) {
          console.error(e);
        }
      }
      loading(false);
    }, 500)
  },
  props: {
    value: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  components: {
    AppRadio
  }
};
</script>

<style lang="scss" scoped></style>
