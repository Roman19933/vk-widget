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
  watch: {
    formSegmentation: {
      handler(bef) {
        console.log(bef);
        let segment = this.widget.segmentation;
        let clone = {
          sex: bef.sex ? bef.sex.id : null,
          age: { from: bef.age.from, to: bef.age.to },
          bdate: bef.bdate ? bef.bdate : null,
          relation: bef.relation ? bef.relation.id : null,
          city: bef.city ? bef.city.id : null,
          devices: bef.devices ? bef.devices.screen_name : "",
          user_surname: bef.user_surname
            ? this.splitStr(`${bef.user_surname}`,"\n")
            : null,
          user_name: bef.user_name ? this.splitStr(`${bef.user_name}`,"\n") : null,
          user_interests: bef.user_interests
            ? this.splitStr(`${bef.user_interests}`,"\n")
            : null,
          relation_groups: bef.relation_groups
            ? this.splitStr(`${bef.relation_groups}`,"\n")
            : null,
          users: bef.users ? this.splitStr(`${bef.users}`,"\n") : null,
          groups_exclude: bef.groups_exclude
            ? this.splitStr(`${bef.groups_exclude}`,"\n")
            : null,
          groups: this.$route.query.edit ? this.splitStr(`${bef.groups}`,",").join("\n") : this.splitStr(`${bef.groups}`,"\n")
        };
        console.log(clone.groups)
        Object.assign(segment, clone);
      },
      deep: true
    }
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
      // this.formSegmentation = JSON.parse(
      //   JSON.stringify(this.widgetEdit.segmentation)
      // );
    }
    this.formSegmentation = JSON.parse(
      JSON.stringify(this.widget.segmentation)
    );
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
    // if (this.$route.query.edit) {
    //   this.widgetEdit = JSON.parse(
    //     JSON.stringify(this.$store.getters["server/sales/item"])
    //   );
    //   Object.assign(this.widget, this.widgetEdit);
    //   // this.formSegmentation = JSON.parse(
    //   //   JSON.stringify(this.widgetEdit.segmentation)
    //   // );
    // }
  },
  methods: {
    splitStr(str,i) {
      if (str) {
        return str.split(i);
      } else {
        return null;
      }
    },
    joinStr(arr) {
      if (str) {
        return arr.join("\n");
      } else {
        return null;
      }
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
