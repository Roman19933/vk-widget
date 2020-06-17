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
                    >{{ widget.data.title }}</a
                  >
                </div>
                <div class="widgets__items widgets__items_client">
                  <draggable
                    v-model="widget.data.body"
                    group="client"
                    class="widgets__items_draggable "
                  >
                    <template v-for="(item, index) in widget.data.body">
                      <app-widget-item-client
                        v-model="widget.data.body[index]"
                        :key="index"
                        @remove:item="removeItem(widget.data.body, index)"
                      />
                    </template>
                    <button
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
                      v-if="widget.data.body.length < 10 && !this.switch"
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
                  <a href="#">правил ВКонтакте!</a>
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
import AppWidgetItemClient from "@/components/setup/widgets/AppWidgetItemClientsComponent";
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
          title: "{firstname}, среди наших клиентов:",
          title_counter: "",
          title_url: "",
          body: [],
          head: [
            {
              text: "",
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
    async groupLink(e) {
      try {
        let link = e;
        let { data } = await this.$store.dispatch(
          "server/group/getInfoForGroupToUrl",
          link
        );
        this.widget.data.body.push([
          {
            url: e,
            text: data.data[0].name,
            icon_id: "club" + data.data[0].id,
            icon_url: data.data[0].photo_50
          }
        ]);
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
    AppWidgetItemClient,
    AppModalWidgetClient
  }
};
</script>

<style lang="scss" scoped></style>
