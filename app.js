const app = Vue.createApp({
    data() {
        return {
            showBooks: true,

            url: "https://www.google.com",

            books: [
                { title: 'DLD', author: 'Moss', img: 'assets/1.jfif', isFav: true },
                { title: 'DEPT', author: 'Hello', img: 'assets/2.jfif', isFav: false },
                { title: 'Numerical Analysis', author: 'Zack', img: 'assets/3.jfif', isFav: true },
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