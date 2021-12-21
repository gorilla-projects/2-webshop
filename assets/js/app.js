let app = new Vue({
    el: '#app',

    data: {
        appName: 'The Fruit Bowl',
        shoppingCart: [],
        appFruits: fruits,
        fruit_filter: 'all',
    },

    mounted() {
        this.$on('add-to-cart', (id) => {
            this.updateCart(id)
        });
    },

    methods: {
        updateCart(id) {
            this.shoppingCart.push(id);

            this.$refs.cartComponent.updateShoppingCart('testje');
        },

        showCart() {
            $('.layer').fadeIn();

            $('.cart').toggle({
                direction: 'right',
            });
        },

        fadeOutShoppingCart() {
            this.$refs.cartComponent.closeShoppingCart();
        },

        landingPage() {

        },

        filterFruit() {
            if (this.fruit_filter == 'all') {
                this.appFruits.forEach(element => {
                    element.show = true;
                });
            } else {
                this.appFruits.forEach(element => {
                    if (element.category != this.fruit_filter) {
                        element.show = false;
                    } else {
                        element.show = true;
                    }
                });
            }
        },

        template: `<h1>Webshop</h1>`,
    },
})

Vue.config.devtools = true;
Vue.config.productionTip = false