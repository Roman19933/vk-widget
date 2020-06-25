import { mapGetters } from "vuex";
const dateNow = new Date();
export default {
  data() {
    return {
      widgetEdit: null,
      formSegmentation: {},
      validationErrors: {},
      error: false,
      loading: false,
      switch: false,
      modal: "",
      defaultName: `Виджет-${dateNow.getTime()}`,
      userFoto: ""
    };
  },
  computed: {
    ...mapGetters({
      user: "vk/bridge/user"
    })
  },
  created() {
    if (this.$route.query.edit) {
      this.widgetEdit = JSON.parse(
        JSON.stringify(this.$store.getters["server/sales/item"])
      );
      Object.assign(this.widget, this.widgetEdit);
    }
    // this.widget.segmentation === null ? this.widget.segmentation = { age: {from:null, to:null}} : this.widget.segmentation
    // if (this.widget.segmentation === null) {
    //   this.widget.segmentation = { age: {from:null, to:null}}
    //   console.log(this.widget.segmentation);
    // }
    this.formSegmentation =
      this.widget.segmentation !== null
        ? JSON.parse(JSON.stringify(this.widget.segmentation))
        : (this.widget.segmentation = {
            age: { from: null, to: null },
            other: {}
          });
  },
  watch: {
    formSegmentation: {
      handler(bef) {
        if (bef) {
          this.widget.segmentation = bef;
        }
      },
      deep: true
    }
  },
  async mounted() {
    this.widget.name = this.defaultName;
    let self = this;
    this.$on("edit:element", e => {
      self.modal = e.typeModal;
      self.mapData = e.map;
      self.other = e.other || null;
    });
    await this.$store.dispatch("vk/bridge/getUser");
  },
  methods: {
    isSegmentation(e) {
      this.widget.is_segmentation = e;
      console.log(e);
    },
    handlerSaved(e) {
      if (this.modal === "modal-widget-text") {
        this.widget = e;
      } else {
        this.widget.data = e;
      }
    },
    clear() {
      this.mapData = "";
      this.modal = "";
    },
    userInfo(val) {
      this.switch = val;
      if (val) {
        this.widget.data.title = this.widget.data.title.replace(
          "{firstname}",
          this.user.first_name
        );
        this.userFoto = this.user.photo_100;
      } else {
        this.widget.data.title = this.widget.data.title.replace(
          this.user.first_name,
          "{firstname}"
        );
        this.userFoto = "";
      }
    },
    addItem(arr) {
      arr.push({
        descr: "",
        icon_id: "",
        // icon_type: "",
        link: "",
        link_url: "",
        title: "",
        url: ""
      });
    },
    removeItem(arr, index) {
      arr.splice(index, 1);
    },
    async create() {
      this.loading = true;
      try {
        let payload = this.widget;
        const groupId = this.$store.getters["server/token/vkQuery"].vk_group_id;
        payload.group_id = +groupId;
        if (payload.id || false) {
          console.log("id");
          await this.$store.dispatch("server/sales/edit", payload);
          this.$bvToast.show("update-toast");
          this.$router.push("/main");
        } else {
          console.log("no id");
          await this.$store.dispatch("server/sales/create", payload);
          this.$bvToast.show("create-toast");
          this.$router.push("/main");
        }
      } catch ({ data }) {
        this.validationErrors = data;
        data ? (this.error = true) : (this.error = false);
        this.$bvToast.toast(
          "Некоторые поля заполнены неверно. Внесите изменения и попробуйте снова.",
          {
            title: "Ошибка",
            variant: "danger",
            toaster: "b-toaster-top-center",
            solid: true
          }
        );
        console.log(data);
      } finally {
        this.loading = false;
      }
    }
  }
};
