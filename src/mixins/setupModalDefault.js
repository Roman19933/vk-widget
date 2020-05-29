export default {
    data() {
        return {
            openExtra: false
        }
    },
    methods: {
        change(str, variable) {
            let word = str.split(" ");
            for (let i in word) {
                if (word[i] === "[") {
                    this.openExtra = true;
                } else if (word[i] === "") {
                    this.openExtra = false;
                }
            }
            this.$on("changes", val => {
                let newStr = str.replace("[", val.getAttribute("data-value"));
                this.openExtra = false;
                switch (variable) {
                    case "title":
                        this.title = newStr;
                        break;
                    case "link":
                        this.link = newStr;
                        break;
                    case "subs":
                        this.subs = newStr;
                        break;
                    case "messages":
                        this.messages = newStr;
                        break;
                }
            });
        },
    }
}