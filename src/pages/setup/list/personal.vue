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
                  >{{ widget.data.title }}</a>
                </div>
                <template v-for="(item, index) in widget.data.rows">
                  <app-widget-item-personal
                    v-model="widget.data.rows[index]"
                    :prename-validation="`data.rows.${index}.`"
                    :validation-errors="validationErrors"
                    :key="index"
                    :userPhoto="userFoto"
                    @remove:item="removeItem(widget.data.rows, index)"
                  />
                </template>
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
import AppWidgetItemPersonal from "@/components/setup/widgets/AppWidgetItemPersonalComponent";
import AppModalWidgetText from "@/components/modal/widgets/AppModalWidgetTextComponent";
import AppModalWidgetTitleLink from "@/components/modal/widgets/AppModalWidgetTitleLinkComponent";

export default {
  data() {
    return {
      widget: {
        type_name: "Персональное предложение",
        type_link: "/setup/list/personal?category=sales&edit=true",
        data: {
          more: "",
          more_url: "",
          title: "{firstname}, у нас для тебя спецпредложение!",
          title_counter: "",
          title_url: "",
          rows: [
            {
              address: "",
              button: "Оставить заявку",
              button_url: "vk.me/club195259137",
              descr: "",
              icon_id: "{userAvatar}",
              text:
                "Все просто, жми на кнопку ниже, оставь заявку и мы свяжемся с тобой в считанные секунды",
              time: "",
              title: "Получи бесплатную консультацию!",
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
          userSurname: [],
          userName: [],
          userInterests: [],
          relationGroups: [],
          users: [],
          groups_exclude: [],
          groups: []
        },
        type: "list",
        sc_type: "personal_offer"
      }
    };
  },
  mixins: [Widgets],
  components: {
    AppWidgetForm,
    AppWidgetItemPersonal,
    AppModalWidgetText,
    AppModalWidgetTitleLink
  }
};
</script>

