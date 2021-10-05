const app = Vue.createApp({
    data() {
        return {
            total: 0
        };
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function(){
                that.total = 0;
            }, 5000);
        }
    },
    computed: {
        result() {
            if (this.total < 37) {
                return "Not there yet.";
            }
            if (this.total > 37 ) {
                return "Too Much!";
            }
            return this.total;
        }

    },
    methods: {
        addFive() {
            this.total = this.total + 5;
        },
        addOne() {
            this.total = this.total + 1;
        }
    }
});

app.mount('#assignment');