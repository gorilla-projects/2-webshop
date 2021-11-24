var app = new Vue({
    el: '#app',
    data: {
        appName: 'The Fruit Bowl',
        products: [],
    },

    mounted() {
        this.$on('add-to-cart', (id) => {
            this.products.push(id)
        })
    },

    methods: {
        updateCart(id) {
            this.products.push(id)
        }
    }
})

Vue.config.devtools = true
Vue.config.productionTip = false