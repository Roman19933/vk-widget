export default {
    methods: {
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
            arr.splice(index, 1);
        }
    }
}