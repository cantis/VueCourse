const app = Vue.createApp({
    data(){
        return{
            outputOne: '',
            outputTwo: ''
        };
    },
    methods: {
        showalert() {
            alert('Battle Stations!');
        },
        setOutputOne(event) {
            this.outputOne = event.target.value;
        },
        setOutputTwo(event) {
            this.outputTwo = event.target.value;
        }
    }
});

app.mount('#assignment');