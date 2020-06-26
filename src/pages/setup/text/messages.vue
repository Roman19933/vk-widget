<template>
  <form action="#" @submit.prevent="create">
    <div class="widgets widget-page">
      <div class="widgets__wrapper widget-page__wrapper">
        <div class="widgets__left feedback">
          <app-loader v-model="loading">
            <div class="widgets__header widget-page__head">
              <div class="widgets__header-title widget-page__title">
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
                  <img src="/img/idea.png" alt />
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
                <app-widget-messages
                  v-model="widget.data"
                  :prename-validation="`data.`"
                  :validation-errors="validationErrors"
                />
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
            </div>
          </app-loader>
        </div>
        <div class="widgets__right">
          <app-widget-form
            v-model="formSegmentation"
            @switch="isSegmentation"
            :isSw="widget.is_segmentation"
          />
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
import AppModalWidgetText from "@/components/modal/widgets/AppModalWidgetTextComponent";
import AppModalWidgetTitleLink from "@/components/modal/widgets/AppModalWidgetTitleLinkComponent";
import AppWidgetMessages from "@/components/setup/widgets/AppWidgetItemMessagesComponent";

export default {
  mixins: [Widgets],
  data() {
    return {
      widget: {
        type_name: "Важное сообщение",
        type_link: "/setup/text/messages?category=info&edit=true",
        is_active: false,
        is_segmentation: false,
        data: {
          descr: "Подпишитесь на сообщество и напишите нам",
          more: "",
          more_url: "",
          text: "Каждый подписчик сообщества получает скидку 3% на все товары",
          title: "Важное сообщение!",
          title_counter: "",
          title_url: ""
        },
        name: "",
        segmentation: {
          sex: null,
          age: { from: "", to: "" },
          bdate: null,
          relation: null,
          city: null,
          devices: "",
          user_surname: null,
          user_name: null,
          user_interests: null,
          relation_groups: null,
          users: null,
          groups_exclude: null,
          groups: null,
          other: {}
        },
        type: "text",
        sc_type: "important_message"
      }
    };
  },
  components: {
    AppWidgetForm,
    AppWidgetMessages,
    AppModalWidgetText,
    AppModalWidgetTitleLink
  }
};
</script>
