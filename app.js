const app = Vue.createApp({
    data() {
        return {
            showBooks: true,

            books: [
                { title: 'DLD', author: 'Moss' },
                { title: 'DEPT', author: 'Hello' },
                { title: 'Numerical Analysis', author: 'Zack' },
            ]
        }
    },
    methods: {
        toogleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }

})


app.mount('#app')