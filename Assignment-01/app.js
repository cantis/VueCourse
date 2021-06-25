const app = Vue.createApp({
    data() {
        return {
            myName: 'Evan Young',
            myAge: 53,
            imageUrl: 'https://www.winnipegarchitecture.ca/wp-content/uploads/2013/06/esplanade_3.jpg'
         };
    },
    methods: {
        inFiveYears() {
            return this.myAge + 5
        },
        favouriteNumber() {
            return Math.random()
        }
    }
});

app.mount('#assignment');