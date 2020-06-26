
export default {
  props: {
    value: {
      type: Object,
      default: function () {
        return {};
      }
    },
    validationErrors: {
      type: Object,
      default: () => {
        return {};
      }
    },
    prenameValidation: {
      type: String,
      default: null
    },
  },
  // computed: {
  //   mapErros() {
  //     let obj = {};
  //     _.forEach(this.value, (el, key) => {
  //       obj = Object.assign(obj, {
  //         [key]:
  //           this.validationErrors[`${this.prenameValidation}${key}`] || null
  //       });
  //     });
  //     return obj;
  //   }
  // },

}
