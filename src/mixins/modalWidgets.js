import _ from 'lodash'
export default {
    props: {
        value: {
            type: Object,
            require: true
        },
        mapData: {
            type: Object,
            require: true
        }
    },
    data() {
        return {
            show: true,
        }
    },
    mounted() {
        const form = this.form
        _.forEach(form, (el, key) => {
            this.form[key] = this.mapData[key].value
        })
    },
    methods: {
        handlerSave() {
            let item = JSON.parse(JSON.stringify(this.value))
            _.forEach(this.mapData, (el, key) => {
                item[el.fieldName] = this.form[key]
            })
            this.$emit('saved', item)
            this.show = false
        },
    },
    watch: {
        show(newValue) {
            !newValue ? this.$emit('close') : ''
        }
    },
};
