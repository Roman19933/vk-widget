import { mapGetters } from "vuex"
export default {
  data() {
    return {
      switch: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'vk/bridge/user'
    })
  },
  async mounted() {
    await this.$store.dispatch('vk/bridge/getUser')
    console.log(this.user);
  },
  methods: {
    userInfo(val) {
      this.switch = val
      if (val) {
        this.widget.data.title = this.widget.data.title.replace("{firstname}", this.user.first_name)
      } else {
        this.widget.data.title = this.widget.data.title.replace(this.user.first_name, "{firstname}")
      }
    },
    onSubmit() {
      console.log(this.widget);
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
      // console.log(arr[index].icon_id)
      // arr[index].icon_id = index
      arr.splice(index, 1);
    }
  }
};
