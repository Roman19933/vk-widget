
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
}
