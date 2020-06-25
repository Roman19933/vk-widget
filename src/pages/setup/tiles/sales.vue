<template>
  <client-only>
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
                    <img src="/img/heart.png" alt />
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
                  <div class="widgets__items">
                    <draggable
                      v-model="widget.data.tiles"
                      group="product"
                      class="widgets__items_draggable"
                    >
                      <template v-for="(item, index) in widget.data.tiles">
                        <app-widget-item-product
                          v-model="widget.data.tiles[index]"
                          :prename-validation="`data.tiles.${index}.`"
                          :validation-errors="validationErrors"
                          :key="index"
                          large
                          :itemLength="widget.data.tiles.length"
                          @remove:item="removeItem(widget.data.tiles, index)"
                        />
                      </template>
                      <button
                        class="add-item"
                        @click.prevent="addItem(widget.data.tiles)"
                        v-if="widget.data.tiles.length < 10 && !this.switch"
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
                    >
                      {{ widget.data.more ? widget.data.more : "+ добавить" }}
                    </a>
                  </div>
                </div>
                <div class="widgets__save">
                  <button type="submit" class="gen-btn">Сохранить</button>
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
  </client-only>
</template>

<script>
import Widgets from "@/mixins/widgets";
import AppWidgetForm from "@/components/setup/AppWidgetFormComponent";
import AppWidgetItemProduct from "@/components/setup/widgets/AppWidgetItemProductComponent";
import AppModalWidgetText from "@/components/modal/widgets/AppModalWidgetTextComponent";
import AppModalWidgetTitleLink from "@/components/modal/widgets/AppModalWidgetTitleLinkComponent";

export default {
  data() {
    return {
      widget: {
        is_active: false,
        type_name: "Акции и скидки",
        type_link: "/setup/tiles/sales?category=sales&edit=true",
        is_segmentation: false,
        data: {
          more: "",
          more_url: "",
          title: "{firstname}, хочешь купон на скидку в подарок?",
          title_counter: null,
          title_url: "",
          tiles: [
            {
              descr: "",
              icon_id: "",
              link_url: "",
              link: "Получить скидку",
              link_url: "",
              title: "Скидки",
              url: ""
            },
            {
              descr: "",
              icon_id: "",
              link_url: "",
              link: "Получить скидку",
              link_url: "",
              title: "Скидки",
              url: ""
            },
            {
              descr: "",
              icon_id: "",
              link_url: "",
              link: "Получить скидку",
              link_url: "",
              title: "Скидки",
              url: ""
            }
          ]
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
        type: "tiles",
        sc_type: "discounts"
      }
    };
  },
  mixins: [Widgets],
  components: {
    AppWidgetForm,
    AppWidgetItemProduct,
    AppModalWidgetText,
    AppModalWidgetTitleLink
  }
};
</script>
