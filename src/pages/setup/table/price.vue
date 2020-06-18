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
                >{{ widget.name || defaultName }}</a>
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
                  <img src="/img/heart.png" alt />
                  <a
                    href="#"
                    v-b-modal.default
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
                  >{{ widget.data.title }}</a>
                </div>
                <div class="widgets__items widgets__items_client">
                  <!-- <draggable
                    v-model="widget.data.body"
                    group="client"
                    class="widgets__items_draggable "
                  >-->
                  <template v-for="(item, index) in widget.data.body">
                    <app-widget-item-table
                      v-model="widget.data.body[index]"
                      :key="index"
                      :index="index"
                      @remove:item="removeItem(widget.data.body, index)"
                    />
                  </template>
                  <button class="add-item" @click.prevent="addItemTable">+ Добавить элемент</button>
                  <!-- </draggable> -->
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
                  >{{ widget.data.more ? widget.data.more : "+ добавить" }}</a>
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
                  <a
                    href="#"
                  >правил ВКонтакте!</a>
                </p>
              </div>
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
        @savedClients="groupLink"
        @close="clear"
      />
    </div>
  </form>
</template>

<script>
import Widgets from "@/mixins/widgets";
import AppWidgetForm from "@/components/setup/AppWidgetFormComponent";
import AppWidgetItemTable from "@/components/setup/widgets/AppWidgetItemTableComponent";
import AppModalWidgetText from "@/components/modal/widgets/AppModalWidgetTextComponent";
import AppModalWidgetClient from "@/components/modal/widgets/AppModalWidgetClientsComponent";
import AppModalWidgetTitleLink from "@/components/modal/widgets/AppModalWidgetTitleLinkComponent";

export default {
  data() {
    return {
      widget: {
        type_name: "Наши клиенты",
        type_link: "/setup/table/clients?category=sales&edit=true",
        data: {
          more: "",
          more_url: "",
          title:
            "{firstname}, Спасибо, что подписался! Твои друзья уже с нами!",
          title_counter: "",
          title_url: "",
          body: [
            [
              {
                text: "Россия",
                icon_id: "3484735_23434324"
              },
              {
                text: "1 строка",
                url: "https://vk.com/wall-12345_542321"
              },
              {
                text: "1 строка",
                url: "https://vk.com/wall-12345_542321"
              },
              {
                text: "1 строка",
                url: "https://vk.com/wall-12345_542321"
              }
            ],
            [
              {
                text: "USA",
                icon_id: "3484735_23434324"
              },
              {
                text: "2 строка",
                url: "https://vk.com/wall-12345_542321"
              },
              {
                text: "2 строка",
                url: "https://vk.com/wall-12345_542321"
              },
              {
                text: "2 строка",
                url: "https://vk.com/wall-12345_542321"
              }
            ]
          ],
          head: [
            {
              text: "Страна",
              align: "left"
            },
            {
              text: "Золото",
              align: "left"
            },
            {
              text: "Серебро",
              align: "left"
            },
            {
              text: "Бронза",
              align: "left"
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
          userSurname: [],
          userName: [],
          userInterests: [],
          relationGroups: [],
          users: [],
          groups_exclude: [],
          groups: []
        },
        type: "table",
        sc_type: "client"
      }
    };
  },
  methods: {
    addItemTable() {
      console.log("ok");
    }
  },
  mixins: [Widgets],
  components: {
    AppWidgetForm,
    AppModalWidgetText,
    AppModalWidgetTitleLink,
    AppWidgetItemTable,
    AppModalWidgetClient
  }
};
</script>
