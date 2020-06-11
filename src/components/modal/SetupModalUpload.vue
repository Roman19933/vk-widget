<template>
  <b-modal
    v-model="show"
    :id="id"
    hide-header
    hide-footer
    centered
    dialog-class="modal-dialog__widgets_upload"
  >
   <app-loader
          v-model="fotoLoading"
          class="foto-load"
        >
    <div class="modal__wrapper modal__wrapper-widgets modal__wrapper-widgets_upload">
      <button class="modal__close" @click.prevent="show = !show">
        <img src="/img/modal-close.png" alt />
      </button>
      <div class="widgets-setting__content">
        <div class="widgets-setting__input">
          <span class="modal__title">загрузка изображения</span>
        </div>
        <label class="label" :class="this.image ? types(this.type) : ''">
          <input type="file" id="upload" @change="changeImage" accept="image/*" />
          <img src="/img/loading.png" alt v-if="!this.image" />
          <img :src="preview" alt v-else class="preview" />
          <p v-if="!this.image">
            Рекомендуемое разрешение 480х720 рх.
            Изображение выровнено по центру. Формат .png или .jpg
          </p>
        </label>
        <div class="widgets-setting__btn">
          <div v-if="!this.image">
            <label for="upload">
              <input type="file" id="upload" @change="changeImage" accept="image/*" />
              <span class="gen-btn">Загрузить</span>
            </label>
          </div>
          <button type="submit" @click.prevent="getFotoId" class="gen-btn" v-else>Принять</button>
        </div>
      </div>
    </div>

   </app-loader>
  </b-modal>
<!-- </app-loader
          v-model="vidgetLoad"
          class="top-center"
        > -->
</template>
<script>
import axios from "axios";
export default {
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    },
    id: {
      type: String,
      default: "default"
    },
    type: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      show: false,
      image: "",
      preview: "",
      size: "",
      imgId: "",
      groupId:'',
      fotoLoading:false,
    };
  },
  computed: {
    fotoId() {
      return this.$store.getters["server/upload/fotoId"];
    }
  },
  mounted() {
      this.groupId = this.$store.getters["server/token/vkQuery"].vk_group_id;
      console.log(this.groupId)
      switch (this.type) {
      case "cover":
        this.size = "510x128";
        break;
      case "tilesLarge":
        this.size = "160x240";
        break;
      case "tilesSquare":
        this.size = "160x160";
        break;
    }
  },
  methods: {
    types(types) {
      switch (types) {
        case "cover":
          return "cover";
          break;
        case "tilesSquare":
          return "tilesSquare";
          break;
        case "tilesLarge":
          return "tilesLarge";
          break;
      }
    },
    changeImage(event) {
      let img = event.target.files[0];
      if (/\.(jpe?g|png)$/i.test(img.name)) {
        this.image = img;
      }
      this.createImage(this.image);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = e => {
        vm.preview = e.target.result;
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    },
    async getFotoId() {
      this.fotoLoading = true
      let fd = new FormData();
      fd.append("image", this.image, this.image.name);
      fd.append("group_id", +this.groupId);
      fd.append("size", this.size);
      await this.$store.dispatch("server/upload/uploadFoto", fd);
      this.fotoLoading = false
      if (this.type === "cover") {
        this.data.cover_id = this.fotoId;
        // this.getUrlFoto(this.data.cover_id);
      } else {
        this.data.icon_id = this.fotoId;
        // this.getUrlFoto(this.data.icon_id);
      }
      this.$emit("url");
      // await this.$store.dispatch("server/upload/getUrl", {
      //   group_id: 195873545,
      //   image_id: this.imgId
      // });
      this.$bvModal.hide(this.id);
      this.image = this.preview = "";
    },
    // async getUrlFoto(idxFoto) {
    //   try {
    //     let {data} = await this.$store.dispatch("server/upload/getUrl", {
    //       group_id: +this.groupId,
    //       image_id: idxFoto
    //     });
    //     // this.urlImg.push(data.response[0].images[0].url)
    //     this.$emit("url",data.response[0].images[0].url);
    //   } catch (e) {
    //     console.log("e", e);
    //   }
    // }
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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &.cover {
    width: 100%;
    height: 75.28px;
  }
  &.tilesSquare {
    width: 130px;
    height: 130px;
  }
  &.tilesLarge {
    width: 86.66px;
    height: 130px;
  }
}
</style>
