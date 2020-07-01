<template>
  <form action="#" @submit.prevent="create">
    <div class="widgets widget-page">
      <div class="widgets__wrapper widget-page__wrapper">
        <div class="widgets__left">
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
                  <img src="/img/box.png" alt />
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
                <div class="widgets__items widgets__items_cover">
                  <draggable
                    v-model="widget.data.rows"
                    group="product"
                    class="widgets__items_draggable"
                  >
                    <template v-for="(item, index) in widget.data.rows">
                      <app-widget-item-cover
                        v-model="widget.data.rows[index]"
                        :prename-validation="`data.rows.${index}.`"
                        :validation-errors="validationErrors"
                        :key="index"
                        :itemLength="widget.data.rows.length"
                        @remove:item="removeItem(widget.data.rows, index)"
                      />
                    </template>
                    <button
                      class="add-item"
                      @click.prevent="addItem(widget.data.rows)"
                      v-if="widget.data.rows.length < 3 && !this.switch"
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
import AppWidgetItemCover from "@/components/setup/widgets/AppWidgetItemCoverComponent";
import AppModalWidgetText from "@/components/modal/widgets/AppModalWidgetTextComponent";
import AppModalWidgetTitleLink from "@/components/modal/widgets/AppModalWidgetTitleLinkComponent";

export default {
  data() {
    return {
      widget: {
        type_name: "Акции в обложках",
        type_link: "/setup/coverlist/cover?category=sales&edit=true",
        is_segmentation: false,
        data: {
          more: "",
          more_url: "",
          title: "{firstname}, может пора расслабится?",
          title_counter: "",
          title_url: "",
          rows: [
            {
              button: "Забронировать",
              button_url: "",
              cover_id: "",
              icon_url: "",
              descr: "",
              title: "",
              url: ""
            }
          ]
        },
        is_active: false,
        name: "Виджет «Акции в обложках»",
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
        type: "cover_list",
        sc_type: "cover_sales"
      }
    };
  },
  mixins: [Widgets],
  components: {
    AppWidgetForm,
    AppWidgetItemCover,
    AppModalWidgetText,
    AppModalWidgetTitleLink
  },
  methods: {
    addItem(arr) {
      arr.push({
        button: "",
        button_url: "",
        cover_id: "",
        descr: "",
        title: "",
        url: ""
      });
    }
  }
};
</script>
