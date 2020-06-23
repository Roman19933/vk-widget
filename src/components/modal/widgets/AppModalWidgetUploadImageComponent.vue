<template>
  <b-modal
    v-model="show"
    hide-header
    hide-footer
    centered
    dialog-class="modal-dialog__widgets_upload"
  >
    <app-loader v-model="loading" class="foto-load">
      <div class="modal__wrapper modal__wrapper-widgets modal__wrapper-widgets_upload">
        <button class="modal__close" @click.prevent="show = !show">
          <img src="/img/modal-close.png" alt />
        </button>
        <div class="widgets-setting__content">
          <div class="widgets-setting__input">
            <span class="modal__title">загрузка изображения</span>
          </div>
          <label class="label">
            <input type="file" @change="changeImage" style="display: none" accept="image/*" />
            <img src="/img/loading.png" alt v-if="!preview" />
            <img :src="preview" alt v-else class="preview" />
            <p v-if="!preview">
              Рекомендуемое разрешение 480х720 рх.
              Изображение выровнено по центру. Формат .png или .jpg
            </p>
          </label>
          <div class="widgets-setting__btn">
            <div v-if="!file">
              <label for="upload">
                <input type="file" id="upload" @change="changeImage" accept="image/*" />
                <span class="gen-btn">Загрузить</span>
              </label>
            </div>
            <button type="submit" @click.prevent="onUploadImage" class="gen-btn" v-else>Принять</button>
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
    maxWidth: 50,
    maxHeight: 50,
    mimeType: "image/jpeg",
    debug: false
  }
};
export default {
  mixins: [modalWidgets],
  data() {
    return {
      form: {
        image: "",
        src: ""
      },
      loading: false,
      file: null,
      preview: ""
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
      let self = this
      if (!!file && /\.(jpe?g|png)$/i.test(file.name)) {
        this.loading = true;
        try {
          let preview = await this.$convertToBase64(file);
          self.file = file;
          try {
            let image = await Jimp.read(preview);
            try {
              image
                .contain(self.sizeImage.maxWidth, self.sizeImage.maxHeight)
                .background(0xffffffff)

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
    },
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
