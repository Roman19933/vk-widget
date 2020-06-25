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
                <div class="widgets__items widgets__items_product">
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
                    >{{ widget.data.more ? widget.data.more : "+ добавить" }}</a
                  >
                </div>
              </div>
              <div class="widgets__save">
                <button class="gen-btn" type="submit">Сохранить</button>
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
      // formSegmentation: {},
      widget: {
        type_name: "Акционные товары",
        type_link: "/setup/tiles/actions?category=sales&edit=true",
        is_segmentation: false,
        data: {
          more: "",
          more_url: "",
          title: "{firstname}, успей на распродажу!",
          title_counter: "",
          title_url: "",
          tiles: [
            {
              descr: "3 900 руб",
              icon_id: "",
              icon_url: "",
              link: "Написать",
              link_url: "",
              title: "Кольцо",
              url: ""
            },
            {
              descr: "3 900 руб",
              icon_id: "",
              icon_url: "",
              link: "Написать",
              link_url: "",
              title: "Кольцо",
              url: ""
            },
            {
              descr: "3 900 руб",
              icon_id: "",
              icon_url: "",
              link: "Написать",
              link_url: "",
              title: "Кольцо",
              url: ""
            }
          ]
        },
        is_active: false,
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
        sc_type: "sales"
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
