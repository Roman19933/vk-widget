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
                <!-- <div class="widgets__items widgets__items_product">
                <button class="add-item">+ Добавить элемент</button>
                </div>-->
                <div class="widgets__items widgets__items_feedback">
                  <draggable
                    v-model="widget.data.rows"
                    group="feedback"
                    class="widgets__items_draggable"
                  >
                    <template v-for="(item, index) in widget.data.rows">
                      <app-widget-item-personal
                        v-model="widget.data.rows[index]"
                        :key="index"
                        @remove:item="removeItem(widget.data.rows, index)"
                      />
                    </template>
                    <button
                      v-if="widget.data.rows.length < 3 && !this.switch"
                      class="add-item"
                      @click.prevent="
                        $emit('edit:element', {
                          typeModal: 'modal-widget-client',
                          map: {
                            title: {
                              fieldName: '',
                              value: ''
                            }
                          }
                        })
                      "
                    >+ Добавить элемент</button>
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
import AppWidgetItemPersonal from "@/components/setup/widgets/AppWidgetItemPersonalComponent";
import AppModalWidgetText from "@/components/modal/widgets/AppModalWidgetTextComponent";
import AppModalWidgetClient from "@/components/modal/widgets/AppModalWidgetClientsComponent";
import AppModalWidgetTitleLink from "@/components/modal/widgets/AppModalWidgetTitleLinkComponent";

export default {
  data() {
    return {
      widget: {
        type_name: "Отзывы",
        type_link: "/setup/list/feedback?category=sales&edit=true",
        data: {
          more: "",
          more_url: "",
          title: "Отзывы наших клиентов",
          title_counter: "",
          title_url: "",
          rows: []
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
        type: "list",
        sc_type: "feedback"
      },
      groupId: this.$store.getters["server/token/vkQuery"].vk_group_id
    };
  },
  methods: {
    async groupLink(e) {
      try {
        let obj = {
          group_id: +this.groupId,
          link: e
        };
        let { data } = await this.$store.dispatch(
          "server/group/getInfoForComments",
          obj
        );
        this.widget.data.rows.push({
          text: data.data.items[0].text,
          time: "",
          descr: "",
          title:
            data.data.profiles[0].first_name +
            " " +
            data.data.profiles[0].last_name,
          button: "Читать отзыв",
          address: "",
          icon_id: data.data.profiles[0].screen_name,
          icon_url: data.data.profiles[0].photo_50,
          title_url: "https://vk.com/" + data.data.profiles[0].screen_name,
          button_url: e
        });
      } catch (e) {
        console.log(e);
        this.$bvToast.toast(`${e.data.url}`, {
          title: "Ошибка",
          variant: "danger",
          toaster: "b-toaster-top-center",
          solid: true
        });
      }
    }
  },
  mixins: [Widgets],
  components: {
    AppWidgetForm,
    AppModalWidgetText,
    AppModalWidgetTitleLink,
    AppWidgetItemPersonal,
    AppModalWidgetClient
  }
};
</script>
