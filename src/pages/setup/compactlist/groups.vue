<template>
  <form action="#" @submit.prevent="create">
    <div class="widgets vidget-page">
      <div class="widgets__wrapper vidget-page__wrapper">
        <div class="widgets__left feedback">
          <app-loader v-model="loading">
            <div class="widgets__header vidget-page__head">
              <div class="widgets__header-title vidget-page__title">
                <a
                  href="#"
                  @click.prevent="
                    $emit('edit:element', {
                      typeModal: 'modal-widget-text',
                      map: {
                        title: {
                          fieldName: 'name',
                          value: widget.name || defaultName
                        }
                      }
                    })
                  "
                  >{{ widget.name || defaultName }}</a
                >
              </div>
              <div class="widgets__switch">
                <span>Режим просмотра</span>
                <div class="widgets__switch-btn">
                  <app-switch @switch-val="userInfo" />
                </div>
              </div>
            </div>
            <div class="widgets__content">
              <div class="widgets__content-wrapper">
                <div class="widgets__content-title">
                  <img src="/img/fire.png" alt />
                  <a
                    href="#"
                    @click.prevent="
                      $emit('edit:element', {
                        typeModal: 'modal-widget-title-link',
                        map: {
                          title: {
                            fieldName: 'title',
                            value: widget.data.title || ''
                          },
                          link: {
                            fieldName: 'title_url',
                            value: widget.data.title_url || ''
                          }
                        }
                      })
                    "
                    >{{ widget.data.title }}</a
                  >
                </div>
                <div class="widgets__items widgets__items_places">
                  <draggable
                    v-model="widget.data.rows"
                    group="product"
                    class="widgets__items_draggable"
                  >
                    <template v-for="(item, index) in widget.data.rows">
                      <app-widget-item-groups
                        v-model="widget.data.rows[index]"
                        :prename-validation="`data.rows.${index}.`"
                        :validation-errors="validationErrors"
                        :key="index"
                        @remove:item="removeItem(widget.data.rows, index)"
                      />
                    </template>
                    <button
                      class="add-item"
                      @click.prevent="addItem(widget.data.rows)"
                      v-if="widget.data.rows.length < 6 && !this.switch"
                    >
                      + Добавить элемент
                    </button>
                  </draggable>
                </div>
                <div class="widgets__content-add">
                  <a
                    href="#"
                    @click.prevent="
                      $emit('edit:element', {
                        typeModal: 'modal-widget-title-link',
                        map: {
                          title: {
                            fieldName: 'more',
                            value: widget.data.more || ''
                          },
                          link: {
                            fieldName: 'more_url',
                            value: widget.data.more_url || ''
                          }
                        }
                      })
                    "
                    >{{ widget.data.more ? widget.data.more : "+ добавить" }}</a
                  >
                </div>
              </div>
              <div class="widgets__save">
                <button class="gen-btn">Сохранить</button>
              </div>
            </div>
            <div class="widgets__footer">
              <div class="widgets__rules">
                <p>
                  В виджетах запрещено размещение сторонней коммерческой и
                  политической рекламы! Подробнее в п.5.13.4.1.
                  <a href="https://vk.com/terms" target="_blank"
                    >правил ВКонтакте!</a
                  >
                </p>
              </div>
              <!-- <app-widget-error v-if="error" @close="error = !error" /> -->
            </div>
          </app-loader>
        </div>
        <div class="widgets__right">
          <app-widget-form v-model="formSegmentation" />
        </div>
      </div>
      <component
        v-if="modal"
        :is="`app-${modal}`"
        :value="modal === 'modal-widget-text' ? widget : widget.data"
        :map-data="mapData"
        :other="other"
        @saved="handlerSaved"
        @close="clear"
      />
    </div>
  </form>
</template>

<script>
import Widgets from "@/mixins/widgets";
import AppWidgetForm from "@/components/setup/AppWidgetFormComponent";
import AppWidgetItemGroups from "@/components/setup/widgets/AppWidgetItemGroupsComponent";
import AppModalWidgetText from "@/components/modal/widgets/AppModalWidgetTextComponent";
import AppModalWidgetTitleLink from "@/components/modal/widgets/AppModalWidgetTitleLinkComponent";

export default {
  data() {
    return {
      widget: {
        type_name: "Меню сообщества",
        type_link: "/setup/compactlist/groups?category=nav&edit=true",
        data: {
          more: "",
          more_url: "",
          title: "Меню сообщества",
          title_counter: "",
          title_url: "",
          rows: [
            {
              address: null,
              button: "Перейти",
              button_url: "",
              descr: "",
              icon_id: "",
              text: null,
              time: null,
              title: "Бесплатное занятие",
              title_url: ""
            }
          ]
        },
        is_active: false,
        name: "",
        segmentation: {
          sex: [],
          age: { from: "", to: "" },
          bdate: [],
          relation: [],
          city: [],
          devices: [],
          user_surname: [],
          user_name: [],
          user_interests: [],
          relation_groups: [],
          users: [],
          groups_exclude: [],
          groups: []
        },
        type: "compact_list",
        sc_type: "groups"
      }
    };
  },
  methods: {
    addItem(arr) {
      arr.push({
        address: null,
        button: "",
        button_url: "",
        descr: "",
        icon_id: "",
        text: null,
        time: null,
        title: "",
        title_url: ""
      });
    }
  },
  mixins: [Widgets],
  components: {
    AppWidgetForm,
    AppWidgetItemGroups,
    AppModalWidgetText,
    AppModalWidgetTitleLink
  }
};
</script>
