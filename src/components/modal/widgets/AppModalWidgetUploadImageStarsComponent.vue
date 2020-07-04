<template>
  <b-modal
    v-model="show"
    hide-header
    hide-footer
    centered
    dialog-class="modal-dialog__widgets_upload"
  >
    <app-loader v-model="loading" class="foto-load">
      <div
        class="modal__wrapper modal__wrapper-widgets modal__wrapper-widgets_upload"
      >
        <button class="modal__close" @click.prevent="show = !show">
          <img src="/img/modal-close.png" alt />
        </button>
        <div class="widgets-setting__content">
          <div
            class="widgets__right w-100 p-0"
            style="overflow: visible; background: none"
          >
            <div class="form__items">
              <div class="item">
                <div class="form-group">
                  <v-select
                    :options="starsOptions"
                    :searchable="false"
                    :clearable="false"
                    label="text"
                    :reduce="i => i.id"
                    placeholder="К-во звезд"
                    v-model="stars"
                  ></v-select>
                </div>
              </div>
            </div>
          </div>

          <div class="widgets-setting__input">
            <span class="modal__title">загрузка изображения</span>
          </div>
          <label for="upload" class="label">
            <input
              id="upload"
              type="file"
              @change="changeImage"
              style="display: none"
              accept="image/*"
            />
            <img src="/img/loading.png" alt v-if="!preview" />
            <img :src="preview" alt v-else class="preview" />
            <p v-if="!preview">
              Рекомендуемое разрешение
              {{
                `${this.sizeImage.maxWidth * 3}x${this.sizeImage.maxHeight * 3}`
              }}
              рх. Изображение выровнено по центру. Формат .png или .jpg
            </p>
          </label>
          <div class="widgets-setting__btn">
            <div v-if="!file">
              <label for="upload">
                <input
                  type="file"
                  style="display: none"
                  @change="changeImage"
                  accept="image/*"
                />
                <span class="gen-btn">Загрузить</span>
              </label>
            </div>
            <button
              type="submit"
              @click.prevent="onUploadImage"
              class="gen-btn"
              v-else
            >
              Принять
            </button>
          </div>
        </div>
      </div>
    </app-loader>
  </b-modal>
</template>

<script>
import modalWidgets from "@/mixins/modalWidgets";
import Jimp from "jimp";
import { mapGetters } from "vuex";
const sizes = {
  cover: {
    quality: 0.7,
    maxWidth: 510,
    maxHeight: 128,
    mimeType: "image/jpeg",
    debug: false
  },
  large: {
    quality: 0.7,
    maxWidth: 160,
    maxHeight: 240,
    mimeType: "image/jpeg",
    debug: false
  },
  square: {
    quality: 0.7,
    maxWidth: 160,
    maxHeight: 160,
    mimeType: "image/jpeg",
    debug: false
  },
  small: {
    quality: 0.7,
    maxWidth: 24,
    maxHeight: 24,
    mimeType: "image/jpeg",
    debug: false
  }
};
const watermarkY = 5;
const watermarkX = 5;
const watermarks = [
  "/img/s1.png",
  "/img/s2.png",
  "/img/s3.png",
  "/img/s4.png",
  "/img/s5.png"
];
export default {
  mixins: [modalWidgets],
  data() {
    return {
      form: {
        image: "",
        src: ""
      },
      starsOptions: [
        {
          id: 1,
          text: "Одна звезда"
        },
        {
          id: 2,
          text: "Две звезды"
        },
        {
          id: 3,
          text: "Три звезды"
        },
        {
          id: 4,
          text: "Четыре звезды"
        },
        {
          id: 5,
          text: "Пять звезд"
        }
      ],
      loading: false,
      file: null,
      preview: "",
      stars: 5
    };
  },
  computed: {
    ...mapGetters({
      vkQuery: "server/token/vkQuery"
    }),
    sizeImage() {
      return this.mapData.other.sizeImage
        ? sizes[this.mapData.other.sizeImage]
        : "cover";
    }
  },
  methods: {
    async onUploadImage() {
      this.loading = true;
      let fd = new FormData();
      fd.append("image", this.file, this.file.name);
      fd.append("group_id", +(this.vkQuery.vk_group_id || 60588010));
      fd.append(
        "size",
        `${this.sizeImage.maxWidth}x${this.sizeImage.maxHeight}`
      );
      try {
        let { data } = await this.$store.dispatch(
          "server/upload/uploadImage",
          fd
        );
        this.form.image = data.response.id;
        this.form.src = data.response.images[0].url;
        this.handlerSave(this.form);
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async changeImage(event) {
      const file = event.target.files[0];
      let self = this;
      if (!!file && /\.(jpe?g|png)$/i.test(file.name)) {
        this.loading = true;
        try {
          let preview = await this.$convertToBase64(file);
          self.file = file;
          try {
            let image = await Jimp.read(preview);
            let watermark = await Jimp.read(watermarks[self.stars - 1]);
            try {
              image
                .contain(
                  self.sizeImage.maxWidth * 3,
                  self.sizeImage.maxHeight * 3
                )
                .background(0xffffffff)
                .composite(watermark, watermarkY, watermarkX);

              self.preview = await image.getBase64Async(Jimp.MIME_JPEG);

              let block = self.preview.split(";");
              let contentType = block[0].split(":")[1];
              let realData = block[1].split(",")[1];
              let blob = self.$b64toBlob(realData, contentType);

              self.file = new File([blob], file.name, { type: blob.type });
            } catch (e) {
              console.log(e);
            }
          } catch (e) {
            console.log(e);
          }
        } catch (e) {
          console.log(e);
        } finally {
          this.loading = false;
        }
      }
    }
  }
};
</script>
<style lang="scss">
.label {
  width: 100%;
  flex-direction: column;
  height: 141px;
  justify-content: space-around;
  overflow: hidden;
  .preview {
    width: auto;
    object-fit: cover;
  }
}
</style>
